// Властивості елемента (hero)
// - зображення
// - Текст і textContent
// https://fastly.picsum.photos/id/966/200/300.jpg?hmac=vBALR2x0cV-keVNLecwjd8ZluSHv17AHDvpiYjBqar0


// const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//     const imageEl = document.querySelector('.hero__image');
//     console.log(imageEl.src)
//     imageEl.src = 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';
//     imageEl.alt = 'Це нове фото'
// });

// const heroTitleEl = document.querySelector('.hero__title');
// console.log(heroTitleEl)
// console.log(heroTitleEl.textContent);
// heroTitleEl.textContent = 'Новий текст' // находим і змінюєм текс


// Атрибути
//     - get(імя - атрибута)
//     - set(імя - атрибута)
//     - remove(імя - атрибута)
//     - has(імя - атрибута)

// console.log(imageEl.getAttribute('src'));
// // те саме
// console.log(imageEl.src);

// console.log(imageEl.removeAttribute('src'));  // видаляє атрибут src

// console.log(imageEl.hasAttribute('src'));  // перевіряє чи є атрибут атрибут src


// Data - атребути

const actions = document.querySelectorAll('.js-actions, button');
console.log(actions[1].dataset);
console.log(actions[1].dataset.action);


magicBtn.addEventListener('click', () => {
    const inputEl = document.querySelector('.js-input');
    console.log(inputEl.values) // читає 
    inputEl.values = 'asdsadad' // записує
});