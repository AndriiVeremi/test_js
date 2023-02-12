// Типи собитій: keypress, keydown, keyup
//     - Ограніченія keypress
//     - Властивості KeyboardEvent.key i KeyboardEvent.code


const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
};


window.addEventListener('keydown', onKeypress)   //реагує на натискання кнопок ВСІХ escape, control
window.addEventListener('keypress', onKeypress) // реагує на натискання кнопок тільки текстових

refs.clearBtn.addEventListener('click', onClearOutput) // чишчу контент

function onKeypress(event) {
    console.log('event.key: ', event.key);    // це символ на кнопці (може бути на укр І на анг S)
    console.log('event.code: ', event.code);   // це сама кнопка key S

    refs.output.textContent += event.key; 
}

function onClearOutput() { 
    refs.output.textContent = '';
};