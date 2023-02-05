// // Основи ООП: класс, єкземпляр (обєкт), інтерфейс


// // Функціїї - конструктори
// //     - Іменовані
// //     - Оператор new
// //     - властивість Function.prototype

// const Car = function ({ brand, model, price } = { }) { // це функція конструктор \клас\ ( назва функції повинна бути з великої букви і в одинарному)
    // this.brand = brand;
    // this.model = model;
    // this.price = price;
//     // функція визивається в контексті створеного обєкта (new Car) тобто this буде звертатись до (new Car)
// };

// console.log(Car.prototype); // В всластивості tihis.__proto__ записується силка на обєкт Car.prototype тобто це прототип будущого обєкта


// Car.prototype.sayHi = function () {
//     console.log('helloy :');
// };
// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// }

// const myCar = new Car({
//     brand: 'Audi',
//     model:'Q3',
//     price: 35000,
// }); //екземпляр функціїї конструктор Оператор new створю екземпляр (пустий обєкт)
// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'X7',
//     price: 40000,
// });

// console.log(myCar, myCar2)

// myCar.sayHi();

// myCar.changePrice(10000);

//-----------------------------------------------

// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
// }
// const mango = new User({ email: 'mango@mail.com', password: 111111 });

// mango.changeEmail('new-email@mail.com')

// console.log(mango);

// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     // Change code below this line
//     getPrice() {
//         return this.price;
//     };

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }
//     // Change code above this line
// }


