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



function countTotalSalary(salaries) {
    

    let totalSalary = 0;
    // Change code below this line
    const values = Object.values(salaries);
    for (const value of values) {
        totalSalary += value; 
}
    // Change code above this line
    return totalSalary;
}
countTotalSalary({ mango: 100, poly: 150, alfred: 80 })




// // получити всі імена друзів

// const getAllName = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         names.push(friend.name);
//     }
//     return names;
// };
