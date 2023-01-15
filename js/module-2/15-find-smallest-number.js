// напиши функцію findSmallesNumber(numbers) для пошука самого малого числа
// числа унікальні не повторюються



// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('smallestNumber: ', smallestNumber);



const findSmallNumber = function (numbers) {
    let smallestNumber = numbers[0];

    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber;
}

console.log(findSmallNumber([3, 8, 12, -2, 15]));
console.log(findSmallNumber([100, 54, 8, 12, 47]));
console.log(findSmallNumber([7, 21, 84, 15, 4]));