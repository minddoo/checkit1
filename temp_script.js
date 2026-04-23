
    window.viewResultFile = (workerId) => {
        const worker = allWorkers.find(w => w.id === workerId);
        // Base64 Mode: prioritize Base64 for instant access, URL as fallback
        const fileContent = worker.resultFileBase64 || worker.resultFileUrl;
        
        if (!worker || !fileContent) {
            return alert('?úÏ∂ú??Í≤∞Í≥ºÏßÄ ?åÏùº???ÜÍ±∞???ÑÏßÅ Ï≤òÎ¶¨ Ï§ëÏûÖ?àÎã§.');
        }

        document.getElementById('rvWorkerName').textContent = worker.name || '-';
        document.getElementById('rvFileName').textContent = worker.resultFileName || 'Ï≤®Î??åÏùº';
        const submitDate = (worker.resultSubmittedAt && worker.resultSubmittedAt.seconds)
            ? new Date(worker.resultSubmittedAt.seconds * 1000).toLocaleDateString('ko-KR') 
            : '-';
        document.getElementById('rvSubmitDate').textContent = submitDate;

        // Preview area
        const previewArea = document.getElementById('rvPreviewArea');
        const isImage = worker.resultFileType && worker.resultFileType.startsWith('image/');
        const isPdf = worker.resultFileType && worker.resultFileType === 'application/pdf';

        if (isImage) {
            previewArea.innerHTML = `<img src="${fileContent}" style="max-width:100%; max-height:400px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.1);">`;
        } else if (isPdf) {
            previewArea.innerHTML = `
                <div style="text-align:center;">
                    <i class="fa-solid fa-file-pdf" style="font-size:4rem; color:#ef4444; margin-bottom:12px;"></i>
                    <p style="font-weight:600; color:#334155;">${worker.resultFileName || 'PDF ?åÏùº'}</p>
                    <p style="font-size:0.8rem; color:#94a3b8;">PDF ?åÏùº?Ä ?§Ïö¥Î°úÎìú?òÏó¨ ?ïÏù∏??Ï£ºÏÑ∏??/p>
                    ${worker.uploadNote ? `<p style="font-size:0.75rem; color:#f87171;">(${worker.uploadNote})</p>` : ''}
                </div>
            `;
        } else {
            previewArea.innerHTML = `
                <div style="text-align:center;">
                    <i class="fa-solid fa-file" style="font-size:4rem; color:#64748b; margin-bottom:12px;"></i>
                    <p style="font-weight:600; color:#334155;">${worker.resultFileName || 'Ï≤®Î??åÏùº'}</p>
                    <p style="font-size:0.8rem; color:#94a3b8;">?åÏùº???§Ïö¥Î°úÎìú?òÏó¨ ?ïÏù∏??Ï£ºÏÑ∏??/p>
                </div>
            `;
        }

        // Download link
        const downloadBtn = document.getElementById('rvDownloadBtn');
        downloadBtn.href = fileContent;
        // If it's base64, we need to ensure it's treated as a download
        downloadBtn.download = worker.resultFileName || 'result';

        document.getElementById('resultViewerModal').style.display = 'flex';
    };

