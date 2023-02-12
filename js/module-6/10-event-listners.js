// Собитія
//     - Створити і видалення слушителя
//     - Іменованія калбеків для слушителя
//     (- handle*: handleSubjectEvent)
//     (- *Handler: subjectEventHandler)
//     (- on *: onSubjectEvent)
//     - силочна індентичність колбеків
//     - Обєкт собитія



// const targetBtn = document.querySelector('.js-target-btn');

// targetBtn.addEventListener('click', handleButtonClick);

// function handleButtonClick() {    // (- handle*: handleSubjectEvent)
//     console.log('Клік')
// }


// function targetButtonClickHandler() {  // (- *Handler: subjectEventHandler)
//     console.log('Клік')
// }

// function onTargetButtonClick() {    // (- on *: onSubjectEvent)
//     console.log('Клік')
// }


// -----------------------------------------------------------------

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', (event) => {
    console.log('Вішаю слашатель собитій');
   
    targetBtn.addEventListener('click', onTargetBtnClick);
});


removeListenerBtn.addEventListener('click', (event) => {
    console.log('Знімаю слашатель собитій');

    targetBtn.removeEventListener('click', onTargetBtnClick);
});


function onTargetBtnClick(event) {
    console.log('клік');
}; 

