// Деструктуризація обєкта
// Значення за замовчуванням
// Ім'я змінной відрізняється від імені властивостей




const playlist = {
    name: 'My playlistss',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
};

// const {} = playlist;  якщо з ліва від ( = ) стоять скопкі ( {} = ) то це операція десктруізація обєкта

// const { rating, tracks, name, author = 'user' } = playlist; // розпаковує в локальні змінні обєкт

// const {
//     rating,
//     tracks,
//     trackCount: numbersOfTracks = 0, //змінна
// } = playlist;






//  Глубока десктруктизауія ------------------------

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     avatars: 'asd',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     }
// };

// const { name, tag, avatars } = profile;
// const { followers, views, likes } = stats; // деструктуризуємо окремо

// const { name, tag, avatars, stats: { name, tag, avatars }, } = profile; // глубока деструктизація


// //  Десктруктизауія масивів  ------------------------

// const rgb = [255, 100, 80];

// const [a, b, c] = rgb;  // Десктруктизауія масива
// console.log(a, b, c);




// // знайти користувача з найвищим рейтенгом

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// // const ratings = Object.values(authors);
// // console.log(Math.max(...ratings));

// // або

// const entries = Object.entries(authors); // вертає масив масивів

// // for (const entry of entries) {
// //     // const name = entry[0];
// //     // const rating = entry[1];

// //     // або

// //     const [name, rating] = entry // деструктизація масиву типу [[0], [1]]

// //     console.log(name, rating);
// // }

//  // або

// for (const [name, rating] of entries) { // відразу деструктую масив


//     console.log(name, rating);
// }




// //  Операція rest ( збір )  ------------------------

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     avatars: 'asd',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     }
// };

// const { name, tag, location, ...restProps } = profile;
// console.log(name, tag, location);
// console.log(restProps);



// //  Паттерн ( Обєкт настройок )  ------------------------

// const fn = function (params) { };

// fn(10, 5, true, [], {}, 6); // пагано читається краже використовувати патерн

// fn({          // це ї є патерн параметрів
//     age: 10,
//     friends: 5,
//     isOnline: [],
//     games: {},
//     rating: 6,
// });



// const showProfileInfo = function (userProfile) {
//     console.log(userProfile);
//     const {
//         name,
//         tag,
//         location,
//         avatar,
//         stats: { followers, views, likes },
//     } = userProfile;
// };

// // або

// const showProfileInfo = function ({ name, tag, location, avatar, stats: { followers, views, likes }, }) {
//     console.log(userProfile);
// };

// // або

// const showProfileInfo = function ({ name, tag, location, avatar, ...restPrors }) {
//     console.log(restPrors);
// };


// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     avatars: 'asd',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     }
// };


// showProfileInfo(profile);




// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line

// const {
//     today: {
//         low: highToday,
//         high: lowToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: highTomorrow,
//         high: lowTomorrow,
//         icon: tomorrowIcon,
//     },
// } = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;



// function addOverNum(num, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > num) {
//             total += arg;
//         }
//     }

//     return total
//     // Change code above this line
// }


// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);



// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         // Change code below this line

//         const potionIndex = this.potions.indexOf(potionName);
//         this.potions.splice(potionIndex, 1);
//     },        // Change code above this line

// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")












// третя авто перевірка 41 питання


const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],


    // Change code below this line
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
        if (this.potions.includes(newPotion)) {
            return `Error! Potion ${newPotion} is already in your inventory!`;
        }

        this.potions.push(newPotion);
    },
    removePotion(potionName) {
        const potionIndex = this.potions.indexOf(potionName);

        if (potionIndex === -1) {
            return `Potion ${potionName} is not in inventory!`;
        }

        this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
        const potionIndex = this.potions.indexOf(oldName);

        if (potionIndex === -1) {
            return `Potion ${oldName} is not in inventory!`;
        }

        this.potions.splice(potionIndex, 1, newName);
    },


    // Change code above this line
};


0


getPotions() {
    return this.potions;
},
addPotion(newPotion) {
    for (const item of this.potions) {
        if (item.name === newPotion.name) {
            return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
    }
    const newProduct = {
        ...newPotion,
    };

    this.potions.push(newPotion);
},
removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
        const potion = this.potions[i];
        if (potionName === potion.name) {
            this.potions.splice(i, 1);
        }
    }
},
updatePotionName(oldName, newName) {
    let resalt = `Potion ${oldName} is not in inventory`;
    for (let i = 0; i < this.potions.length; i += 1) {
        const potion = this.potions[i];

        if (oldName === potion.name) {
            potion.name = newName;
            resalt = `Found ${oldName} change to ${newName} `;
        }
    }
    return console.log(resalt);
},

