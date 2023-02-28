// Chatty events (болтливое собітие)
// Приклади throttle і debounce з lodash


// // mousemove і throttle - виконує вункцію з заданим таймаутом

// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// const throttledOnMouseMove = _.throttle(onMouseMove, 500); //  записую в змінну час затримки функції

// window.addEventListener('mousemove', throttledOnMouseMove);

// function onMouseMove(event) {
//     mouseMoveCbInvocationCounter += 1;

//     coordsOutputRef.textContent = `
//     Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter}
//     X: ${event.clientX},
//     Y: ${event.clientY}`;
// }

// Input і debounce - виконує функцію якщо буде пауза з заданим параметром між собитіями

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 2000));

function onInputChange(event) {
    inputCbInvocationCounter += 1;

    outputRef.textContent = `
    Кількість викликів onInputChange: ${inputCbInvocationCounter},
    Значення: ${event.target.value}`;
}
















// Ленива загрузка зображень
// - Натівна з атрибутом loading
// - Бібліотека lazysizes