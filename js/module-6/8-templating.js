// Властивість innerHTM
//     - читання
//     - запис

// const titleEl = document.querySelector('.title');
// console.log(titleEl.textContent);  // Це заголовок
// console.log(titleEl.innerHTML);    // Це <span> заголовок</span>

// titleEl.innerHTML = 'новий тітл';
// titleEl.innerHTML = '<a href="">заголовок</a>';
// titleEl.innerHTML = '' // очистив все

// вставка розметкі з допомогою insertAdjacentHTML() -------------------------------

const titleEl = document.querySelector('.title');

titleEl.insertAdjacentHTML('beforebegin', '<a href="">заголовок</a>'); // добавить з самого початку
titleEl.insertAdjacentHTML('afterend', '<a href="">заголовок</a>'); // добавить останнім