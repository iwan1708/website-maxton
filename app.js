const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); toggle.focus(); } });
document.querySelectorAll('[data-wa]').forEach(link => { const event = link.dataset.wa === 'event'; const phone = event ? '62818471323' : '6281907167118'; const message = event ? 'Halo Maxton Enterprise, saya ingin registrasi Balanced Scorecard Workshop 1 Desember 2026.' : `Halo Maxton Enterprise, saya ingin berkonsultasi mengenai ${link.dataset.topic || 'kebutuhan transformasi bisnis perusahaan kami'}.`; link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`; link.target = '_blank'; link.rel = 'noopener noreferrer'; });
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { nav.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.hash === '#' + entry.target.id)); } }); }, { rootMargin: '-15% 0px -65% 0px' }); document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section)); }
