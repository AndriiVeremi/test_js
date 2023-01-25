// Функція результатом своєї праці може вертати другу функцію

// Повернута функція підчас виклику буде мати доступ до
// всіх локальних змінних батківскій функції
// це називається Замикання функції


// const fnA = function (parameter) {
//     const innerVariable = 'значення в середині функції fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log('Це виклик innerFunction');
//     };
//     return innerFunction;
// };

// const fnB = fnA();

// console.log(fnB);

// fnB();



// повар ------------------------------------

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовить ${dish}`);
// }

makeDish('Mango', 'пиріг');
makeDish('Mango', 'яєшня');
makeDish('Mango', 'чай');

makeDish('Poly', 'котлети');
makeDish('Poly', 'спутник');
makeDish('Poly', 'кава');

const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} готовить ${dish}`);
    };
    return makeDish;
};

const mango = makeSheff('Mango');
mango('котлети');

console.dir(mango);

const poly = makeSheff('poly');
poly('чай');


// округлятор ------------------------------------

// const floatingPoint = 3.4566565;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.434333));

// function rounder(places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// // rounder2(floatingPoint);
// // rounder3(floatingPoint);


// або

const rounder = function (places) {
    return function (places) {
        return Number(number.toFixed(places));
    };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.4225));
console.log(rounder3(5.1325));



// Привітні дані і функції --------------------

const salaryManagerFactory = function (employeeName, baseSalary) {
    let salary = baseSalary;

    const chngeBy = function (amount) {
        salary += amount;
    };

    return {
        raise(amount) {
            changeBy(amount);
        },
        lower(amount) {
            changeBy(amount);
        },
        current() {
            return `Поточна зарплата ${employeeName} - ${salary}`;
        },
    };
};