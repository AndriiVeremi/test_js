// Собитія submit
// Дії Браузера за замовченням
// Властивість elements
// Класс FormData


const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    // event.preventDefault();  // щоб не перезагружалась сторінка
    // console.log(event.currentTarget); //Посилається на той елемент який слухає це собитіє

    const mail = formElements.email.value;
    const password = formElements.password.value;


//---------------------------------------------------


    const formData = new FormData(event.currentTarget); // зберає всі дані з форми
    console.log(formData);

    formData.forEach((value, name) => {
        console.log(name);
        console.log(value);
    })
}