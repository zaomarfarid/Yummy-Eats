const btn = document.querySelector('#cta-btn');
const overlay = document.querySelector('#overlay');

btn.addEventListener('click', async () => {
    overlay.style.display = 'grid';
    overlay.classList.add('animate-overlay');
    await new Promise(resolve => setTimeout(resolve, 3000));
    overlay.style.display = 'none';
    overlay.classList.remove('animate-overlay');
});