// Прототип обєкта

const { create } = require("lodash");

// - Object.create()
// - [[Prototype]] і __proto__
// - Object.getPrototypeOf()
// - Свої властивості і Object.prototype.hasOwnProperty()
// - цепочка прототипів

const objC = {
    z: 5,
};

const objB = Object.create(objC);
objB.y = 2;

const objA = Object.create(objB);
objA.x = 9;

console.log(objB.y);
console.log(objB.z);
