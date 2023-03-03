const tech = [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JS' },
    { label: 'Node.js' },
    { label: 'Vue' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'Postgre' },
    { label: 'Mongo' },
    { label: 'Vue' },
]

// Рендерим розмітку елементів списка
// Слухаєм зміни фільтра
// Фільтруєм данні і рендирим нові елементи

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.throttle(onFilterChange, 300)) //тормознув виконнаня функції на 300ms

const listItemsMarkup = createListItemsMarkup(tech);

refs.list.innerHTML = listItemsMarkup;

function createListItemsMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(event) {
    const filter = event.target.value.toLowerCase();

    const filteredItem = tech.filter(t =>       // роблю новий масив з оригінального вже отфільтрований по вединих літерах літері
        t.label.toLowerCase().includes(filter),
    );
   
    const listItemsMarkup = createListItemsMarkup(filteredItem); // створив розмітку
    refs.list.innerHTML = listItemsMarkup; // замінив її
}