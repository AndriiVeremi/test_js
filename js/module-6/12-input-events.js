// Паттерн "Обєкт силок"
// Собитія
//     - focus i blur
//     - input i change
//     - чекбокси і властивості checked


const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'), 
}

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// refs.input.addEventListener('focus', onInputFocus);    //  Получаю фокус на Інтупі
// refs.input.addEventListener('blur', onInputBlur);     //  втрата фокуса
// refs.input.addEventListener('change', onInputChange)       //  виконується коли втрачається фокус, (для радіобатонів чекбоксів)
// refs.input.addEventListener('input', onInputChange)     // виводить кожну зміну в інпуті (для текста)

refs.input.addEventListener('input', onInputChange2) // змінює напис в спані на кнопці ч1

refs.licenseCheckbox.addEventListener('change', onLiceenseChange)




function onInputFocus() {
    console.log('Інтуп получив фокус - собитіє focus');
}

function onInputBlur() {
    console.log('Інтуп втратив фокус - собитіє blur');
}

function onInputChange(event) { 
    console.log(event.currentTarget.value);
}

function onInputChange2(event) {      // змінює напис в спані на кнопці ч2
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
}

function onLiceenseChange(event) { 
    console.log(event.currentTarget.checked);

    refs.btn.disabled = !event.currentTarget.checked; // ховає кнопку якщо не вибраний чекбокс
}