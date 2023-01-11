"use strict"

// Масиви

// const friends = ['mango', 'kiwi', 'poly', 'ajax']; // масив
// console.table(friends);

// const lastIndex = friends.length - 1; // відбираю останні й елемент масиву
// console.log(lastIndex);

// friends[1] = 'dashuk'; // перезаписує(замінює) в масиві елемент(1)
// friends[3] = 123;
// console.log(friends);


// Примитіви передається просто значення  зріввнюються їхні значиння

// let a = 10;
// let b = a;
// console.log(a); //10
// console.log(b); //10
// a = 20;
// console.log(a); //20
// console.log(b); //10

//силочні типи передаються тилкі сама силка на масив і зрівнюються по адресу де знаходиться

// const a = [1, 2, 3];
// const b = a;
// console.log(a); //[1, 2, 3]
// console.log(b); // [1, 2, 3]
// a[0] = 500;
// console.log(a); //[500, 2, 3]
// console.log(b); // [500, 2, 3]




// Перебірка або Ітерація масива;

// цикл for

// const friends = ['mango', 'kiwi', 'poly', 'ajax']; // масив
// const lastIndex = friends.length - 1; // відбираю останні й елемент масиву

// // for (let i = 0; i <= lastIndex - 1; i += 1) {
// //     console.log(friends[i]); // перебереться весь масив
// // };

// for (let i = 0; i <= lastIndex - 1; i += 1) {
//     friends[i] += '-1'; // додав кожному елементу масиву -1;
// };
// console.table(friends);

// цикл for...of

// const friends = ['mango', 'kiwi', 'poly', 'ajax'];

// for (const friend of friends) {
//     console.log(friend);
// }