import re

with open('platform.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Identify the modal section to replace
old_modal_start = '    <!-- 검진 가이드 편집 모달 (솔라피 실제 템플릿 기반 미리보기) -->'
old_modal_end = '    </div>\n\n</body>\n</html>'
# Also handle CRLF
old_modal_end_crlf = '    </div>\r\n\r\n</body>\r\n</html>'

new_modal = '''    <!-- 검진 가이드 편집 모달 (솔라피 실제 템플릿 기반 미리보기) -->
    <div id="guideEditorModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.65); z-index:9999; align-items:center; justify-content:center; padding:20px; overflow-y:auto;">
        <div style="background:#fff; width:100%; max-width:820px; border-radius:20px; padding:28px; box-shadow:0 20px 60px rgba(0,0,0,0.25); display:flex; gap:24px; flex-wrap:wrap;">
            <!-- 왼쪽: 편집 영역 -->
            <div style="flex:1; min-width:280px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
                    <h3 id="guideLangLabel" style="margin:0; font-size:1.1rem; color:#1d1d1f; font-weight:700;">✏️ 검진 가이드 편집</h3>
                    <button onclick="closeGuideEditor()" style="background:none; border:none; font-size:1.5rem; cursor:pointer; color:#86868b;">&times;</button>
                </div>
                <div style="background:#fff7ed; border:1px solid #fed7aa; border-radius:10px; padding:11px 14px; margin-bottom:14px; font-size:0.82rem; color:#92400e; line-height:1.5;">
                    ⚠️ 아래 <b>#{안내내용예시}</b> 영역만 수정하세요.<br>나머지 고정 문구를 바꾸면 카톡 발송이 <b>실패</b>합니다.
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:12px 14px; font-size:0.8rem; color:#64748b; margin-bottom:10px; line-height:1.7;">
                    <span style="font-size:0.7rem; font-weight:700; color:#94a3b8; display:block; margin-bottom:4px;">🔒 고정 문구 (수정 불가)</span>
                    [체킷(CHECKIT) 검진 가이드]<br><br>
                    안녕하세요, <b style="color:#27ae60;">#{성함}</b>님!<br>
                    고객님께서 예약하신 건강검진일이 <b style="color:#27ae60;">#{디데이}</b>일 앞으로 다가왔습니다. 🚀<br><br>
                    안전하고 정확한 검진을 위해 아래 사전 안내사항을 꼭 확인해 주세요.<br><br>
                    ▶ 검진 사전 안내
                </div>
                <label style="font-size:0.85rem; font-weight:700; color:#1d1d1f; display:block; margin-bottom:6px;">✏️ #{안내내용예시} <span style="font-weight:400; color:#64748b;">(이 부분만 수정 가능)</span></label>
                <textarea id="guideEditorTextarea" oninput="updateGuidePreview()" style="width:100%; height:130px; padding:12px 14px; border:2px solid #27ae60; border-radius:10px; font-size:0.9rem; line-height:1.6; resize:none; outline:none; font-family:inherit; box-sizing:border-box;"></textarea>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:12px 14px; font-size:0.8rem; color:#64748b; margin-top:10px; line-height:1.7;">
                    <span style="font-size:0.7rem; font-weight:700; color:#94a3b8; display:block; margin-bottom:4px;">🔒 고정 문구 (수정 불가)</span>
                    ∨ 위 내용을 잘 숙지하여 검진 전 준비를 완료해 주세요!<br>
                    추가 문의사항은 '체킷 근로자 포털' 채팅방을 이용해 주시기 바랍니다.<br>
                    알림톡 외 추가 문의는 체킷 근로자 포털 채팅방을 이용해 주세요.
                </div>
                <div style="display:flex; gap:10px; margin-top:18px;">
                    <button onclick="closeGuideEditor()" style="flex:1; padding:13px; border:1px solid #d2d2d7; background:#fff; border-radius:10px; font-weight:600; cursor:pointer;">취소</button>
                    <button onclick="confirmSendBookingGuide()" style="flex:2; padding:13px; border:none; background:#27ae60; color:#fff; border-radius:10px; font-weight:700; cursor:pointer; font-size:0.9rem;"><i class="fa-solid fa-paper-plane"></i> 알림톡 발송하기</button>
                </div>
            </div>
            <!-- 오른쪽: 카카오 알림톡 미리보기 -->
            <div style="flex:1; min-width:240px; display:flex; flex-direction:column; align-items:center;">
                <p style="font-size:0.85rem; font-weight:700; color:#1d1d1f; margin:0 0 12px 0; width:100%;">📱 실제 카톡 미리보기</p>
                <div style="background:#b2c7da; border-radius:20px; padding:16px; width:100%; max-width:290px; box-shadow:0 4px 20px rgba(0,0,0,0.15);">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
                        <div style="width:30px; height:30px; background:#fee500; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:0.9rem;">💬</div>
                        <span style="font-size:0.78rem; font-weight:700; color:#1d1d1f;">체킷(CHECKIT)</span>
                    </div>
                    <div style="background:#fff; border-radius:12px; padding:14px; font-size:0.75rem; line-height:1.7; color:#1d1d1f; box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                        <div id="kakaotalkPreview" style="white-space:pre-wrap; word-break:break-all;">[체킷(CHECKIT) 검진 가이드]

안녕하세요, 홍길동님!
고객님께서 예약하신 건강검진일이 D-3일 앞으로 다가왔습니다. 🚀

안전하고 정확한 검진을 위해 아래 사전 안내사항을 꼭 확인해 주세요.

▶ 검진 사전 안내
(안내 내용을 입력해주세요)

∨ 위 내용을 잘 숙지하여 검진 전 준비를 완료해 주세요!
추가 문의사항은 '체킷 근로자 포털' 채팅방을 이용해 주시기 바랍니다.
알림톡 외 추가 문의는 체킷 근로자 포털 채팅방을 이용해 주세요.</div>
                    </div>
                    <p style="font-size:0.65rem; color:#4a5568; text-align:right; margin:6px 0 0 0;">지금 막</p>
                </div>
                <p style="font-size:0.7rem; color:#94a3b8; text-align:center; margin-top:10px; line-height:1.5;">※ 실제 발송 시 #{성함}, #{디데이}는<br>근로자 정보로 자동 대체됩니다.</p>
            </div>
        </div>
    </div>
    <script>
    function updateGuidePreview() {
        var c = document.getElementById('guideEditorTextarea').value || '(안내 내용을 입력해주세요)';
        var t = '[체킷(CHECKIT) 검진 가이드]\\n\\n안녕하세요, 홍길동님!\\n고객님께서 예약하신 건강검진일이 D-3일 앞으로 다가왔습니다. 🚀\\n\\n안전하고 정확한 검진을 위해 아래 사전 안내사항을 꼭 확인해 주세요.\\n\\n▶ 검진 사전 안내\\n' + c + '\\n\\n∨ 위 내용을 잘 숙지하여 검진 전 준비를 완료해 주세요!\\n추가 문의사항은 \\'체킷 근로자 포털\\' 채팅방을 이용해 주시기 바랍니다.\\n알림톡 외 추가 문의는 체킷 근로자 포털 채팅방을 이용해 주세요.';
        document.getElementById('kakaotalkPreview').innerText = t;
    }
    </script>

</body>
</html>'''

start_idx = content.find(old_modal_start)
if start_idx == -1:
    print('ERROR: old modal start not found')
else:
    # Trim everything from old_modal_start to end of file and replace with new
    new_content = content[:start_idx] + new_modal
    with open('platform.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'SUCCESS: modal replaced from index {start_idx}')
