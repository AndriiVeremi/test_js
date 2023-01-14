// // Працюєм с колекцією Card в Трело
// // Метод splice()
// // додати
// // видалити
// // обновити


// const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

// console.table(cards);

// // Видалення (по індексу) метод indexOf()

// const cardToRemove = 'card-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);   // .splice(де видалити, кількість елементів)

// console.table(cards);


// // Додавання (по індексу) метод indexOf()

// const cardToInsert = 'card-6';
// const index = 3;

// cards.splice(2, 0, 'card-6', 'card-7'); // з 2 елементу, 0 нічого не видаляй, додай елемент 6 і 7

// console.table(cards);


// // Обновлення (по індексу)

// const cardToUpdate = 'card-11';

// cards.splice(2, 1, 'card-11'); // замість 2 елемента, видалити тільки 1 елемент, замінити на card-11

// console.table(cards);

// // // //

// const cardToUpdate = 'card-4';
// const index = cards.indexOf(cardToUpdate);
// console.log(index);

// cards.splice(index, 1, 'new-card-4');
// console.table(cards);