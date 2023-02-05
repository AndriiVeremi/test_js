// // Класси
//     // - Обявленніє
//     // - конструктор
//     // - методи
//     // - static
//     // - приватні властивості
//     // - синтаксит публічних властивостей і методи класа
//     // - геттери і сеттери

// class Car1 {
//     static description = 'Клас який описує авто'; // статичні властивості

//     static logInfo(carObj) {                      // статичний метод
//         console.log('Car.logInfo -> carObj', carObj)
//     }

//     #test = 'test';  // це приватна властивість

//     constructor({ brand, model, price } = {}) {
//         this.brand = brand;
//         this._model = model;
//         this.price = price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     updateModel(newModel) {
//         this.model = newModel;
//     }

//     // setModel(newModel) {
//     //     this.model = newModel;
//     // }
//     set model(newModel) {     // це сетер
//         this._model = newModel;
// }
//     // getModel() {
//     //     return this.model;
//     // }
//     get model() {      // це гетер 'get model(){}' його назава не може співпадати з властивість тому на властивість додають _model
//         return this._model;
//     }
// }


// const carInstance = new Car1({
//     brand: 'Audi',
//     model:'Q3',
//     price: 35000,
// })


// console.log(carInstance.model);   // коли читає то викликається гетер
// carInstance.model = 'Q4';          // коли записуєш то викликається сетер






// //-------------------------------------------------

// // class Car {
// //     // Change code below this line
// //     #brand;
// //     constructor({ brand, model, price }) {
// //         this.#brand = brand;
// //         this.model = model;
// //         this.price = price;
// //     }
// //     getBrand() {
// //         return this.#brand;
// //     }
// //     changeBrand(newBrand) {
// //         this.#brand = newBrand;
// //     }
// //     // Change code above this line
// // }

// //-------------------------------------------------

// class Car {
//     // Change code below this line
//     #brand;
//     #model;
//     #price;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.#model = model;
//         this.#price = price;
//     }

//     // getBrand() {
//     //   return this.#brand;
//     // }

//     // changeBrand(newBrand) {
//     //   this.#brand = newBrand;
//     // }
//     get brand() {
//         return this._brand;
//     }

//     set brand(newBrand) {
//         this._model = newModel;
//     }

//     // getModel() {
//     //   return this.#model;
//     // }

//     // updateModel(newModel) {
//     //   this.#model = newModel;
//     // }

//     get model() {
//         return this._model;
//     }

//     set model(newModel) {
//         this._model = newModel;
//     }

//     // getPrice() {
//     //   return this.#price;
//     // }

//     // setPrice(newPrice) {
//     //   this.#price = newPrice;
//     // }

//     get price() {
//         return this._model;
//     }

//     set price(newPrice) {
//         this._price = newPrice;
//     }

//     // Change code above this line
// }



// class Car {
//     // Change code below this line
//     static MAX_PRICE = 50000;
//     #price;

//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (newPrice <= Car.MAX_PRICE) {
//             this.#price = newPrice;
//         }

//     }
//     // Change code above this line
// }


// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000



// // set email(newEmail) {
// //     if (newEmail === "") {
// //         console.error("Помилка! Пошта не може бути порожнім рядком!");
// //         return;
// //     }

// //     this.#email = newEmail;
// // }




class Car {
    static #MAX_PRICE = 50000;
    // Change code below this line


    checkPrice(price) {
        if (newPrice > Car.#MAX_PRICE) {
            return "Error! Price exceeds the maximum"
        }
        return "Success! Price is within acceptable limits"
    }


    // Change code above this line
    constructor({ price }) {
        this.price = price;
    }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
