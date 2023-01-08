// Напиши скрип для підрахунку сумми покупки з знижкою в залежності.
// від потраченої суми за цілий час

// - загальна сума лежить в змінній totalSpent
// - сумма текущого платежу лежить в змінній payment
// - знижка лежить в змінній discount

// якщо витрачено від 100 до 1000 знижка 2%
// якщо витрачено від 1000 до 5000 знижка 5%
// якщо більше 5000  знижка 10%
// якщо витрачено меньше 100  знижка 0%

//  вкінці повідомлення
//  Замовлення оформлене на суму [сума] знижка [знижка] %



// let totalSpent = 1000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовий партнер 2%')
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Серебряний партнер 5%')
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log('Золотой партнер 10%')
//     discount = 0.1;
// } else {
//     console.log('Скідка 0%')
// }

// payment -= payment * discount;

// console.log(`Замовлення оформлене на суму ${payment} знижка ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Загальна сума потрачена в магазині  ${totalSpent}`);


































// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line

    
//     let totalPrice = 0;
//     let message;

//     if (orderedQuantity === 2) {
//         deliveryFee = 50;
//     } else if (orderedQuantity === 4) {
//         deliveryFee = 100;
//     } else if (orderedQuantity === 10) {
//         deliveryFee = 200;
//     }

//     totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;

//     message = `You ordered droids worth ${totalPrice} credits.Delivery ( ${deliveryFee} credits) is included in total price.`;
   
//     console.log(message);

//     // Change code above this line
//     return message;
     
// }

// makeOrderMessage(2, 100, 50);



function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
    const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
    const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

    // Change code above this line
    return message;
}

console.log(makeOrderMessage(2, 100, 50));
makeOrderMessage(4, 300, 100);
console.log("You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price.");
console.log('You ordered droids worth 900 credits. Delivery (200 credits) is included in total price.');