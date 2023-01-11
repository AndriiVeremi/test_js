//Підрахувати загальну суму покупок



// // 1 перебрати масив
// // 2 зробити змінну total ДО ЦИКЛУ
// // 3 кожен елемент приплюсувати до total

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0; // зробити змінну total ДО ЦИКЛУ

// for (i = 0; i < cart.length; i += 1) { // перебрати масив
//     console.log(cart[i]);
//     total += cart[i]  // кожен елемент приплюсувати до total
// }
// console.log('Total ', total);

// // можна через for...of

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }
// console.log('Total ', total);





// Підрахувати загальну суму покупок додати до кожной покупкі 1ю1%

// const cart = [54, 28, 105, 70, 92, 17, 120];

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);