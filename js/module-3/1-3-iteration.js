// // Перебір через for...in i Object.keys | values | entries

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// const keys = Object.keys(feedback); // буквально сказано получи з обєкта feedback масив ключі

// let totalFeedback = 0;

// for (const key of keys) {
//     console.log(feedback[key]); //получив ключів черех [] бо key це змінна

//     totalFeedback += feedback[key]; // записав ключі в змінну
// }

// -------------------------------
    
// const values = Object.values(feedback); // получив масив значень обєкта

// let totalFeedback = 0;

// for (const value of values) {
//     totalFeedback += value; // сплюсівав ві значення 18
// }



// function countTotalSalary(salaries) {
    

//     let totalSalary = 0;
//     // Change code below this line
//     const values = Object.values(salaries);
//     for (const value of values) {
//         totalSalary += value;
// }
//     // Change code above this line
//     return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })




// // получити всі імена друзів

// const getAllName = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         names.push(friend.name);
//     }
//     return names;
// };





// function getAllPropValues(propName) {
//     // Change code below this line
   
//     let names = [];
    
//     for (const product of products) {

    

//         // console.log(product.price);

//         // // console.log(propName);
//         console.log(names);
//     }

// }



// const getAllName = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         names.push(friend.name);
//     }
//     return names;
// };




const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    // Change code below this line
    
    let names = [];
    for (const product of products) {

        if (product.name === "Radar") {
            console.log(product.price * product.quantity);
        }
    }
    console.log(names)
    // Change code above this line
}

// calculateTotalPrice("Blaster");
calculateTotalPrice("Radar");




