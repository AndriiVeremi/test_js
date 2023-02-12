// document.querySelector i document.querySelectorAll

console.log(document);
console.dir(document);

// navRef - силка
// navEl - елемент

const navItemEl = document.querySelector('.site-nav__link'); // шукає і вибере першу (a) яку знайде
const navLinksEl = document.querySelectorAll('.site-nav__link')  // шукає і вибере всі  в любу глубену (a) які знайде (колекцію)
const navLinksEl = navEl.querySelectorAll('.site-nav__link')   // шукає і вибере всі в але не глибше ніж navEl (a) які знайде(колекцію)
// або більш специфікчний
const navLinksEl = document.querySelectorAll('site-nav .site-nav__link')

//------------
const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.addEventListener('click', () => { 
    const navItemEl = document.querySelector('.site-nav__link'); 
    const navLinksEl = document.querySelectorAll('.site-nav__link'); 
})