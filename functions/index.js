const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { SolapiMessageService } = require('solapi');

admin.initializeApp();
const db = admin.firestore();

// 솔라피 서비스 초기화 (API Key, Secret 입력)
const messageService = new SolapiMessageService(
  'NCSYMKWMTF3OAY06', 
  '7XWOKS9V3YJ5GYYZBSCPN93FSRQ8FCHL'
);

/**
 * 1:1 알림톡 발송용 (수동/트리거)
 * 'messages' 컬렉션에 새 문서가 생성되면 실행됩니다.
 */
exports.sendAlimtalk = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const workerDocId = data.workerDocId;

    if (!workerDocId) {
      console.log('No workerDocId found');
      return null;
    }

    try {
      // 1. 근로자 정보 가져오기
      const workerDoc = await db.collection('workers').doc(workerDocId).get();
      if (!workerDoc.exists) {
        console.log('Worker not found:', workerDocId);
        return null;
      }

      const workerData = workerDoc.data();
      const phoneNumber = (workerData.phone || workerData.phoneNumber || workerData['연락처'] || workerData.phone_number || '').replace(/-/g, '');
      
      if (!phoneNumber || phoneNumber.length < 10) {
        console.log('Invalid phone number:', phoneNumber);
        return null;
      }

      // 2. 알림톡 메시지 데이터 구성 (템플릿 타입에 따라 분기)
      let messageData = {};
      
      if (data.type === 'booking_guide') {
        // [검진 가이드] 알림톡 템플릿
        messageData = {
          to: phoneNumber,
          from: '01053155850',
          kakaoOptions: {
            pfId: 'KA01PF260401123510015EukHvlIDzQP',
            templateId: 'KA01TP260401123529786bxLeVETmEai',
            variables: {
              "#{성함}": workerData.name || '고객',
              "#{디데이}": '가이드',
              "#{안내내용예시}": data.customContent || '검진 예약 가이드 및 준비사항을 확인해 주세요.'
            }
          }
        };
      } else if (data.type === 'text') {
        // 일반 문자 발송 (템플릿 미지정 시)
        messageData = {
          to: phoneNumber,
          from: '01053155850',
          text: data.text || '[체킷] 메시지가 도착했습니다.'
        };
      } else {
        return null;
      }

      // 3. 메시지 발송
      const result = await messageService.sendOne(messageData);
      console.log('Message sent successfully:', result);
      
      return snap.ref.update({
        status: 'sent',
        sentAt: admin.firestore.FieldValue.serverTimestamp(),
        solapiResult: result
      });

    } catch (error) {
      console.error('Error sending message:', error);
      return snap.ref.update({
        status: 'error',
        error: error.message
      });
    }
  });

/**
 * 매일 오전 7시에 실행되는 자동 예약 발송 스케줄러
 * 검진 7일전, 3일전, 1일전, 당일 대상자에게 자동으로 알림톡을 보냅니다.
 */
exports.scheduledAlimtalk = functions.pubsub
  .schedule('0 7 * * *')
  .timeZone('Asia/Seoul')
  .onRun(async (context) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    try {
      // 1. 예약 정보가 있는 근로자 전체 조회
      const snap = await db.collection('workers').where('reservedDate', '!=', null).get();
      
      const targetDays = [7, 3, 1, 0]; // 알림을 보낼 D-Day 설정
      const sendPromises = [];

      snap.forEach(doc => {
        const worker = doc.data();
        if (!worker.reservedDate) return;
        
        const reservedDate = new Date(worker.reservedDate);
        reservedDate.setHours(0, 0, 0, 0);

        // D-Day 계산
        const diffTime = reservedDate - today;
        const dDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (targetDays.includes(dDay)) {
          const phoneNumber = (worker.phone || worker.phoneNumber || worker['연락처'] || worker.phone_number || '').replace(/-/g, '');
          if (phoneNumber.length < 10) return;

          const name = worker.name || '고객';
          const dDayText = dDay === 0 ? '당일' : `${dDay}`;
          const guideContent = dDay === 0 
            ? '오늘은 건강검진일입니다. 잊지 말고 방문해 주세요!' 
            : `검진이 ${dDay}일 앞으로 다가왔습니다. 준비 사항을 확인해 주세요.`;

          const messageData = {
            to: phoneNumber,
            from: '01053155850',
            kakaoOptions: {
              pfId: 'KA01PF260401123510015EukHvlIDzQP',
              templateId: 'KA01TP260401123529786bxLeVETmEai',
              variables: {
                "#{성함}": name,
                "#{디데이}": dDayText,
                "#{안내내용예시}": guideContent
              }
            }
          };

          sendPromises.push(
            messageService.sendOne(messageData)
              .then(() => console.log(`Auto Send Success: ${name} (D-${dDay})`))
              .catch(err => console.error(`Auto Send Fail: ${name}`, err))
          );
        }
      });

      await Promise.all(sendPromises);
      console.log(`Scheduled Task Done. Sent: ${sendPromises.length} messages.`);
      return null;
    } catch (error) {
      console.error('Scheduled Task Error:', error);
      return null;
    }
  });
