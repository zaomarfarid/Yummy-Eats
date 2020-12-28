let btn = document.querySelector('#cta-btn');
let overlay = document.querySelector('#overlay');

// It will work too, I was just playing around :)

// const animate = () => (
//     new Promise((resolve) => {
//         overlay.style.display = 'grid';
//         overlay.classList.add('animate-overlay');
//         setTimeout(() => {
//             overlay.style.display = 'none';
//             overlay.classList.remove('animate-overlay');
//         }, 3000);
//         resolve();
//     })
// );

// btn.addEventListener('click', async () => {
//     await animate()
//         .then(() => animate())
//         .catch((err) => {
//             console.log('error!', err)
//         });
// });

btn.addEventListener('click', () => {
    overlay.style.display = 'grid';
    overlay.classList.add('animate-overlay');
    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.classList.remove('animate-overlay');
    }, 3000);
});