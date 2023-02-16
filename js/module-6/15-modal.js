// 1. Відкриття та закриття по кнопці: onModalOpen i onModalClose
// 2. Закриття по кліку в бекдроп: onBackDropClick
// 3. Закриття по ECS: onEscapeKeypress

// в CSS є класс show-modal, який необхідно додати в Боді при відкритті модалкі


// const refs = {
//     openModalBtn: document.querySelector('[data-action="open-modal"]'),
//     closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//     backdrop: document.querySelector('.js-backdrop'),
// };

// refs.openModalBtn.addEventListener('click', onOpenModal)
// refs.closeModalBtn.addEventListener('click', onCloseModal)
// refs.backdrop.addEventListener('click', onBackdropClick)


// function onOpenModal() {
//     window.addEventListener('keydown', onEscKeyPress)
//     document.body.classList.add('show-modal')
// }

// function onCloseModal() {
//     window.removeEventListener('keydown', onEscKeyPress)
//     document.body.classList.remove('show-modal')
// }

// function onBackdropClick(event) {
//     console.log('клаік по бекдропу')
    
//     console.log(event.currentTarget);  // таргет по бекдропу
//     console.log(event.target)         //  таргет на сам елемент

//     if (event.currentTarget === event.target) {
//         console.log('клікнули в сам бекдроп')

//         onCloseModal();
//     }
// }

// function onEscKeyPress(event) {

//     console.log(event.code)

//     const ESC_KEY_CODE = 'Escape';

//     if (event.code === ESC_KEY_CODE) {
//         onCloseModal();
//     }
// }




function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    const fullArray = firstArray.concat(secondArray).slice(0, maxLength);

    console.log(fullArray)


    // Change code above this line
}
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)


length