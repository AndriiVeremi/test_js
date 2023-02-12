const magicBtn = document.querySelector('.js-magic-btn');

// Інтерфейс classList
//     - add (клас)
//     - remove(клас)
//     - toggle(клас)
//     - replace(клас)
//     - contains(клас)


// magicBtn.addEventListener('click', () => {

//     const navEl = document.querySelector('.site-nav');
//     console.log(navEl.classList); // тут храняться вкі методи які можна використовувати

//     navEl.classList.add('super-cool'); //добавляю класс .super-cool
//     navEl.classList.remove('super-cool'); //удаляю класс .super-cool
// });

//-----------------------
// magicBtn.addEventListener('click', () => {
//     navEl.classList.toggle('sdfsfsdf'); // якщо є такий клам є то видалить якщо немає то добавить
//     navEl.classList.replace('super-cool', 'ssdfsfsdf'); // замінить одне на одне
//     navEl.classList.contains('sdfsfsdf') // тепервіряє чи такий клас є і вертає true або false
// });

//-----------------------

const currentPageUrl = '/portfolio';

const linkEl = document.querySelector(
    `.site-nav__link[href="${currentPageUrl}"]`,
);
console.log(linkEl);
linkEl.classList.add('site-nav__link--current');  // додав клас site - nav__link--current
