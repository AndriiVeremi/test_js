// Array.prototype.sort(callBack(currentEL, nextEL) {})
// Сортує і ЗМІНЮЄ оригінальний масив
// По замовчуванні
// - сортує по взростанню
// - переводить елемент до рядка і сортує по Unicode


// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log(numbers);

// //--------------------------------------

// const letters = ['b', 'B', 'a', 'A'];
// numbers.sort();
// console.log(letters);





// // compareFunction - функція порівняння (callback)

// numbers.sort((curEL, nextEL) => {  // порівнює curEL з nextEL ( віднімає curEL від nextEL
//     return nextEL - curEL;         // якщо виходить мінус то ставить першим якщо плюс то другим)
// });

// console.log(numbers);




// // Як зробити копія масиву щоб не сортувати оригінальний
// // - Array.prototype.slice()
// // - операція ...spread
// const copy = [...numbers]; // копія масиву

// const descSortedNumbers = [...numbers].sort((a, b) => b - a); //  сортує копію масива по Спаданню
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);  // сортує копію масива по Зростанню




// // Кастомне сортування сложних типів

// const players = [
//     { id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'ajax', timePlayed: 150, points: 71, online: false },
// ];

// // сортування по часу гри

// по спаданню

// const sortedByBestPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
// );
// console.table(sortedByBestPlayers);

// // по взростанню

// const sortedByWorstPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
// );
// console.table(sortedByWorstPlayers);



// // сортування по імю

// const byName = [...players].sort((a, b) => {
//     return a.name[0] - b.name[0];
// });
// console.table(byName);




// const byName = [...players].sort((a, b) => {
//     const result = a.name[0] - b.name[0];

//     if (result) {
//         return -1;
//     }
//     if (!result) {
//         return 1;
//     }
// });
// console.table(byName);







// ------------------------------------------
