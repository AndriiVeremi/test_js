// - Створення елементів
// - Вставка вузлів:
    // appendChild(elem),
    // insertBefore(elem, nextSibling),
    // append(...elems),
    // prepend(...elems);
    



// Створюємо заголовок

const titleEl = document.createElement('h1'); // створили тег h1
titleEl.classList.add('page-title');          // створив css клас page-title і додав до тега h1
titleEl.textContent = 'це новий заголовок :)'; // сам заголовок
console.log(titleEl);
document.body.appendChild(titleEl); // додав до боді



// Створюємо і добавляємо картинку--------------------------------------

const imageEl = document.createElement('img');
imageEl.src = "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI";
imageEl.alt = 'asd';
imageEl.width = 340;
console.log(imageEl)

document.body.appendChild(imageEl); // додав в боді картинку



// додаємо в hero картинку і заголовок--------------------------------

const heroEl = document.querySelector('.hero');
heroEl.appendChild('titleEl')
heroEl.appendChild('imageEl')

// але краще додавати елементи через append

heroEl.append(titleEl, imageEl)






// створюємо і добавляєм новий пункт меню---------------------------------------


const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личний кабінет'
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl); // В (li) вложив (a) за допомогою appendChild
console.log(navItemEl);

const navEl = document.querySelector('.site-nav'); 

navEl.appendChild(navItemEl); // додаю (li) в (ul) останнім елементом за допомогою appendChild
navEl.insertBefore(navItemEl, navEl.firstElementChild) // // додаю (li) в (ul) першим елементом за допомогою appendChild
navEl.insertBefore(navItemEl, navEl.children[2])  // додаю (li) в (ul) перед третім елементом за допомогою appendChild


