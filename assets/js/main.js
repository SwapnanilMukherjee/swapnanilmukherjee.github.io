(function () {
  // Mobile navigation toggle
  var nav = document.querySelector('nav');
  var toggle = nav && nav.querySelector('.nav-toggle');
  var links = nav && nav.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Simple lightbox for gallery images
  var images = document.querySelectorAll('img[data-lightbox="gallery"]');
  if (images.length) {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-backdrop';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);display:none;align-items:center;justify-content:center;z-index:1000;padding:24px;';

    var img = document.createElement('img');
    img.className = 'lightbox-image';
    img.style.cssText = 'max-width:100%;max-height:80vh;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.4)';

    var caption = document.createElement('p');
    caption.className = 'lightbox-caption';
    caption.style.cssText = 'color:#e5e7eb;margin-top:12px;text-align:center;font-size:14px;';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = 'position:fixed;top:16px;right:16px;width:40px;height:40px;border-radius:8px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:#fff;font-size:24px;cursor:pointer;';

    overlay.appendChild(img);
    overlay.appendChild(caption);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    var open = function (target) {
      img.src = target.src;
      var fig = target.closest('figure');
      var cap = '';
      if (fig) {
        var capEl = fig.querySelector('figcaption');
        cap = capEl ? capEl.textContent : '';
      }
      caption.textContent = cap || target.alt || '';
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    };

    var close = function () {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      img.src = '';
      caption.textContent = '';
    };

    images.forEach(function (el) {
      el.addEventListener('click', function () { open(el); });
      el.style.cursor = 'zoom-in';
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }
})();
