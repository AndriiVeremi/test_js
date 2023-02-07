// // цикл --> for (ітерація (щьочик i = 0;); условие(коли щьочик зупиниться i < 5;); пост - виражение(на скільки повинен збільшуватись щьочик i += 1)) { тело цикла }

// for (let i = 0; i < 5; i += 1) {  // робимо щоьчик який починається з нуля ( let i = 0; ) тоді показуєм що виконується 5 раз ( i < 5; ) і збільшується на один ( i += 1 можна писати -= 1 тоді буде віднімати по 1 )
//     console.log(i);
// }






// // Pre-increment i Post-increment

// for (let i = 0; i <= 10; i++) {       //  ++і преінкремент  і++ пост інкремент не використовувати це гадость!
//     console.log(i);
// }






// // Напиши скрипт який підрахує загальну суму зарплати працівників
// // Кількість робітників лежить в перемінній employees
// // Зарплата кожного це випадкове число від 500 до 5000
// // записати суму в змінну totalSalary і вивисти в консоль


// //1. зробити змінні
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;
// for (let i = 1; i <= employees; i += 1) {     //2. перебрати робітників в циклі
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,);    //3. згенерувати випадкову зп
//     console.log(`зарплата працівника ${i} - ${salary} гривень`);
//     totalSalary += salary;       //4. додати до тотала
// }

// console.log('total: ', totalSalary);      //5. консоль



// // Напиши скрипт який підрахує загальну суму всіх чьотних чисел
// // Які входять в діапазон чисел в змінних  від min до max

// const min = 5;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {  // роблю цикл
//     console.log(i);
//     if (i % 2 === 0) {   // відбераю всі чьотні числа (% залишку від ділення тобто всі числа які розділяться на 2 і позалишку відділення залишиться 0 це чьотні числа)
//         console.log('чьотні', i);
//         total += i;  // додаю до змінної суми чьотних чисел які відібрались в ітерації
//     }
// }
// console.log('сума чьотних чисел', total)

// // нижній варіант кращий

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {

//     if (i % 2 !== 0) {
//         console.log('не чьотні', i);
//         continue;
//     }

//     console.log('чьотні', i);
//     total += i; // це те саме що і (total = total + i)
// }

// console.log('сума чьотних чисел', total);


function numberToString(num) {
    // Return a string of the number here!

    return Number.toLocaleString(num)

}

numberToString(67)

console.log(numberToString)