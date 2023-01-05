//------- Парс чисел з Number.parseInt() i Number.parseFloat()

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);  ----> Вертає числа які є в рядку (50)
// console.log('elementWidth: ', elementWidth);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);  ----> Вертає числа які є в рядку з крапкаю (200.74)
// console.log('elementHeight: ', elementHeight);




//------- Метод число.toFixed(digits)

// const salary = 1300.16472;
// console.log(salary.toFixed(2)) ----> бере дві цифер після крапки і повертає рядок


// let salary = 1300.16472;
// salary = salary.toFixed(2);  ----> бере дві цифер після крапки і повертає рядок
// salary = Number(salary);  ----> переводить рядок в числа
// console.log(salary);


// let salary = 1300.16472;
// console.log(Number(salary.toFixed(2)))  ----> бере дві цифер після крапки, переводить рядок в числа.




//------- Переведення в числа
// Значення NaN(Not a Number) і метод Number.isNaN(value)

// let quantity = '30';
// let value = 'Цей рядок не можна перевести в число';

// console.log(Number(quantity));   ----> рядок переде в цифри і отримаєм 30
// console.log(Number(value));      ----> не вдясться перевести символ до числа і отримаємо NaN




//------- Обєкт Math
// - Возведение в степень
// - Exponent operator

const base = 2;
const power = 5;

// const result = Math.pow(base, power);  ----> робить 2 в 5 степені
// console.log(result); // 32

// // або

// console.log(base ** power);  ----> робить 2 в 5 степені




const quantity = prompt('веддіть число і степень');
quantity = Number(quantity);
console.log()





