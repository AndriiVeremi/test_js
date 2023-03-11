
// Створюємо і додаємо колекцію


const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
];


// -------------------------------------------------
// const option = colorPickerOptions[2];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;
// // buttonEl.style.width = 40;
// console.log(buttonEl);


// ---------------------------------------------------

// const colorPickerContainerEl = document.querySelector('.js-color-picker')  // роблю місце для кнопок підключаю до селектора


// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1) {  // перебераю фором
    
//     const option = colorPickerOptions[i];    // на кожній ітерації створюється кнопка

//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');   // підключаю стилі CSS
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     elements.push(buttonEl);  // додпю в масив кожну кнопку(елемент)

// }

// console.log(elements);

// colorPickerContainerEl.append(...elements);  //  розпилюю і передаю з допомогою append елементи на селектор

//----------------- через map() ----------------------------------

// const elements = colorPickerOptions.map(option => {
    
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
// });

// colorPickerContainerEl.append(...elements);


// Пишем Функцію для створення розмітки колорпікера

// const colorPickerContainerEl = document.querySelector('.js-color-picker') 

// const makeColorPickerOptions = options => {
//     return options.map(option => {
//         const buttonEl = document.createElement('button');
//         buttonEl.type = 'button';
//         buttonEl.classList.add('color-picker__option');
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;

//         return buttonEl;
//     });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);