const btn = document.querySelector('#cta-btn');
const overlay = document.querySelector('#overlay');

btn.addEventListener('click', () => {
    overlay.style.display = 'grid';
    overlay.classList.add('animate-overlay');
    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.classList.remove('animate-overlay');
    }, 3000);
});