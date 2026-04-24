const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { SolapiMessageService } = require('solapi');

admin.initializeApp();
const db = admin.firestore();

// 솔라피 서비스 초기화 (v5 기준)
const messageService = new SolapiMessageService(
  'NCS3LR13SE2MENQS', 
  'HB0SBNAPBBULLWL3EXPTH6QPQYKKYPGD'
);

/**
 * 1:1 알림톡 발송용 (수동/트리거)
 */
exports.sendAlimtalk = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const workerDocId = data.workerDocId;

    if (!workerDocId) return null;

    try {
      // 1. 근로자 정보 가져오기
      const workerDoc = await db.collection('workers').doc(workerDocId).get();
      if (!workerDoc.exists) return null;
      
      const workerData = workerDoc.data();
      const phoneNumber = (workerData.phone || workerData.phoneNumber || workerData['연락처'] || '').replace(/-/g, '');

      if (!phoneNumber) return null;

      // 2. 메시지 데이터 구성 (v5 SDK 포맷)
      let message = {};
      
      if (data.type === 'booking_guide') {
        message = {
          to: phoneNumber,
          from: '01022097951',
          type: 'ATA',
          templateId: 'KA01TP260401123529786bxLeVETmEai',
          pfId: 'KA01PF260401123510015EukHvlIDzQP',
          variables: {
            "#{성함}": workerData.name || '고객',
            "#{디데이}": '가이드',
            "#{안내내용예시}": data.customContent || '검진 예약 가이드 및 준비사항을 확인해 주세요.'
          }
        };
      } else if (data.type === 'text') {
        message = {
          to: phoneNumber,
          from: '01022097951',
          type: 'SMS',
          text: data.text || '[체킷] 메시지가 도착했습니다.'
        };
      } else {
        return null;
      }

      // 3. 메시지 발송
      console.log('Attempting v5 send with message:', JSON.stringify(message, null, 2));
      const result = await messageService.sendOne(message);
      console.log('Solapi v5 Result:', JSON.stringify(result, null, 2));
      
      return snap.ref.update({
        status: 'sent',
        sentAt: admin.firestore.FieldValue.serverTimestamp(),
        solapiResult: result
      });

    } catch (error) {
      console.error('Solapi v5 Error:', error);
      return snap.ref.update({
        status: 'error',
        error: error.message,
        errorDetail: error.data || error.response || 'No additional data'
      });
    }
  });

/**
 * 매일 오전 7시 자동 예약 발송 스케줄러
 */
exports.scheduledAlimtalk = functions.pubsub
  .schedule('0 7 * * *')
  .timeZone('Asia/Seoul')
  .onRun(async (context) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    try {
      const snap = await db.collection('workers').where('reservedDate', '!=', null).get();
      const targetDays = [7, 3, 1, 0];
      const messages = [];

      snap.forEach(doc => {
        const worker = doc.data();
        if (!worker.reservedDate) return;
        
        const reservedDate = new Date(worker.reservedDate);
        reservedDate.setHours(0, 0, 0, 0);
        const dDay = Math.ceil((reservedDate - today) / (1000 * 60 * 60 * 24));

        if (targetDays.includes(dDay)) {
          const phoneNumber = (worker.phone || worker.phoneNumber || worker['연락처'] || '').replace(/-/g, '');
          if (phoneNumber.length < 10) return;

          messages.push({
            to: phoneNumber,
            from: '01022097951',
            type: 'ATA',
            templateId: 'KA01TP260401123529786bxLeVETmEai',
            pfId: 'KA01PF260401123510015EukHvlIDzQP',
            variables: {
              "#{성함}": worker.name || '고객',
              "#{디데이}": dDay === 0 ? '당일' : dDay.toString(),
              "#{안내내용예시}": dDay === 0 
                ? '오늘은 건강검진일입니다. 잊지 말고 방문해 주세요!' 
                : `검진이 ${dDay}일 앞으로 다가왔습니다. 준비 사항을 확인해 주세요.`
            }
          });
        }
      });

      if (messages.length > 0) {
        const result = await messageService.sendMany(messages);
        console.log(`Auto Send Done. Total: ${messages.length}`, result);
      }
      return null;
    } catch (error) {
      console.error('Scheduled Task Error:', error);
      return null;
    }
  });
