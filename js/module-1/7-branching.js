// // Оператор if

// if (5 > 3) {                   // сюди підставляєм вираженіе яка (тобто переобразовується в буль) приводить до true/false
//     console.log('aaa');         // якщо прийде true то тіло виконується  5 > 3 якщо так то тіло виконується.
// }





// // Оператор if...else

// if (5 > 3) {             // сюди підставляєм вираженіе яка (тобто переобразовується в буль) приводить до true/false
//     console.log('aaa');  // якщо прийде true то виконується.
// } else {
//     console.log('bbb');  // якщо прийде false то виконується.
// }





// // Оператор else...if

// const salery = 1000;

// if (salery < 500) {
//     console.log('aaa');
// } else if (salery > 500 && salery <= 1500) {
//     console.log('bbb');
// } else if (salery > 1500 && salery < 3000) {
//     console.log('ccc');
// } else {
//     console.log('ddd');  // якщо не підійшла ні одна умова то покаже це.
// }


// // Тернарний оператор

// const balance = 1000;
// let message;

// if (balance >= 0) {
//     message = 'Позитивний баланс';
// } else {
//     message = 'Негативний баланс';
// }
// console.log(message);

// // але краще використовувати тернарний оператор, коли потрібно щось записати в змінну але по виконнаню якоїсь умови.

// // const message = условие ? виражение1 : виражение2;
// // const message = balance >= 0 ? Позитивний баланс : Негативний баланс;


// const balance = 1000;
// const message = balance >= 0 ? 'Позитивний баланс' : 'Негативний баланс';
// console.log(message);