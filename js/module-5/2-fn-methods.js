// call і apply

const showThis = function (...args) {
    console.log('showThis -> this', this);
};

const objA = {
    a: 5,
    b: 10,
}
//  showThis -> this {a: 5, b: 10} 
showThis.call(objA, 5, 6, 7);  //  перший передаю обєкт а інших може бути безлічн аргументів  5, 6, 7
// буквально звертаюсь до функції(обєкта)
//і кажу що визви в себе  метод call
// першим агрументом передаю обєкт в контексті якого треба визвати


showThis.apply(objA, [5, 6, 7]) // тут інші аргументи передаються масивом

 //-------------------------

const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

const hat = {
    color: 'black',
};
changeColor.call(hat, 'orange'); //color: "orange"


const sweater = {
    color: 'green',
};
changeColor.call(sweater, 'blue'); //color: "blue"


// bind ------ робить копію функції з привязаним контекстом

const changeColor = changeColor.bind(hat); // this завжди буде силатись на hat
const changeSweaterColor = changeColor.bind(sweater);

changeColor             // undefided
changeHatColor();       //color: "orange"
changeSweaterColor();   //color: "blue"


// counter ------

// const counter = {
//     value: 0,
//     increment(value) {
//         this.value += value;
//     },
//     decrement(value) {
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, couter.increment.bind(counter));       // ok
// updateCounter(10, couter.decrement);                    // undefided

//-----------

const counter2 = {
    value: 0,
    increment(value) {
        this.value += value;
    },
    decrement(value) {
        this.value -= value;
    },
};