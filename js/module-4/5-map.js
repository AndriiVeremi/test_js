// // Array.prototype.map()
// // Поелементно перебирає масив
// // Не змінює оригінальний масивВертає новий масив
// // вертає новий масив такої самої довжини

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(function (number) {
//     console.log(number);

//     return number * 2;
// });

// // те саме тільки стрілочна

// const doubledNums = numbers.map(number => {
//     console.log(number);

//     return number * 2;
// });



const players = [
    { id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'ajax', timePlayed: 150, points: 71, online: false },
];

// // Получаєм масив імен всіх іграків

// const playerNames = players.map(player => {
//     return player.name;
// });
// console.log(playerNames);

// // або

// const res = players.map(player => {
//     return {
//         name: player.name,
//         online: player.online,
//     };
// });
// console.log(res);

// // або з деструктизацією ({})

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log(res);


// Збільшуємо кількість годин іграку по id

const playerIdToUpdate = 'player-3';

// const updatePlayers = players.map(player => {
//     if (playerIdToUpdate === player.id) {
//         console.log('Ми знайшли кого треба обновити');
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         };
//     };
//     return player; 
// });
// console.log(updatePlayers);

// або через тернарний оператор

// const updatePlayers = players.map(player =>
//     playerIdToUpdate === player.id
//         ? { ...player, timePlayed: player.timePlayed + 100, }
//         : player,
// );
// console.log(updatePlayers);

 

