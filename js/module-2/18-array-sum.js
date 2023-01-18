// Псевдо масив і Array.from i ...

// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments); // в змінну args записую перетворений(Array.from) з псевдо масива (arguments)

//     console.log(args);
// };

// // новіший синтиксис

// const fn = function (...args) { // (...args) в парамтер args збереаються всі аргументи передані в функцію
//     console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);


// // ----------------------

// const fn = function (a, b, c, ...args) { // (...args) в парамтер args збереаються всі аргументи передані в функцію
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// }

// fn('hello', 1, 2, 3);
// fn('hi', 1, 2, 3, 4, 5);
// fn('ello', 1, 2, 3, 4, 5, 6, 7);


// Напиши функцію add для обєднання різной кількості аргументів (чисел)

// const add = function (...args) {
//     console.log(args);
//  };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));


// Напиши функцію filterNumbers(array[, number1, ...]) Яка
// - перше приймає масив чисел
// - повинна вернути новий масив починаючи з 2 аргументу для яких є аналог в оригінальном масиві

// const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log('args: ', args);

//     const uniqueElements = [];

//     for (const element of array) {
//         if (args.includes(element)) {

//             uniqueElements.push(element);

//             console.log(`${element} є скрізь`)
//         }
//     }
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));







// function getEvenNumbers(start, end) {
//     const total = [];

//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             total.push(i);
//         }
       
//     }
//     return total;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));


const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

for (const key in apartment) {
    // keys += key;
    // values += apartment[key];
    console.log(apartment[key]);
    console.log(key);
}















// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// let total = 0;  // 1 зробити змінну total

// for (let i = 0; i < numbers.length; i += 1) {  // 2 перебрати масив
//     console.log(numbers[i]);

//     if (numbers[i] % 2 === 0) {   // 3 на кожній ітерації перевірити елемент на чьотність  ( рахує не чьотні !==)
//         console.log('ура чьотні');

//         total += numbers[i];  // 4 якщо елемент чьотний плюсуєм до тотала
//     }
// }
// console.log('Total ', total);
