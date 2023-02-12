// Властивості "навінація" по DOM-вузлах (взяти список)

const navEl = document.querySelector('.site-nav');

const firstNavItemEl = navEl.querySelector('.site-nav__item');
//те саме
const firstNavItemEl = navEl.firstElementChild; // перший елемент
const firstNavItemEl = navEl.children           // всі діти
const firstNavItemEl = navEl.lastElementChild;  // останній елемент