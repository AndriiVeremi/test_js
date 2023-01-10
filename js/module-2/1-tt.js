"use strict"

// if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//     return;
// }

// if (password !== ADMIN_PASSWORD) {
//     message = "Access denied, wrong password!";
//     return;
// }




// if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
// } else {
//     message = "Access denied, wrong password!";
// }


// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line

//     let message;
//     console.log(message);
//     if (password === ADMIN_PASSWORD) {
//         message = "Welcome!";
//         return;
//     }

//     if (password != ADMIN_PASSWORD) {
//         message = "Access denied, wrong password!";
//         return;
//     }

//     message = "Access denied, wrong password!";
//     console.log(message);
//     return message;
//     // Change code above this line

    
// }



// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
    
//     // Change code below this line

//     if (ADMIN_PASSWORD === password) {
//         message = 'Welcome!';
//         console.log(message)
//         return;

//     }
//     message = 'Access denied, wrong password!';
    
//     console.log(message)
    
//     return message;

//     // Change code above this line
// }

// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam")

## Example 9 - Значення за замовчуванням та оператор нульового злиття

Отрефактори код так, щоб у змінну `value` присвоювалося значення
змінної`incomingValue`, якщо воно не рівне `undefined` або`null`.В
іншому випадку має присвоюватися значення`defaultValue`.Перевір роботу
скрипта для наступних значень змінної `incomingValue`: null, undefined, 0,
    false.Використовуй оператор`??`(nullish coalescing operator).



const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue ?? defaultValue;
console.log(value);


## Example 10 - Оператор % та методи рядків

Напиши скрипт, який переведе значення`totalMinutes`(кількість хвилин) в
рядок у форматі годин та хвилин`HH:MM`.

- 70 покаже 01: 10
    - 450 покаже 07: 30
        - 1441 покаже 24: 01

            ```js
const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${ doubleDigitHours }:${ doubleDigitMinutes } `);
```
