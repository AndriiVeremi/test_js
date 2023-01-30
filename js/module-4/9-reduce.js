// Array.prototype.reduce()
// По елементно перебирає оригінальний масив
// Замінює все на світі, но використовувати з розумом

// const { times } = require("lodash");

// const { object } = require("prop-types");

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {  //  acc це як акумулятор(це як тотал куди все буде додаватиьс)
//                                                  //   якщо не задамо значення береться перше значення з масиву
//     return acc + number;
// }, 0) // тут задається значення acc

// console.log(total);

//  // або

// const totala = numbers.reduce((acc, number) => acc + number, 0);


// // Рахуєм загальну зарплату

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((acc, salary) => {
//     return acc + salary;
// }, 0)
// console.log(totalSalary) //300




// // Рахуєм загальну кількість годин

// const players = [
//     { id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'ajax', timePlayed: 150, points: 71, online: false },
// ];

// const totalTimePlayed = players.reduce(
//     (totalTime, player) => totalTime + player.timePlayed, 0);
// console.log(totalTimePlayed)




// // Рахуєм корзіну товаров

// const cart = [
//     { label: 'Apples', price: 100, quantity: 2 },
//     { label: 'Bananas', price: 120, quantity: 3 },
//     { label: 'Lemon', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((total, item) => {
//     return total + item.price * item.quantity;
// }, 0)
// console.log(totalAmount) //840

// // з деструктуризацією

// const totalAmount = cart.reduce(
//     (total, { price, quantity }) => total + price * quantity,
//     0,
// );
// console.log(totalAmount) //840




// // Збираєм всі тегі з тітлів

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
//     { id: '005', likes: 3, tags: ['js', 'nodejs', 'css'] },
// ];

// // const allTags = tweets.reduce(() => { }, []);

// const allTags = tweets.reduce((tags, tweet) => {
//     tags.push(...tweet.tags);
//     return tags;
// }, []);
// console.log(allTags);

// //запис по новому і кращий

// const allTagsa = tweets.reduce((tags, tweet) => {

//     return [...tags, ...tweet.tags];
// }, []);
// console.log(allTags);




// // ведем статистику тегів

// const tagsStats = allTags.reduce((acc, tag) => {
    
//     if (acc[tag]) {
//         acc[tag] += 1;
//         return acc;
//     }
    
//     acc[tag] = 1;
   
//     return acc;
// }, {});

// // //запис по новому і кращий

// const tagsStats1 = allTags1.reduce((acc, tag) => {

//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };

// }, {});
// console.log(tagsStats1)



// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acuu, players) => acuu + players, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime) //2692



