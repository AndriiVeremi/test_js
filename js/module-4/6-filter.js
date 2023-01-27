// Array.prototype.filter()
// По елементно перебирає масив
// Вертає новий масивДобавляє в масив елементи які задовільняє або пустий масив
// умову колбек функції
//     - якщо колбек вернув True елемент добавляється і вертається масив
//     - якщо колбек вернув False елемент не добавляється в повернений масив

const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(number => {
    // return number > 15;
    return number < 10 || number > 20;
});
console.log(filteredNumbers);


//--------------------------------------

const players = [
    { id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'ajax', timePlayed: 150, points: 71, online: false },
];

// // Получаєм масив всі онлайн гравців

// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);

// // або

// const onlinePlayers = players.filter(player => !player.online);
// console.table(onlinePlayers);

// Отримаємо список хардкорних гравців з часом гри більше ніж 250годин

const hardcorePlayers = players.filter(player => player.timePlayed > 250);
console.table(hardcorePlayers);
