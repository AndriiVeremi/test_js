// //------- Довжина рядка length

// const message = 'В цьому рядку 25 символів';
// console.log(message.length);    //----> показує скільки символів в рядку



// //------- конкатинація рядків

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;    //----> додає/зєднуємо 2 рядка між собою; (+ ' ' +) пробіл між рядками.
// console.log(fullName);




// //------- Напиши скрипт який виведе рядок в форматі
// //------- < Гість X Y засилився в Z номер Q >
// //------- підставити замість X Y Z Q перемінні

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const room = 716;
// const type = 'VIP';
// const welcomeMsg = 'Гість ' + firstName + ' ' + lastName + ' засилився в ' + type + ' ' + room;
// console.log(welcomeMsg);




// //------- Шаблонні Рядкі (template strings)

// const quantity = 5;
// const orderMsg = `Ви замовили ${quantity} холодильників.`; // ----> підставляє значення зі змінної в ${ ... }
// console.log(orderMsg);

// // приклад 2

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const room = 716;
// const type = 'VIP';
// const welcomeMsg = `Гість ${firstName} ${lastName} засилився в ${type} ${room}`;
// console.log(welcomeMsg);




// //------- Нормалізація ( toLowerCase() або toUpperCase() )

// const brend = 'SamSung';
// const normalizeBrend = brend.toUpperCase(); // ----> робим нову змінну normalizeBrend і в неї записуєм нормалізацію
// console.log(normalizeBrend); // ----> виводим результат з змінної яку створили і записали в неї нормалізацію

// // або

// let brend = 'SaMsUnG'; // ----> використовуєм змінну let щоб можна було перезаписати.
// brend = brend.toLowerCase(); // ----> перезаписуємо в змінну результат нормалізації
// console.log(brend);



// //------- метод .slice()

let brend = 'SamSunG';

// brend = brend.slice(3);   // ----> вирізає після 3ї букви ( sung ) і перезаписує в змінну brend
// console.log(brend);

// // console.log(brend.slice(3));   // ----> варіант 2 без перезапису в змінну

// // console.log(brend.slice(3).toLowerCase());   // ---->  варіант 3 без перезапису в змінну і знормалізацією (спочатку вирізає після 3го символу а потім нормалізує)



// //------- Пошук в рядку метод includes()

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'акція';

// const string1 = 'Привіт, мене звати Абдул, це не спам, виграй міліон';
// const string2 = 'Велика АКЦІЯ, якої ще не було!';
// const string3 = 'Рекламна компанія #fatlives';

// console.log(string1.includes(blacklistedWord1));  // ----> перевіряємо в рядку string1 чи є там таке слово яке записане в змінній acklistedWord1 і повертає нам false або true
// console.log(string2.toLowerCase().includes(blacklistedWord2)); // ----> робить нормалізацію string2 потім перевіряє чи рядку string2 є там таке слово яке записане в змінній acklistedWord2 і повертає нам false або true