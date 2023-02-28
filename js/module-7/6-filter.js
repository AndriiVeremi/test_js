const tech = [
    { lable: 'HTML' },
    { lable: 'CSS' },
    { lable: 'JS' },
    { lable: 'Node.js' },
    { lable: 'Vue' },
    { lable: 'Mobx' },
]

// Рендерим розмітку елементів списка
// Слухаєм зміни фільтра
// Фільтруєм данні і рендирим нові елементи

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};

const listItemsMarkup = createListItemsMarkup(tech);

function createListItemsMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join('');
}