const btn = document.querySelector('#cta-btn');
const overlay = document.querySelector('#overlay');

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    overlay.style.display = 'grid';
    overlay.classList.add('animate-overlay');
    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.classList.remove('animate-overlay');
        window.location.replace('/results.html');
    }, 3000);
});