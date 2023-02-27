// делигированиє собитій
// общій слушитель
// фильтр целі клика

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(evt) { 
    if (evt.target.nodeName !== 'BUTTON') {   // перевіряємо чи клік був по кнопці за допомогою nodeName
        return;
    }

    console.log(evt.target);
    console.log(evt.target.nodeName);
}

// код добавленія кнопок

const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    const btn = document.createElement('button');
    btn.textContent = `Кнопка ${labelCounter}`;
    btn.type = 'button';

    container.appendChild(btn);
    labelCounter += 1;
}

