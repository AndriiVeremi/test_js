// console.log(user?.location?.city);  // ( ?. ) це типу показує що це не обовязкова властивість
                                    // типу може і не бути 



//console.dir(_);  // виклик всіх методів lodesh

// isEmpty() // перевіряє чи пустий обєкт

console.log(_isEmpty({})); 
console.log(_isEmpty({ a: 1} ));


// get() - шукає глибо в масиві
// - user && user.location && obj.location.city
// - user?. location?.city

const user = {
    name: 'mango',
    location: {
        coords: [1, 2],
        city: 'Lviv',
    },
};

console.log(_.get(user, 'location.city')); //lviv


// union() зєднує масиви в один і тільки унікальні властивості
console.log(_.union([1, 2, 3], [3, 4, 5])) // [1, 2, 3, 4, 5]



// range()
console.log(_.range(1, 6)); // [1, 2, 3, 4, 5]


//sortBy()
const users = [
    { user: 'id-1', age: 30 },
    { user: 'id-1', age: 22 },
    { user: 'id-1', age: 40 },
];

console.log(_.sortBy(users, user => user.age));


// sum()  
console.log(_.sum([1, 2, 3, 5, 6])) // 17

//sumBy()
const players = [
    { id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'ajax', timePlayed: 150, points: 71, online: false },
];
console.log(_.sumBy(players, player => player.timePlayed)); //1240