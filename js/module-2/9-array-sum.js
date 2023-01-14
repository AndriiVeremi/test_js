// Напиши скрипт який який рахує суму елементів двох масивів

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// for (let i = 0; i < array1.length; i += 1) {
//     total += array1[i];
// }

// for (let i = 0; i < array2.length; i += 1) {
//     total += array2[i];
// }
// console.log(total);


// // методом concat


// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);































// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let newArray = '';
   
//     newArray = firstArray.concat(secondArray);
//     console.table(newArray);

//     newArray = firstArray.concat(secondArray).slice(0, maxLength);
//     // newArray = newArray.slice(0, maxLength);

//     console.log(newArray);
//     // Change code above this line
// }

// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
    

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0; // зробити змінну total ДО ЦИКЛУ

// for (i = 0; i < cart.length; i += 1) { // перебрати масив
//     console.log(cart[i]);
//     total += cart[i]  // кожен елемент приплюсувати до total
// }
// console.log('Total ', total);


//

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i <= fruits.length; i += 1) { // Change this line
//     const fruit = fruits[i]; // Change this line
//     console.log(fruit);
// }

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }

//     console.log(total)
//     // Change code above this line
//     return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);

































// function filterArray(numbers, value) {
//     // Change code below this line

//     let bigNumber = [];
//     for (const number of numbers) {
//         if (value < number) {
//             bigNumber.push(number);
//         }
//     }
//     console.log(bigNumber);
//     return bigNumber;
//     // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 5);