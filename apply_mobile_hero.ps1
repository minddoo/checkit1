$ErrorActionPreference = "Stop"
$html = Get-Content -Path index.html -Raw -Encoding UTF8

$mobileHero = @"
        <section id="hero-mobile">
            <div style="display: flex; flex-direction: column; gap: 65px; width: 100%; padding: 40px 24px 100px; box-sizing: border-box; background: #fdfdfd;">
                
                <header style="text-align: center; margin-bottom: 25px;">
                    <div style="display: inline-block; font-size: 0.7rem; font-weight: 750; color: #4f46e5; background: rgba(79, 70, 229, 0.05); padding: 6px 16px; border-radius: 100px; margin-bottom: 16px; text-transform: uppercase;">CHECKIT Platform</div>
                    <h1 style="font-size: 1.85rem; font-weight: 850; line-height: 1.35; color: #0f172a; margin: 0;">체계적이고 지속가능한<br><span style="color: #4f46e5;">보건관리 플랫폼 기능</span></h1>
                </header>

                <div style="background: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 15px 50px rgba(0, 0, 0, 0.04); border: 1px solid rgba(0, 0, 0, 0.03);">
                    <img src="assets/hero-1.jpg" style="width: 100%; height: auto; display: block;">
                    <div style="padding: 35px 28px;">
                        <div style="display: inline-block; font-size: 0.75rem; font-weight: 850; color: #4f46e5; background: rgba(79, 70, 229, 0.08); padding: 4px 14px; border-radius: 100px; margin-bottom: 14px;">STEP 01</div>
                        <h3 style="font-size: 1.5rem; margin-bottom: 16px; color: #111827; font-weight: 800; line-height: 1.35;">근로자 명단 &amp; 병원 정보 <span style="color: #4f46e5; display: block;">원스텝 등록</span></h3>
                        <p style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; margin: 0; word-break: keep-all;">기업 보건관리자가 엑셀로 근로자 명단과 병원 정보를 간편하게 등록하여 기초 데이터를 구축합니다.</p>
                    </div>
                </div>

                <div style="background: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 15px 50px rgba(0, 0, 0, 0.04); border: 1px solid rgba(0, 0, 0, 0.03);">
                    <img src="assets/hero-2.jpg" style="width: 100%; height: auto; display: block;">
                    <div style="padding: 35px 28px;">
                        <div style="display: inline-block; font-size: 0.75rem; font-weight: 850; color: #4f46e5; background: rgba(79, 70, 229, 0.08); padding: 4px 14px; border-radius: 100px; margin-bottom: 14px;">STEP 02</div>
                        <h3 style="font-size: 1.5rem; margin-bottom: 16px; color: #111827; font-weight: 800; line-height: 1.35;">누락 데이터 <span style="color: #4f46e5; display: block;">실시간 체크</span></h3>
                        <p style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; margin: 0; word-break: keep-all;">등록된 근로자와 계약 병원 목록을 비교 관리하며 누락 데이터까지 실시간으로 체크합니다.</p>
                    </div>
                </div>
                
                <!-- 추가 단계는 동일한 패턴으로 복제 후 변경 원하심 -->
                
            </div>
        </section>
"@

# Replace the hero-mobile section using regex
$html = $html -replace '(?s)<section id="hero-mobile".*?</section>', $mobileHero
Set-Content -Path index.html -Value $html -Encoding UTF8
Write-Output "Applied Mobile Override!"
