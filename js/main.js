// Fælles script for alle sider

// 1) Vis en pladsholder, hvis et billede eller en video endnu ikke ligger i /media
function showMissing(el) {
  const src = el.getAttribute('src') || (el.querySelector('source') && el.querySelector('source').getAttribute('src')) || '';
  const box = document.createElement('div');
  box.className = 'ph-missing';
  box.textContent = 'Mangler: ' + src;
  const ratio = el.getAttribute('data-ratio');
  if (ratio) box.style.aspectRatio = ratio;
  el.replaceWith(box);
}

document.querySelectorAll('img[data-media]').forEach((img) => {
  if (img.complete && img.naturalWidth === 0) showMissing(img);
  else img.addEventListener('error', () => showMissing(img), { once: true });
});

document.querySelectorAll('video[data-media]').forEach((video) => {
  const source = video.querySelector('source');
  if (video.networkState === 3) { showMissing(video); return; } // NETWORK_NO_SOURCE: fejlede allerede
  (source || video).addEventListener('error', () => showMissing(video), { once: true });
});

// 2) Filtrering på projektsiden
const filterButtons = document.querySelectorAll('[data-filter]');
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    filterButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    document.querySelectorAll('[data-tags]').forEach((card) => {
      card.hidden = f !== 'alle' && !card.dataset.tags.split(' ').includes(f);
    });
  });
});

// 3) Kontaktformular: åbner brugerens mailprogram med beskeden udfyldt
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Besked fra ' + (data.get('navn') || 'portfolio'));
    const body = encodeURIComponent((data.get('besked') || '') + '\n\n— ' + (data.get('navn') || '') + ' (' + (data.get('email') || '') + ')');
    window.location.href = 'mailto:Cecilieva@outlook.dk?subject=' + subject + '&body=' + body;
  });
}

// 4) Årstal i footeren
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
