const btn = document.querySelector('#cta-btn');
const overlay = document.querySelector('#overlay');
const form = document.querySelector('form');

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    overlay.style.display = 'grid';
    overlay.classList.add('animate-overlay');
    await new Promise(resolve => setTimeout(resolve, 3000));
    form.submit();
});