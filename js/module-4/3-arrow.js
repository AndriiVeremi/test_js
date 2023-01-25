// // стрілочні функції

// const add = function (a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// };

// // стрілочна функція

// const add1 = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// };

// add(5, 10, 15);

// // якщо параметр один то можна не ставити ()

// const add2 = a => {
//     console.log(a);
//     return a ;
// };

// add(5);

// // якщо параметр взагалі не має то повинні бути пусті --> ()

// const add3 = () => {
    
// };

// //---------------------------------------


// const add4 = (a, b, c) => {   // явний возврат
//     return a + b + c;
// };

// // якщо тільки рreturn (одна операція) можна скоротити запис

// const add5 = (a, b, c) => a + b + c; // не явний возврат


// // якщо з стрілочної функції хочеш вернути Обєкт {} то його потрібно
// // обернути в вираженіє ()   ---->   ({ });


// //----------------------------------

// const callback2 = function (values) {
//     return values <= 4;
// }
//  // те саме тільки стрілочна функція
 
// const callback2a = (values) => values <= 4;






// //-----------------------------------

// const callback1 = function (values) {
//     return values >= 3;
// }
// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// // те саме тільки стрілочна функція

// const r1 = filter([1, 2, 3, 4, 5], values => values >= 3);
// console.log(r1);



// fruits => fruits.quantity >= 120
// //-----------------------------------

// const getFruitsWithQuantity = function (fruits) {
//     return fruits.quantity >= 120;
// }

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

// // те саме тільки стрілочна функція

// const r3a = filter(fruits, fruits => fruits.quantity >= 120);
// console.log(r3a);


function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line

    for (let i = 0; i < orderedItems.length; i += 1) {
        totalPrice += orderedItems[i];
    }


    // Метод перебирання forEach
    orderedItems.forEach(function (orderedItems) {
        totalPrice += orderedItems;
    });

    // Change code above this line
    return totalPrice;
}



function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line


    numbers.forEach(function (numbers, value) {
        filteredNumbers.push(number);
    });




//---------------------------------------
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > value) {
            filteredNumbers.push(numbers[i]);
        }
    }

    // Change code above this line
    return filteredNumbers;
}
