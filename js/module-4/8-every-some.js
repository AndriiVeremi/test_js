// const players = [
//     { id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'ajax', timePlayed: 150, points: 71, online: false },
// ];

// // Array.prototype.every() всі елементи збігаються
// // Поелементно перебирає оригінальний масив
// // Вертає true якщо всі елементи масива задовільняють умову


// const isAllOnline = players.every(player => player.online);
// console.log(isAllOnline);

// //---------------------------------------------------------------


// // Array.prototype.some()  хоть один елемент збігається
// // Поелементно перебирає оригінальний масив
// // Вертає true якщо хоть би один елемент масиву задовільняють умову

// const isAnyOnline = players.some(player => player.online);
// console.log(isAnyOnline);


const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["adventure", "history"],
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        genres: ["fiction", "mysticism"],
    },
    {
        title: "Redder Than Blood",
        author: "Tanith Lee",
        genres: ["horror", "mysticism", "adventure"],
    },
];
// Change code below this line
const allGenres = books.flatMap(books => books.genres);
const uniqueGenres = books.filter(book => book.genres === book.genres);

console.log(allGenres)
//---------------
console.log(uniqueGenres)