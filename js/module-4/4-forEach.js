// Array.prototype.forEach(callback(currentValue, index, array), thisArg)
// По елементно переберає масив
// нічого не вертає
// Заміняє класичний for, якщо не треба переривати

//-------------------------------------------------------------------------------
// forEach є два елементи перший callback(currentValue, index, array) це калбек і
// другий це обєкт  thisArg в контексті якого буде визиватись цей обєкт
//--------------------------------------------------------------------------------


const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number, index, array) {   // (number, index, array) елемент масиву, індекс, оригінальний масив
    console.log(number); 
},
    { a: 5, b: 10 },
);

// 90 % випадків
numbers.forEach(function (number) {
    console.log(number);
}
);