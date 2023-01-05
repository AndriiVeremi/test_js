// //------- Парс чисел з Number.parseInt() i Number.parseFloat()

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);  ----> Вертає числа які є в рядку (50)
// console.log('elementWidth: ', elementWidth);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);  ----> Вертає числа які є в рядку з крапкаю (200.74)
// console.log('elementHeight: ', elementHeight);




// //------- Метод число.toFixed(digits)

// const salary = 1300.16472;
// console.log(salary.toFixed(2)) ----> бере дві цифер після крапки і повертає рядок


// let salary = 1300.16472;
// salary = salary.toFixed(2);  ----> бере дві цифер після крапки і повертає рядок
// salary = Number(salary);  ----> переводить рядок в числа
// console.log(salary);


// let salary = 1300.16472;
// console.log(Number(salary.toFixed(2)))  ----> бере дві цифер після крапки, переводить рядок в числа.




// //------- Переведення в числа
// Значення NaN(Not a Number) і метод Number.isNaN(value)

// let quantity = '30';
// let value = 'Цей рядок не можна перевести в число';

// console.log(Number(quantity));   ----> рядок переде в цифри і отримаєм 30
// console.log(Number(value));      ----> не вдясться перевести символ до числа і отримаємо NaN




// //------- Обєкт Math
// - Возведение в степень
// - Exponent operator

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);  ----> робить 2 в 5 степені
// console.log(result); // 32

// // або

// console.log(base ** power);  ----> робить 2 в 5 степені





// // ----------- написати скрипт який просить користувача ввести число і степень,
// // ----------- переводить в степень і виводить в консоль!

// const numb = prompt('веддіть число');  ----> просить вести число і зберігає в змінну
// numb = Number(numb)
// const stepen = prompt('веддіть степінь');  ----> просить вести степінь і зберігає в змінну
// stepen = Number(stepen)
// const result = Math.pow(numb, stepen);  ----> перетворює в степен
// console.log(result);  ----> виводить в консоль

// або

// let numb = prompt('веддіть число');
// numb = Number(numb);
// console.log(numb);

// let stepen = prompt('веддіть степінь');
// stepen = Number(stepen);
// console.log(stepen);

// const result = numb ** stepen;




// Генеруєм випадкові числа
// - Math.random()
// - Math.round()

// console.log(Math.random()); ----> генериє випадкове число від 0 до 1;

// const max = 30;
// const min = 10;
// // const result = Math.random() * (max - min) + min; ---->  для того щоб заокруглити число потрібно обернути в Math.roun
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

 


// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min); 
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

