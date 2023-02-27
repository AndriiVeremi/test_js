// делегірованіє
// - один із многіх
// - несколько із многіх i Set

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {            //  Патерн ДаркКлоуз
//     if (evt.target.nodeName !== 'BUTTON') {     //  для того щоб перевірити
//         return;                                 //  чи підходить клік
//     }

//     const currentActiveBtn = document.querySelector('.tags__btn--active');  // перевіряє чи е вже активна кнопка

//     // if (currentActiveBtn) {
//     //     currentActiveBtn.classList.remove('.tags__btn--active');
//     // }
//     // або те саме
//     currentActiveBtn?.classList.remove('tags__btn--active');

//     const nextActiveBtn = evt.target;
//     nextActiveBtn.classList.add('tags__btn--active');
//     selectedTag = nextActiveBtn.dataset.value;

//     console.log(selectedTag)
// }


// ==================================

const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
    
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }

    const btn = evt.target;
    const tag = btn.dataset.value;
    const isActive = btn.classList.contains('tags__btn--active');

    if (isActive) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(tag);
    }

    btn.classList.toggle('tags__btn--active');

}