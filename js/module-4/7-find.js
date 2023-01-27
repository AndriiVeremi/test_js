//  Array.prototype.find() використовується для пошуку унікальний елемент з колекціїї
//     - по елементно перебирає оригинальний масив
//     - Вертає перший елемент задовільняючий умову або undefined

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number > 10);
console.log(number); // 15


// -----------------

const players = [
    { id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'ajax', timePlayed: 150, points: 71, online: false },
];

// пошук гравця по id

const playerIdToFind = 'player-3'

const playerWithId = players.find(player => player.id === playerIdToFind);
console.log(playerWithId);

// те саме тільки з десктруктизацією

const playerWithId = players.find(({ id }) => id === playerIdToFind);

// Шукаєм гравця за Імям

const playerNameToFind = 'Poly';

const playerWithName = players.find(player => player.name === playerNameToFind);
