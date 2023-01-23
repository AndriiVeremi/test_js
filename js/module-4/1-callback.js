// // Функція зворотьнього виклику callBack

// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback);
//     callback(100); // визиваю функцію fnB коли потрібно
// }

// const fnB = function (number) {
//     console.log(number);
// }

// fnA('afasdf', fnB);  // передаю в функцію параметри в яких є параметр('afasdf') і калбек функція fnB

// // fnA - функця вищого порядку
// // fnB - калбек функція


// // функція doMath(a, b, callback)

// const doMath = function (a, b, callback) {
//     const resuls = callback(a, b);
//     console.log(resuls);
// };

// const add = function (x, y) {
//     return x + y;
// };

// const sub = function (x, y) {
//     return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 8, sub);

// // Або можна передати функцію разом з викликом

// doMath(2, 3, add = function (x, y) {  // це Інлайн функція
//     return x + y;
// });
// doMath(10, 8, const sub = function (x, y) {  // це Інлайн функція
//     return x - y;
// });




// // Отложенія визовов: регистрація собитій

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('Клік по кнопці');
// }

// buttonRef.addEventListener('click', handleBtnClick);




// // Отложенія визовов: геолокация

// const onGetPositionSuccess = function (potions) {
//     console.log(potions);
// };
// const onGetPositionError = function (error) {
//     console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );


// // Отложенія визовов: геолокация

// const callback = function () {
//     console.log('через 3с після виклику')
// };
// console.log('перед паймаутом');
// setTimeout(callback, 2000);
// console.log('після паймаутом');



// // Фильтр

// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         console.log(test(el)); // визиваю на кожній ітерації  функцію callback1

//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// };


// const callback1 = function (values) {
//     return values >= 3;
// }
// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);




// const callback2 = function (values) {
//     return values <= 4;
// }
// const r2 = filter([1, 2, 3, 4, 5, 6, 7], callback2);
// console.log(r2);




// // Фильтр 2

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ]

// const getFruitsWithQuantity = function (fruits) {
//     return fruits.quantity >= 120;
// }

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);



