// Напиши скрипт пошуку логіна
// якщо логіна не має вивисти повідомлення 'Користувача [логін] не знайдено'
// якщо логін є то вивисти повідомлення  'Користувач [логін] знайдено'


const logins = ['asdf', 'ffdsa', 'ddddd4', 'ssssddasd'];
const loginToFind = 'ddddd4'; 

// // for + break----------------------

// let message = `Користувач ${loginToFind} не знайдено`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайдено`;
//         break;
//     }
// }
// console.log(message);


// // for...of----------------------

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайдено`;
//         break;
//     }
// }

// console.log(message);


// includes()----------------------

console.log(logins.includes(loginToFind)); // метод просто каже є воно там чи не має (true/false)

// includes() + тернарний оператор ----------------------

const message = logins.includes(loginToFind) ? `Користувач ${loginToFind} знайдено` : `Користувач ${loginToFind} не знайдено`;
console.log(message);