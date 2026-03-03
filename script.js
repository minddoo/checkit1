document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL, CORRECT & FINAL TRANSLATION DATA ---
    const translations = {
        ko: {
            'nav_home': '홈',
            'hero_title': '외국인을 위한 건강검진,<br>언어의 장벽 없이 편안하게.',
            'hero_subtitle': '일정 누락, 이해하기 어려운 검진 안내, 한국어로만 제공되는 결과지까지.<br>CHECKIT이 모든 비의료 과정을 해결합니다.',
            'hero_cta': '지금 바로 상담 신청',
            'service_for_title': '누구를 위한 서비스인가요?',
            'individual_title': '개인 고객',
            'individual_desc': '한국 거주/방문 외국인 개인이 언어 장벽 없이<br>편안하게 건강검진을 받을 수 있도록 지원합니다.',
            'corporate_title': '기업 고객',
            'corporate_desc': '외국인 근로자의 단체 건강검진을 쉽고 효율적으로 관리하여,<br>기업의 보건 관리 부담을 덜어드립니다.',
            'learn_more': '더 알아보기',
            'view_workflow': '실무과정 보기',
            'why_us_title': '왜 CHECKIT인가요?',
            'why_us_subtitle_new': '의료 서비스의 높은 질에도 불구하고, 외국인들은 예약, 접수, 결과 확인 등 \'비의료 과정\'에서 어려움을 겪습니다.<br>CHECKIT은 바로 이 공백을 채웁니다.',
            'why_us_feature1_title': '커뮤니케이션 전문',
            'why_us_feature1_desc': '병원 선택부터 결과 번역까지, 언어와 문화의 장벽으로 인한 모든 소통 문제를 해결합니다.',
            'why_us_feature2_title': '100% 고객 중심',
            'why_us_feature2_desc': '병원과의 계약 없이 오직 고객의 입장에서, 고객에게 필요한 최적의 선택지를 제안하고 과정을 돕습니다.',
            'why_us_feature3_title': '비의료 과정에 집중',
            'why_us_feature3_desc': '의료 행위를 제외한 모든 부수적인 절차를 대행하여, 고객이 오직 건강검진에만 집중할 수 있도록 합니다.',
            'why_us_feature4_title': '합리적인 비용',
            'why_us_feature4_desc': '의료기관과 연계 없이 독립적으로 운영되므로, 불필요한 중개 수수료가 없습니다. 순수 서비스 이용료만으로 이용 가능합니다.',
            'process_title': 'CHECKIT 이용 과정',
            'process_step1_title': '상담 및 병원 선택 지원',
            'process_step1_desc_new': '원하는 검진 항목과 일정 상담 후, 조건에 맞는 최적의 병원 리스트를 제공하여 선택을 돕고 예약을 진행합니다.',
            'process_step2_title': '실시간 소통 지원',
            'process_step2_desc_new': '검진 당일, 병원 내에서 발생하는 모든 소통을 실시간으로 지원하여 불편함이 없도록 합니다.',
            'process_step3_title_new': '결과 번역 파일 전달',
            'process_step3_desc_new': '고객님이 전달해주신 결과지를 고객님의 언어로 단순 번역 및 요약하여, 이메일이나 메신저를 통해 파일로 전달합니다.',
            'testimonials_title': '생생한 고객 후기',
            'testimonials_subtitle': 'CHECKIT과 함께한 고객들의 목소리를 직접 들어보세요.',
            'testimonial1_text': '“한국에서 건강검진은 처음이라 막막했는데, CHECKIT 덕분에 병원 선택부터 예약, 검진 당일 소통까지 정말 편하게 진행했어요. 결과지도 모국어로 번역해주셔서 이해가 쉬웠습니다.”',
            'testimonial1_author': '안나, 유학생',
            'testimonial1_type': '한국 거주 외국인',
            'testimonial2_text': '“부모님을 한국에 초청해 건강검진을 시켜드리고 싶었는데, 언어와 절차 문제로 걱정이 많았어요. CHECKIT 매니저님이 모든 과정을 알아서 처리해주셔서 정말 든든했습니다.”',
            'testimonial2_author': '데이비드, 해외 거주',
            'testimonial2_type': '해외 거주 외국인 가족',
            'testimonial3_text': '“외국인 직원들의 단체 건강검진이 항상 골치 아픈 업무였는데, CHECKIT 덕분에 예약부터 결과 관리까지 정말 간편해졌습니다. 직원들의 만족도도 매우 높아요.”',
            'testimonial3_author': '박팀장',
            'testimonial3_type': '기업 고객 담당자',
            'contact_title_new': '궁금한 점이 있으신가요?',
            'contact_subtitle_new': 'CHECKIT의 전문 매니저가 신속하고 친절하게 답변해 드립니다.',
            'contact_form_email_label': '이메일 주소',
            'contact_form_email_placeholder': '예: example@checkit.com',
            'contact_form_phone_label': '연락처 (선택사항)',
            'contact_form_phone_placeholder': '예: 010-1234-5678',
            'contact_form_message_label': '문의 내용',
            'contact_form_message_placeholder': '궁금한 점을 자세히 적어주세요.',
            'contact_form_submit_button': '문의하기',
            'individual_page_title': '개인 고객 맞춤 서비스',
            'individual_page_subtitle': 'CHECKIT은 한국에 거주하거나 방문하는 모든 외국인 개인이 언어의 장벽 없이 최상의 건강검진을 받을 수 있도록 돕습니다.',
            'expectation_title': '외국인들이 기대하는 한국 의료 서비스',
            'expectation_subtitle': '"한국에서 건강검진을 받아볼까?"<br>해외 커뮤니티에서 자주 언급되는 한국 의료의 특징들',
            'expectation_item_title_1': '#1. 비용 효율성',
            'expectation_item_desc_1': '“미국에 비해 한국의 의료비가 훨씬 저렴하다는 것은 잘 알려져 있습니다.”',
            'expectation_item_title_2': '#2. 편리함',
            'expectation_item_desc_2': '“전체 과정이 간단하고 번거로움 없이 진행될 것으로 기대됩니다.”',
            'expectation_item_title_3': '#3. 전문적인 수준',
            'expectation_item_desc_3': '“시설과 의료 수준이 세계적일 것으로 기대됩니다.”',
            'expectation_item_title_4': '#4. 시간 절약',
            'expectation_item_desc_4': '“일정에 거의 영향을 주지 않고 신속하게 진행될 것으로 기대됩니다.”',
            'reality_title': '하지만 현실은...',
            'reality_item_title_1': '다국어 지원 부재',
            'reality_item_1_point_1': '직원들은 외국어를 못해서 전화를 피합니다.',
            'reality_item_1_point_2': '안내, 준비 가이드, 알림이 모두 한국어입니다.',
            'reality_item_1_point_3': '민감한 질문(생리, 수술, 증상)에 대해 제대로 된 설명을 받지 못합니다.',
            'reality_item_1_point_4': '검진 중 모든 안내 방송은 한국어로만 나옵니다.',
            'reality_item_title_2': '혼란스러운 과정',
            'reality_item_2_point_1': '검진 패키지에 무엇이 포함되어 있는지조차 모릅니다.',
            'reality_item_2_point_2': '준비 물품이 사용법에 대한 설명 없이 도착합니다.',
            'reality_item_2_point_3': '대장내시경 약은 한국어로만 설명되어 → 검사에 실패합니다.',
            'reality_item_2_point_4': '사전 문진표는 길고 복잡하며 전부 한국어입니다.',
            'reality_item_title_3': '불확실한 일정',
            'reality_item_3_point_1': '예약을 잡는 데만 2-3일이 걸립니다.',
            'reality_item_3_point_2': '직원마다 다른 답변을 하며 — 아무도 책임지지 않습니다.',
            'reality_item_3_point_3': '한국 전화번호가 없으면 → 알림이나 준비 안내를 받지 못합니다.',
            'reality_item_3_point_4': '해외 시차로 인해 → 통화가 실패하고 예약이 지연됩니다.',
            'reality_item_title_4': '지연된 결과 및 책임 부재',
            'reality_item_4_point_1': '당신이 없는 주소로 결과가 우편 발송됩니다.',
            'reality_item_4_point_2': '한국을 떠난 후에도 결과가 몇 주 동안 지연됩니다.',
            'reality_item_4_point_3': '해외 전화 인증 제한으로 영수증을 받을 수 없습니다.',
            'reality_item_4_point_4': 'No explanation of post-examination rules (e.g., flying after polyp removal).',
            'reality_overtime_title': '글로는 사소해 보이는 문제들. 현실은 이렇습니다.',
            'reality_overtime_p1': '한국에 오기 전에는 모든 것이 안심되었습니다.',
            'reality_overtime_p2': '다국어 지원이 가능하고, 외국인들이 자주 이용하며, 전체 과정이 순조롭고 잘 안내될 것이라고 들었습니다.',
            'reality_overtime_p3': '그리고 예약을 시도했습니다.',
            'reality_overtime_p4': '그때부터 모든 것이 무너지기 시작했습니다.',
            'reality_overtime_p5': '실제로 내 언어를 할 수 있는 사람은 아무도 없었습니다.',
            'reality_overtime_p6': '모든 안내, 알림, 준비 메모는 한국어로만 되어 있어 제가 약속받았던 것과는 너무나 달랐습니다.',
            'reality_overtime_p7': '일정을 확정하는 데만 며칠이 걸렸습니다. 전화는 받지 않았고, 답장은 늦거나 아예 오지 않았습니다. 후속 조치를 할 때마다 제가 너무 많은 것을 요구하는 것처럼 느껴졌습니다... 저는 단지 기본적인 것을 이해하려고 했을 뿐인데도 말이죠.',
            'reality_overtime_p8': '검사 당일, 혼란은 극에 달했습니다. 누군가 안내해 줄 것이라고 했지만, 어디로 가야 할지, 무엇을 가져가야 할지, 누구에게 물어봐야 할지 전혀 몰랐습니다.',
            'reality_overtime_p9': '직원들은 한국어로 빠르게 말하고, 애매하게 가리키고는 그냥 가버렸습니다. 한 검사는 아무 설명 없이 중간에 중단되었고, 다른 곳으로 가라는 간단한 손짓만 있었습니다.',
            'reality_overtime_p10': '그 순간, 저는 완전히 혼자라는 것을 깨달았습니다.',
            'reality_overtime_p11': '결과도 받지 못한 채 한국을 떠났습니다. 며칠이 몇 주가 되었습니다. 후속 조치도, 명확한 답변도 없었습니다. 책임감을 느끼는 사람도 아무도 없었습니다. 그리고 마침내 중요한 것을 깨달았습니다. 오기 전에 들었던 약속들은 도착해서 마주한 현실과 전혀 일치하지 않았다는 것을요.',
            'solution_title': 'CHECKIT의 솔루션',
            'solution_subtitle': '불편함, 외로움, 불안함 없이 건강검진의 전 과정에 온전히 집중할 수 있도록 CHECKIT이 함께합니다.',
            'individual_service1_title': '1:1 전담 매니저',
            'individual_service1_desc': '상담 요청 즉시, 고객님의 언어를 구사하는 전담 매니저가 배정됩니다. 병원 선택, 예약, 일정 조율까지 모든 과정을 책임지고 관리합니다.',
            'individual_service2_title_new': '실시간 소통 지원',
            'individual_service2_desc_new': '검진 당일, 물리적 동행 대신 메신저를 통해 병원 내 접수, 문진, 수납 등 모든 의사소통 과정을 실시간으로 지원하여 불편함이나 외로움 없이 검진에만 집중하도록 돕습니다.',
            'individual_service3_title_new': '결과지 번역 · 요약',
            'individual_service3_desc_new': '고객님께서 병원으로부터 수령한 한국어 결과지를 사진이나 파일로 전달해주시면, 모국어로 핵심 내용을 단순 번역 및 요약하여 전달해 드립니다. (의료적 소견이나 상세 설명은 미포함)',
            'packages_title': '우리의 패키지',
            'packages_subtitle': '귀하의 필요에 맞는 완벽한 플랜을 선택하세요.',
            'package_includes': '포함 내역',
            'package2_includes': '(NO-CONFUSION PLAN 모두 포함 +)',
            'package3_includes': '(ZERO-MISTAKE PLAN 모두 포함 +)',
            'package_recommend_title': '추천 대상',
            'package1_title': 'No-Confusion Plan',
            'package1_price': '₩500,000',
            'package1_feature1': '중립적인 병원 목록 (추천 없음)',
            'package1_feature2': '프로그램 및 가격 구조 (공식 정보 번역만 제공)',
            'package1_feature3': '단계별 예약 가이드',
            'package1_feature4': '모든 병원 서류의 영어 번역',
            'package1_feature5': '필수 문진표 가이드 (간단, 실수 방지)',
            'package1_feature6': '필수 검진 전 안내 (금식 및 기본 준비)',
            'package1_feature7': '검진 당일 준비물 안내',
            'package1_feature8': '이메일을 통한 안전한 결과 전달',
            'package1_feature9': '결과 지연 1회 확인 포함',
            'package1_recommend_desc': '명확한 정보와 함께 스스로 과정을 관리하고 싶은 분.',
            'package2_title': 'Zero-Mistake Plan',
            'package2_price': '₩650,000',
            'package2_feature1': '강화된 문진표 가이드 (상세, 실수 방지 중심)',
            'package2_feature2': '외국인들이 자주 놓치는 실수 알림',
            'package2_feature3': '1회 서식 확인 (누락 항목, 서명, 날짜)',
            'package2_feature4': '검진 전 가이드 팩 (타임라인 + 지연 유발 요인)',
            'package2_feature5': '대장내시경 준비 기본 (해당 시)',
            'package2_feature6': '시간에 민감한 문제에 대한 우선 메시지',
            'package2_feature7': '결과 후속 조치 (1회)',
            'package2_feature8': '누락 또는 지연된 서류에 대한 알림',
            'package2_feature9': '일정 변경 지원 (1회 포함)',
            'package2_recommend_desc': '실수를 최소화하고 중요한 알림을 놓치고 싶지 않은 분.',
            'package3_title': 'Total-Safe Plan',
            'package3_price': '₩800,000',
            'package3_feature1': '프리미엄 문진표 관리',
            'package3_feature2': '위험 포인트 설명 (비의료적, 절차 기반)',
            'package3_feature3': '복잡한 서식 항목을 위한 영어 답변 템플릿',
            'package3_feature4': '전체 서식 확인 (모든 페이지, 서명, 첨부파일)',
            'package3_feature5': '프리미엄 검진 전 팩 (상세 타임라인, 실수 대응 플로우)',
            'package3_feature6': '실시간 검진 당일 채팅 지원',
            'package3_feature7': '병원 내 동선 가이드 (그래픽)',
            'package3_feature8': '영문 영수증 요청 (대행)',
            'package3_feature9': 'CD / 추가 서류 요청',
            'package3_feature10': '결과 나올 때까지 완전한 검진 후 후속 조치',
            'package3_feature11': '결과 구성 (비의료적, 내용 구성만)',
            'package3_feature12': '병원 소통용 템플릿',
            'package3_feature13': '일정 변경 지원 (최대 3회 포함)',
            'package3_recommend_desc': '가장 안전하고 완벽하게 관리받고 싶은 분.',
            'options_title_new': '옵션 서비스',
            'option_card_title_1': '비의료적 가이드',
            'option_card_price_1': '₩82,800',
            'option_card_desc_1': '검사 항목, 결과 구조 및 검사 후 관리에 대한 비의료적 가이드입니다.',
            'option_card_title_2': '병원 동선 안내',
            'option_card_price_2': '₩27,600',
            'option_card_desc_2': '정확한 병원 내 동선과 이동 흐름을 보여줍니다. 첫 방문객에게 유용합니다.',
            'option_card_title_3': '예약 변경 옵션',
            'option_card_desc_3': '예약 후 예약을 변경해야 하는 고객을 위한 옵션입니다.',
            'option_card_3_item_1': '1회 변경:',
            'option_card_3_item_2': '2회 패키지:',
            'option_card_3_item_3': '무제한 변경:',
            'option_card_title_4': '영문 영수증 요청',
            'option_card_price_4': '₩27,600',
            'option_card_desc_4': '보험 목적에 적합한 영문 영수증을 대신 요청합니다.',
            'option_card_title_5': 'CD 결과 요청',
            'option_card_price_5': '₩27,600',
            'option_card_desc_5': '검사 CD 또는 추가 영상 파일을 대신 요청합니다.',
            'option_card_title_6': '긴급 결과 후속 조치',
            'option_card_price_6': '₩27,600',
            'option_card_desc_6': '병원에 긴급 후속 조치 메시지를 한 번 보냅니다.',
            'notice_title': '왜 외국인은 한국에서 동일한 건강검진에 더 많은 비용을 지불할까요?',
            'notice_subtitle': '저희는 종종 이런 질문을 받습니다.',
            'notice_quote': '“왜 당신의 옵션이 병원에서 제공하는 것보다 저렴한가요?”',
            'notice_answer_title': '간단한 답변',
            'notice_answer_p1': '검사가 달라서가 아닙니다.',
            'notice_answer_p2': '가격 구조 때문입니다.',
            'notice_reality_title': '실제 많은 병원에서 일어나는 일',
            'notice_reality_p1': '대부분의 병원은 별도의 “외국인 패키지”를 만듭니다. 이 패키지에는 현지인이 지불하지 않는 서비스가 포함되어 총 가격이 올라갑니다.',
            'notice_situation_title': '외국인 고객에게서 흔히 볼 수 있는 상황',
            'notice_situation_p1': '한 고객은 외국인 패키지에 대해 1,800,000원을 견적 받았습니다. 저희의 안내를 통해 동일한 검사를 1,050,000원에 예약했습니다.',
            'corporate_page_title': '기업 고객용 토탈 솔루션',
            'corporate_page_subtitle': '외국인 근로자의 건강을 체계적으로 관리하여,<br>기업의 생산성을 높이고<br>보건 관리 부담을 덜어드립니다.',
            'corp_sec1_title': '외국인 근로자, 이제 선택이 아닌 필수입니다',
            'corp_sec1_subtitle': '변화하는 산업 현장, 기업의 지속 가능한 성장을 위해 외국인 인력 확보와 관리는 가장 중요한 과제가 되었습니다.',
            'corp_sec1_item1_title': '급증하는 외국인 인력',
            'corp_sec1_item1_desc': '국내 제조, 생산, 건설, 모든 현장 기업의 외국인 비중은 매년 최고치를 경신하고 있습니다.',
            'corp_sec1_item2_title': '법적 보호 의무 강화',
            'corp_sec1_item2_desc': '외국인 근로자 또한 내국인과 동일한 산업안전보건법 및 검진 의무의 대상입니다.',
            'corp_sec1_item3_title': '기업 경쟁력의 핵심',
            'corp_sec1_item3_desc': '우수한 외국인 인력을 유지(Retention)하는 것이 곧 기업의 생산성과 직결됩니다.',
            'corp_sec2_title': '건강검진, 가장 강력한 복지 혜택이 됩니다',
            'corp_sec2_subtitle': '차별화된 건강검진 지원은 근로자의 애사심을 높이고 기업의 이미지를 제고합니다.',
            'corp_sec2_item1_title': '일하고 싶은 기업',
            'corp_sec2_item1_desc': '언어 장벽 없는 건강 관리는 외국인 근로자가 가장 선호하는 복지 1순위입니다.',
            'corp_sec2_item2_title': '생산성 극대화',
            'corp_sec2_item2_desc': '건강한 근로자가 안정적으로 근무할 때 기업의 생산 효율은 최대로 발휘됩니다.',
            'corp_sec2_item3_title': 'ESG 경영의 실천',
            'corp_sec2_item3_desc': '다양성을 존중하고 인권을 보호하는 선도적인 기업으로서의 가치를 증명하세요.',
            'corp_sec3_title': '하지만, 현장에서 마주하는 현실은 다릅니다',
            'corp_sec3_subtitle': '병원을 예약하고 검진을 받는 \'당일\'보다 더 힘든 것은 그 전후의 \'관리 공백\'입니다.',
            'corp_sec3_item1_title': '검진 전: 막막함과 두려움',
            'corp_sec3_item1_p1': '한국어로 된 문진표와 주의사항, 번역기로도 한계가 있습니다.',
            'corp_sec3_item1_p2': '금식 안내를 오해하여 검사가 취소되거나 사고가 발생하기도 합니다.',
            'corp_sec3_item1_p3': '병원을 찾아가는 길부터 소통에 대한 심한 불안감을 느낍니다.',
            'corp_sec3_item2_title': '검진 후: 방치된 결과',
            'corp_sec3_item2_p1': '어렵게 받은 결과지, 정작 본인은 내용을 한 글자도 읽지 못합니다.',
            'corp_sec3_item2_p2': '재검사가 필요한 위험 신호를 놓쳐 병을 키우는 경우가 빈번합니다.',
            'corp_sec3_item2_p3': '기업은 결과지만 보관할 뿐, 근로자와의 소통 공백은 여전합니다.',
            'corp_sec4_title': 'CHECKIT만이 채울 수 있는 관리의 공백',
            'corp_sec4_subtitle': '병원은 의료 행위만 하고, 기업은 결과만 받습니다. 그 사이의 \'모든 과정\'은 CHECKIT이 책임집니다.',
            'corp_sec4_side1_title': '병원과 기업의 영역',
            'corp_sec4_side1_p1': '전문적인 의료 검사 시행',
            'corp_sec4_side1_p2': '검진 결과 데이터 생성',
            'corp_sec4_side1_p3': '법적 의무 기록 보관',
            'corp_sec4_side2_title': 'CHECKIT의 영역 (비의료 과정)',
            'corp_sec4_side2_p1': '1:1 모국어 전담 매니저 매칭',
            'corp_sec4_side2_p2': '문진표 및 사전 주의사항 완벽 번역 가이드',
            'corp_sec4_side2_p3': '검진 당일 실시간 텍스트 소통 지원',
            'corp_sec4_side2_p4': '결과지 단순 번역 및 요약 파일 전달',
            'corp_sec4_side2_p5': '사후 관리(재검 안내) 소통 대행',
            'corp_sec5_title': '오직 CHECKIT만이 가능한 이유',
            'corp_sec5_subtitle': '흉내 낼 수 없는 전문성과 기술력으로 외국인 근로자 관리의 표준을 만듭니다.',
            'corp_sec5_item1_title': '다국어 전문 인력풀',
            'corp_sec5_item1_desc': '단순 번역이 아닌 한국 의료 시스템을 완벽히 이해하는 다국어 매니저가 직접 관리합니다.',
            'corp_sec5_item2_title': '실시간 실무 대응 역량',
            'corp_sec5_item2_desc': '검진 현장에서 발생하는 돌발 상황에 즉각적으로 대응할 수 있는 시스템을 갖추고 있습니다.',
            'corp_sec5_item3_title': '고객 중심의 독립성',
            'corp_sec5_item3_desc': '특정 병원에 종속되지 않아 오직 근로자의 편의와 기업의 효율만을 위해 최적의 선택지를 제안합니다.',
            'corp_sec5_item4_title': '모국어 결과지 제공',
            'corp_sec5_item4_desc': '검진 결과를 근로자의 모국어로 단순 번역하여 전달함으로써, 본인의 건강 상태를 정확히 파악하고 사후 관리에 적극 참여할 수 있도록 돕습니다.',
            'corp_sec6_title': '기존 프로세스를 바꿀 필요가 없습니다',
            'corp_sec6_subtitle': '의료법을 완벽히 준수하며, 기업의 운영 효율만을 극대화합니다.',
            'corp_sec6_item1_title': '의료법 위반 없음',
            'corp_sec6_item1_desc': '환자 유인·알선 행위를 하지 않으며, 비의료적 소통 및 행정 서비스만을 대행하여 법적 리스크가 전혀 없습니다.',
            'corp_sec6_item2_title': '병원 계약 구조 없음',
            'corp_sec6_item2_desc': '병원과 수수료를 주고받는 구조가 아닙니다. 기업이 기존에 이용하던 연계 병원을 그대로 사용하셔도 무방합니다.',
            'corp_sec6_item3_title': '즉각 도입 가능',
            'corp_sec6_item3_desc': '복잡한 시스템 연동 없이 서비스 신청만으로 내일부터 바로 외국인 근로자들의 검진 환경이 개선됩니다.',
            'corp_sec7_title': '정교하고 체계적인 운영 프로세스',
            'corp_sec7_subtitle': '명단 수령부터 최종 보고까지, CHECKIT이 모든 과정을 책임지고 관리합니다.',
            'corp_sec7_step1_title': '명단 수령 및 분석',
            'corp_sec7_step1_1': '기업으로부터 검진 대상자 명단 수령',
            'corp_sec7_step1_2': '명단 확인 후 예약 및 검진 기간 우선순위 정리',
            'corp_sec7_step2_title': '개인별 예약 및 확정',
            'corp_sec7_step2_1': '근로자 대상 1:1 컨택 및 희망 일정·병원 선택',
            'corp_sec7_step2_2': '신속한 예약 진행 및 확정 문자 발송',
            'corp_sec7_step3_title': '집중 사전 가이드',
            'corp_sec7_step3_1': '검진 전 준비사항 및 주의사항 상세 안내',
            'corp_sec7_step3_2': '7일·3일·2일·1일 전 및 당일 실시간 1:1 알림 제공',
            'corp_sec7_step4_title': '검진 당일 현장 지원',
            'corp_sec7_step4_1': '검사 당일 실시간 소통 지원 및 불편 해소',
            'corp_sec7_step4_2': '진행 상황 모니터링 및 미검 항목 없는 완료 관리',
            'corp_sec7_step5_title': '결과 관리 및 사후 케어',
            'corp_sec7_step5_1': '검진 완료 후 결과 소요 기간 및 수령 방법 안내',
            'corp_sec7_step5_2': '결과 수령 후 단순 번역 제공 및 재검 여부 확인',
            'corp_sec7_step5_3': '회사 필수 제출 서류 안내 및 최종 제출까지 관리',
            'corp_sec7_step6_title': '최종 보고 및 데이터 업데이트',
            'corp_sec7_step6_1': '명단 파일에 개인별 진행 상황 및 특이사항 업데이트 저장',
            'corp_sec7_step6_2': '기업 요청 시 실시간 진행 현황 및 완료 명단 보고',
            'corp_faq_title': '자주 묻는 질문 (FAQ)',
            'corp_faq_subtitle': '기업 고객분들이 가장 궁금해하시는 질문들을 모았습니다.',
            'corp_faq_q1': '기존 제휴 병원을 그대로 이용할 수 있나요?',
            'corp_faq_a1': '네, 가능합니다. CHECKIT은 특정 병원에 종속되지 않은 독립적인 서비스입니다. 기업이 기존에 이용하시던 병원을 바꾸실 필요 없이, 예약과 소통 관리 공백만 저희가 채워드립니다.',
            'corp_faq_q2': '의료법 위반 소지는 없나요?',
            'corp_faq_a2': 'CHECKIT은 환자 유인/알선 등 의료법 위반 행위를 엄격히 금지합니다. 저희는 의료 행위가 아닌 예약 대행, 통역, 결과지 단순 번역 등 \'비의료적 행정 지원\'에만 집중하므로 법적으로 매우 안전합니다.',
            'corp_faq_q3': '근로자 개인정보는 어떻게 관리되나요?',
            'corp_faq_a3': '모든 과정에서 개인정보 보호법을 준수합니다. 검진 명단은 보안이 강화된 방식으로 수령하며, 검진 완료 후 필요 기간이 지나면 규정에 따라 안전하게 처리됩니다.',
            'corp_faq_q4': '도입 시 시스템 연동 같은 복잡한 과정이 필요한가요?',
            'corp_faq_a4': '전혀 필요 없습니다. 별도의 소프트웨어 설치나 시스템 연동 없이, 검진 대상자 명단 전달과 간단한 일정 협의만으로 즉시 도입이 가능합니다.',
            'corp_faq_q5': '결과지 번역은 어느 수준까지 제공되나요?',
            'corp_faq_a5': '전문 용어가 가득한 한국어 결과지를 근로자가 이해하기 쉬운 모국어 핵심 요약본으로 제공합니다. 이는 의학적 소견이 아닌 \'내용 전달\' 목적의 단순 번역으로, 근로자의 알 권리를 보장합니다.',
            'contact_form_company_label': '기업명',
            'chatbot_header': 'Check봇',
            'chatbot_placeholder': '메시지를 입력하세요...',
            'chatbot_greeting': '안녕하세요! CHECKIT에 대해 궁금한 점이 있으신가요? 아래에서 질문을 선택하거나 직접 입력해주세요.',
            'greeting_response': '안녕하세요! 만나서 반가워요. CHECKIT에 대해 궁금한 점이 있으시면 아래 질문을 선택하거나 직접 물어보세요.',
            'q1': '예약은 어떻게 하나요?',
            'a1': 'CHECKIT 전담 매니저가 도와드립니다. 원하시는 검진 항목과 일정을 알려주시면, 조건에 맞는 병원 목록을 전달드려 선택을 돕고, 예약까지 한 번에 진행해드립니다. \'지금 바로 상담 신청\' 버튼을 눌러 문의를 남겨주세요!',
            'q2': '병원/의료인과 계약된 구조인가요?',
            'a2': '아닙니다. CHECKIT은 특정 병원과 계약 관계를 맺지 않습니다. 저희는 오직 고객님의 입장에서, 가장 적합한 병원을 찾으실 수 있도록 객관적인 정보 제공으로 선택을 돕습니다. 고객님의 건강과 만족이 저희의 최우선 목표입니다.',
            'q3': '의료 행위나 진료 알선을 하나요?',
            'a3': '아니요, CHECKIT은 의료법을 준수하며 어떠한 의료 행위나 진료 알선도 하지 않습니다. 저희는 병원 예약, 통역, 결과지 번역 등 \'비의료 과정\'에 집중하여 고객님께서 건강검진에만 집중하실 수 있도록 돕는 서비스입니다.',
            'q4': '검진 당일 어떤 도움을 받을 수 있나요?',
            'a4': '검진 당일, 언어의 장벽으로 인해 혼자라는 느낌이 들지 않도록 Check봇 매니저가 모든 순간을 함께합니다. 병원 내 접수, 문진, 수납 등 모든 의사소통 과정을 실시간으로 지원하여, 언어 문제로 인한 불편함이나 외로움 없이 편안하게 검진에만 집중하실 수 있도록 돕습니다.',
            'q5': '결과지는 어떻게 전달되나요?',
            'a5': '고객님께서 병원으로부터 수령한 한국어 결과지를 전달해주시면, 저희가 고객님의 모국어로 핵심 내용을 단순 번역 및 요약하여 전달해 드립니다. 저희는 의료법을 준수하기에, 의학적 소견이나 상세한 설명은 제공하지 않습니다.',
            'unsupported_input': '흥미로운 질문이네요! 현재는 정해진 답변만 드릴 수 있지만, 더 자세한 내용은 \'상담 신청\'을 통해 문의하시면, 전문 매니저가 친절하게 안내해 드릴 거예요.'
        }
    };

    let currentLang = 'ko';
    const allTranslatableElements = document.querySelectorAll('[data-lang-key]');
    const mainLangButtons = document.querySelectorAll('#language-switcher .lang-btn');
    const chatbotLangButtons = document.querySelectorAll('#chatbot-lang-buttons .chatbot-lang-btn');
    const chatbotContainer = document.getElementById('chatbot-container');
    const openChatbotBtn = document.getElementById('open-chatbot');
    const closeChatbotBtn = document.getElementById('close-chatbot');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const suggestedQuestionsContainer = document.getElementById('chatbot-suggested-questions');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send');

    const switchLanguage = (newLang) => {
        currentLang = newLang;
        document.documentElement.lang = newLang;
        const langData = translations[newLang] || translations['ko'];

        allTranslatableElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (langData[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = langData[key];
                } else {
                    element.innerHTML = langData[key];
                }
            }
        });

        mainLangButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === newLang));

        if (chatbotLangButtons) {
            chatbotLangButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === newLang));
        }

        if (chatbotContainer && chatbotContainer.classList.contains('show')) {
            resetAndShowGreeting();
        }
    };

    function changeLanguage(lang) {
        switchLanguage(lang);
    }

    const addMessage = (text, sender) => {
        if (!chatbotMessages) return;
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerHTML = text.replace(/\n/g, '<br>');
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();
        return messageElement;
    };

    const addLoadingIndicator = () => {
        if (!chatbotMessages) return null;
        const loadingElement = document.createElement('div');
        loadingElement.classList.add('message', 'bot', 'loading-indicator');
        loadingElement.innerHTML = '<span></span><span></span><span></span>';
        chatbotMessages.appendChild(loadingElement);
        scrollToBottom();
        return loadingElement;
    };

    const scrollToBottom = () => {
        if (chatbotMessages) {
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    };

    const showSuggestedQuestions = () => {
        if (!suggestedQuestionsContainer) return;
        suggestedQuestionsContainer.innerHTML = '';
        const langData = translations[currentLang];
        for (let i = 1; i <= 5; i++) {
            const qKey = `q${i}`;
            if (langData[qKey]) {
                const questionBtn = document.createElement('button');
                questionBtn.classList.add('suggested-question-btn');
                questionBtn.textContent = langData[qKey];
                questionBtn.addEventListener('click', () => {
                    addMessage(langData[qKey], 'user');
                    const loadingIndicator = addLoadingIndicator();

                    setTimeout(() => {
                        if (loadingIndicator) chatbotMessages.removeChild(loadingIndicator);
                        addMessage(langData[`a${i}`], 'bot');
                    }, 1200);
                });
                suggestedQuestionsContainer.appendChild(questionBtn);
            }
        }
        suggestedQuestionsContainer.style.display = 'flex';
        scrollToBottom();
    };

    const resetAndShowGreeting = () => {
        if (!chatbotMessages) return;
        chatbotMessages.innerHTML = '';
        const greeting = translations[currentLang]['chatbot_greeting'];
        addMessage(greeting, 'bot');
        showSuggestedQuestions();
    };

    mainLangButtons.forEach(button => {
        button.addEventListener('click', () => switchLanguage(button.dataset.lang));
    });

    if (chatbotLangButtons) {
        chatbotLangButtons.forEach(button => {
            button.addEventListener('click', () => switchLanguage(button.dataset.lang));
        });
    }

    window.changeLanguage = changeLanguage;

    if (openChatbotBtn) {
        openChatbotBtn.addEventListener('click', () => {
            if (chatbotContainer) {
                chatbotContainer.classList.add('show');
                document.body.classList.add('chatbot-open');
                resetAndShowGreeting();
            }
        });
    }

    if (closeChatbotBtn) {
        closeChatbotBtn.addEventListener('click', () => {
            if (chatbotContainer) {
                chatbotContainer.classList.remove('show');
                document.body.classList.remove('chatbot-open');
            }
        });
    }

    const handleSendMessage = () => {
        if (!chatbotInput || !chatbotMessages) return;
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            chatbotInput.value = '';
            const loadingIndicator = addLoadingIndicator();

            setTimeout(() => {
                if (loadingIndicator) chatbotMessages.removeChild(loadingIndicator);

                const lowerCaseMessage = userMessage.toLowerCase();
                const langData = translations[currentLang];
                let response;

                const greetings = ['안녕', 'hi', 'hello', 'hey', '你好', 'xin chào'];
                if (greetings.some(greeting => lowerCaseMessage.includes(greeting))) {
                    response = langData['greeting_response'];
                } else {
                    response = langData['unsupported_input'];
                }

                addMessage(response, 'bot');
            }, 1200);
        }
    };

    if (chatbotSendBtn) {
        chatbotSendBtn.addEventListener('click', handleSendMessage);
    }

    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });
    }

    const initialLang = new URLSearchParams(window.location.search).get('lang') || 'ko';
    
    // FAQ Accordion Logic
    document.addEventListener('click', (e) => {
        const question = e.target.closest('.faq-question');
        if (question) {
            const item = question.parentElement;
            item.classList.toggle('active');
        }
    });

    switchLanguage(initialLang);

    // --- 통합 로그인/가입 모달 ---
    const showLoginModal = () => {
        let overlay = document.getElementById('login-modal-overlay');
        if (!overlay) {
            const modalHtml = `
                <div id="login-modal-overlay">
                    <div class="login-modal-box">
                        <button id="close-login-modal">&times;</button>
                        <h2 class="modal-logo">CHECKIT</h2>
                        <p class="modal-tagline">외국인 건강검진 행정 지원 플랫폼</p>
                        
                        <div id="login-view-main" class="auth-view">
                            <button id="login-google" class="btn-auth btn-google">
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="20"> 
                                <span data-lang-key="login_google">Google로 시작하기</span>
                            </button>
                            <button id="btn-goto-email" class="btn-auth btn-email">
                                <span data-lang-key="login_email">이메일로 계속하기</span>
                            </button>
                        </div>

                        <div id="login-view-email" class="auth-view" style="display:none;">
                            <div class="form-group-auth">
                                <input type="email" id="auth-email" placeholder="이메일 주소" required>
                                <input type="password" id="auth-pw" placeholder="비밀번호" required>
                                <div id="signup-fields" style="display:none;">
                                    <input type="password" id="auth-pw-confirm" placeholder="비밀번호 확인">
                                </div>
                            </div>
                            <button id="btn-submit" class="btn-auth btn-primary">로그인</button>
                            <div class="auth-utils">
                                <p id="toggle-mode">회원가입 하기</p>
                                <button id="btn-back">뒤로 가기</button>
                            </div>
                        </div>
                        <div id="auth-error-msg" style="color: #e74c3c; font-size: 0.85rem; margin-top: 10px; min-height: 1.2rem;"></div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            overlay = document.getElementById('login-modal-overlay');
        }

        const viewMain = document.getElementById('login-view-main');
        const viewEmail = document.getElementById('login-view-email');
        const signupFields = document.getElementById('signup-fields');
        const submitBtn = document.getElementById('btn-submit');
        const toggleBtn = document.getElementById('toggle-mode');
        const errorMsg = document.getElementById('auth-error-msg');
        const emailInput = document.getElementById('auth-email');
        const pwInput = document.getElementById('auth-pw');
        const pwConfirmInput = document.getElementById('auth-pw-confirm');
        
        let mode = 'LOGIN';
        errorMsg.textContent = '';
        viewMain.style.display = 'flex';
        viewEmail.style.display = 'none';
        signupFields.style.display = 'none';
        submitBtn.textContent = '로그인';
        toggleBtn.textContent = '회원가입 하기';

        document.getElementById('close-login-modal').onclick = () => { overlay.style.display = 'none'; };
        document.getElementById('btn-goto-email').onclick = () => { viewMain.style.display = 'none'; viewEmail.style.display = 'flex'; };
        document.getElementById('btn-back').onclick = () => { viewMain.style.display = 'flex'; viewEmail.style.display = 'none'; errorMsg.textContent = ''; };
        
        toggleBtn.onclick = () => {
            mode = (mode === 'LOGIN') ? 'SIGNUP' : 'LOGIN';
            signupFields.style.display = (mode === 'SIGNUP') ? 'flex' : 'none';
            submitBtn.textContent = (mode === 'SIGNUP') ? '회원가입' : '로그인';
            toggleBtn.textContent = (mode === 'SIGNUP') ? '로그인 하기' : '회원가입 하기';
            errorMsg.textContent = '';
        };

        const handleAuthError = (e) => {
            console.error("Auth Error:", e);
            let msg = e.message;
            if (e.code === 'auth/email-already-in-use') msg = '이미 사용 중인 이메일입니다.';
            if (e.code === 'auth/wrong-password') msg = '비밀번호가 일치하지 않습니다.';
            if (e.code === 'auth/user-not-found') msg = '등록되지 않은 이메일입니다.';
            if (e.code === 'auth/weak-password') msg = '비밀번호는 6자리 이상이어야 합니다.';
            if (e.code === 'auth/invalid-email') msg = '유효하지 않은 이메일 형식입니다.';
            if (e.code === 'auth/popup-closed-by-user') msg = '로그인 팝업이 닫혔습니다.';
            errorMsg.textContent = msg;
        };

        document.getElementById('login-google').onclick = () => {
            if (typeof firebase === 'undefined') return alert('Firebase가 로드되지 않았습니다.');
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(() => {
                overlay.style.display = 'none';
            }).catch(handleAuthError);
        };

        submitBtn.onclick = async () => {
            const email = emailInput.value.trim();
            const pw = pwInput.value.trim();
            if (!email || !pw) {
                errorMsg.textContent = '이메일과 비밀번호를 입력해주세요.';
                return;
            }

            try {
                if (mode === 'SIGNUP') {
                    if (pw !== pwConfirmInput.value.trim()) {
                        errorMsg.textContent = '비밀번호 확인이 일치하지 않습니다.';
                        return;
                    }
                    const res = await firebase.auth().createUserWithEmailAndPassword(email, pw);
                    alert('회원가입이 완료되었습니다!');
                    overlay.style.display = 'none';
                } else {
                    await firebase.auth().signInWithEmailAndPassword(email, pw);
                    overlay.style.display = 'none';
                }
            } catch (e) {
                handleAuthError(e);
            }
        };

        overlay.style.display = 'flex';
    };

    // --- 마이페이지(플랫폼 뷰) 렌더링 ---
    const renderMyPage = (user) => {
        let overlay = document.getElementById('mypage-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'mypage-overlay';
            document.body.appendChild(overlay);
        }

        const isKo = currentLang === 'ko';
        
        overlay.innerHTML = `
            <div class="mypage-header">
                <h2 style="margin:0; color:var(--primary-color);">CHECKIT PLATFORM</h2>
                <div style="display:flex; gap:15px; align-items:center;">
                    <span style="font-weight:600;">${user.email}님</span>
                    <button id="close-mypage" class="lang-btn" style="background:#eee; border:none; padding:8px 15px; border-radius:8px; cursor:pointer;">닫기</button>
                </div>
            </div>
            <div class="status-timeline">
                <div class="status-step active">
                    <i class="fas fa-file-alt" style="font-size:1.5rem; margin-bottom:10px;"></i>
                    <span>상담/신청</span>
                </div>
                <div class="status-step">
                    <i class="fas fa-hospital" style="font-size:1.5rem; margin-bottom:10px;"></i>
                    <span>병원예약</span>
                </div>
                <div class="status-step">
                    <i class="fas fa-notes-medical" style="font-size:1.5rem; margin-bottom:10px;"></i>
                    <span>검진대기</span>
                </div>
                <div class="status-step">
                    <i class="fas fa-language" style="font-size:1.5rem; margin-bottom:10px;"></i>
                    <span>결과번역</span>
                </div>
                <div class="status-step">
                    <i class="fas fa-check-circle" style="font-size:1.5rem; margin-bottom:10px;"></i>
                    <span>완료</span>
                </div>
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1.5fr; gap:20px; padding:20px; flex-grow:1;">
                <div class="info-panel" style="background:#fff; border-radius:12px; border:1px solid #eee; padding:25px; text-align:left;">
                    <h3 style="margin-top:0; border-bottom:2px solid var(--primary-color); padding-bottom:10px;">나의 서비스 현황</h3>
                    <div style="margin-top:20px;">
                        <p><strong>선택한 패키지:</strong> <span style="color:var(--primary-color);">Total-Safe Plan (가정)</span></p>
                        <p><strong>진행 상태:</strong> <span style="background:var(--hero-bg-color); color:var(--primary-dark); padding:4px 10px; border-radius:20px; font-size:0.85rem;">행정 지원 대기 중</span></p>
                        <hr style="border:0; border-top:1px solid #eee; margin:20px 0;">
                        <h4>담당 매니저 안내</h4>
                        <div style="display:flex; align-items:center; gap:15px; background:#f9f9f9; padding:15px; border-radius:10px;">
                            <div style="width:50px; height:50px; background:#ddd; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.5rem;"><i class="fas fa-user"></i></div>
                            <div>
                                <div style="font-weight:700;">Sarah Manager</div>
                                <div style="font-size:0.85rem; color:#666;">English/Korean Specialist</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="admin-chat-container">
                    <div style="padding:15px 20px; border-bottom:1px solid #eee; font-weight:700; display:flex; align-items:center; gap:10px;">
                        <i class="fas fa-headset" style="color:var(--primary-color);"></i> 1:1 행정 지원 채팅
                    </div>
                    <div class="chat-messages" id="platform-chat-messages">
                        <div class="message bot">안녕하세요, ${user.email.split('@')[0]}님! CHECKIT 행정 지원 팀입니다. 궁금하신 점을 남겨주시면 담당 매니저가 확인 후 답변 드리겠습니다.</div>
                    </div>
                    <div style="padding:15px; display:flex; gap:10px; background:#fff; border-top:1px solid #eee;">
                        <input type="text" id="platform-chat-input" placeholder="메시지를 입력하세요..." style="flex-grow:1; border:1px solid #ddd; border-radius:8px; padding:10px 15px; outline:none;">
                        <button id="platform-chat-send" style="background:var(--primary-color); color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:700; cursor:pointer;">전송</button>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('close-mypage').onclick = () => {
            document.body.classList.remove('platform-view-active');
        };

        const chatInput = document.getElementById('platform-chat-input');
        const chatSend = document.getElementById('platform-chat-send');
        const chatMsgs = document.getElementById('platform-chat-messages');

        const sendMsg = () => {
            const val = chatInput.value.trim();
            if (val) {
                const msg = document.createElement('div');
                msg.className = 'message user';
                msg.textContent = val;
                chatMsgs.appendChild(msg);
                chatInput.value = '';
                chatMsgs.scrollTop = chatMsgs.scrollHeight;
                
                // 가짜 답변
                setTimeout(() => {
                    const reply = document.createElement('div');
                    reply.className = 'message bot';
                    reply.textContent = "매니저가 메시지를 확인 중입니다. 잠시만 기다려주세요.";
                    chatMsgs.appendChild(reply);
                    chatMsgs.scrollTop = chatMsgs.scrollHeight;
                }, 1000);
            }
        };

        chatSend.onclick = sendMsg;
        chatInput.onkeypress = (e) => { if (e.key === 'Enter') sendMsg(); };
    };

    // ====================================================
    // [CHECKIT Platform] Firebase Auth & Notification System
    // ====================================================
    const firebaseConfig = {
        apiKey: "AIzaSyDAdW_vJHUHuDaun2Kh94uC8ywlfOdyPco",
        authDomain: "checkit-43341.firebaseapp.com",
        projectId: "checkit-43341",
        storageBucket: "checkit-43341.firebasestorage.app",
        messagingSenderId: "818434232492",
        appId: "1:818434232492:web:713836b01fc11196150f09",
        measurementId: "G-WVDWXTJ1TR"
    };

    if (typeof firebase !== 'undefined') {
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        
        const initAuth = () => {
            const nav = document.querySelector('#language-switcher');
            if (!nav) return;
            
            let authBtn = document.getElementById('platform-auth-btn');
            if (!authBtn) {
                authBtn = document.createElement('button');
                authBtn.id = 'platform-auth-btn';
                authBtn.className = 'lang-btn auth-main-btn';
                nav.appendChild(authBtn);
            }

            auth.onAuthStateChanged(user => {
                if (user) {
                    authBtn.textContent = currentLang === 'ko' ? '마이페이지' : 'My Page';
                    authBtn.onclick = (e) => {
                        e.preventDefault();
                        if (window.location.href.toLowerCase().indexOf('individual') > -1) {
                            document.body.classList.add('platform-view-active');
                            renderMyPage(user);
                        } else {
                            window.location.href = 'individual.html?view=mypage';
                        }
                    };
                    
                    let logoutBtn = document.getElementById('platform-logout-btn');
                    if (!logoutBtn) {
                        logoutBtn = document.createElement('button');
                        logoutBtn.id = 'platform-logout-btn';
                        logoutBtn.className = 'lang-btn logout-btn';
                        logoutBtn.textContent = currentLang === 'ko' ? '로그아웃' : 'Logout';
                        logoutBtn.onclick = () => auth.signOut().then(() => {
                            window.location.href = 'index.html';
                        });
                        authBtn.parentNode.appendChild(logoutBtn);
                    }

                    // URL 파라미터 체크 (마이페이지 바로가기)
                    const urlParams = new URLSearchParams(window.location.search);
                    if (urlParams.get('view') === 'mypage' && window.location.href.toLowerCase().indexOf('individual') > -1) {
                        document.body.classList.add('platform-view-active');
                        renderMyPage(user);
                    }
                } else {
                    authBtn.textContent = currentLang === 'ko' ? '로그인' : 'Login';
                    authBtn.onclick = () => showLoginModal();
                    const logoutBtn = document.getElementById('platform-logout-btn');
                    if (logoutBtn) logoutBtn.remove();
                    document.body.classList.remove('platform-view-active');
                }
            });
        };
        initAuth();
    } else {
        console.warn("Firebase SDK not detected.");
    }

    // --- B2B 실무 과정 슬라이드 로직 (이미지 버전 대폭 변경) ---
    const initB2BProcessSlide = () => {
        const openBtn = document.getElementById('openProcessSlide');
        const modal = document.getElementById('processModal');
        if (!openBtn || !modal) return;

        const processImage = document.getElementById('processImage');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const indicator = document.getElementById('indicator');
        const closeBtn = document.getElementById('closeProcess');
        const overlay = modal.querySelector('.modal-overlay');

        const cacheBuster = `?v=${new Date().getTime()}`;
        const processImages = [
            "assets/process_01.png" + cacheBuster,
            "assets/process_02.png" + cacheBuster,
            "assets/process_03.png" + cacheBuster,
            "assets/process_04.png" + cacheBuster,
            "assets/process_05.png" + cacheBuster,
            "assets/process_06.png" + cacheBuster,
            "assets/process_07.png" + cacheBuster,
            "assets/process_08.png" + cacheBuster,
            "assets/process_09.png" + cacheBuster,
            "assets/process_10.png" + cacheBuster,
            "assets/process_11.png" + cacheBuster,
            "assets/process_12.png" + cacheBuster,
            "assets/process_13.png" + cacheBuster,
            "assets/process_14.png" + cacheBuster,
            "assets/process_15.png" + cacheBuster,
            "assets/process_16.png" + cacheBuster,
            "assets/process_17.png" + cacheBuster,
            "assets/process_18.png" + cacheBuster
        ];

        let currentIndex = 0;

        const updateSlide = () => {
            if (processImage) processImage.src = processImages[currentIndex];
            if (indicator) indicator.innerText = `${currentIndex + 1} / ${processImages.length}`;
            if (prevBtn) {
                prevBtn.disabled = currentIndex === 0;
                prevBtn.style.opacity = currentIndex === 0 ? "0.3" : "1";
            }
            if (nextBtn) {
                nextBtn.disabled = currentIndex === processImages.length - 1;
                nextBtn.style.opacity = currentIndex === processImages.length - 1 ? "0.3" : "1";
            }
        };

        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.setProperty('display', 'flex', 'important');
            document.body.style.overflow = 'hidden'; 
            currentIndex = 0;
            updateSlide();
        });

        const closeAction = () => {
            modal.style.setProperty('display', 'none', 'important');
            document.body.style.overflow = 'auto'; 
        };

        closeBtn?.addEventListener('click', closeAction);
        overlay?.addEventListener('click', closeAction);
        nextBtn?.addEventListener('click', (e) => { e.stopPropagation(); if (currentIndex < processImages.length - 1) { currentIndex++; updateSlide(); } });
        prevBtn?.addEventListener('click', (e) => { e.stopPropagation(); if (currentIndex > 0) { currentIndex--; updateSlide(); } });

        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'flex') {
                if (e.key === 'ArrowRight') nextBtn.click();
                if (e.key === 'ArrowLeft') prevBtn.click();
                if (e.key === 'Escape') closeAction();
            }
        });
    };

    initB2BProcessSlide();
});