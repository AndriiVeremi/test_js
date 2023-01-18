// робота з колекціяма  (масивом обєкта)

const friends = [
    { name: 'aaa', online: false },
    { name: 'sss', online: true },
    { name: 'ddd', online: true },
    { name: 'ccc', online: false },
];

// for (const friend of friends) {
//     friend.newprop = 555;  // при переборі масива обєктів в кожен обєк додалася нова властивість
//                            //  бо в for...of получаємо не обєкт а силку на обєкт тому  можемо міняти
// }

// console.table(friends);


// // Шукає друга по ім`ю

// const findFriendByName = function (allFriends, name) {

//     for (const friend of allFriends) { // переберає масив по елементно і получаєм до кожного елемента доступ
//         console.log(friend);
//         console.log(friend.name);

//         if (friend.name === friendName) {
//             return 'asd';
//         }
//     }
//     return 'noy';
//  };

// console.log(findFriendByName(friends, 'Poly'));
// // console.log(findFriendByName(friends, 'Chelsy'));


// // получити всі імена друзів

// const getAllName = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         names.push(friend.name);
//     }
//     return names;
// };

// console.log(getAllName(friends));

// // Получаєм всіх друзів які онлайн

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];

//     for (const friend of friends) {

//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }
//     return onlineFriends;
// };

// // Получаєм всіх друзів які офлайн

// const getOfflineFriends = function (allFriends) {
//     const offlineFriends = [];

//     for (const friend of friends) {

//         if (!friend.online) {
//             offlineFriends.push(friend);
//         }
//     }
//     return offlineFriends;
// };


// // Получаєм всіх друзів які офлайн і офлайн

const getFriendsByOnlineStatus = function (allFriends) {
    const friendsStats = {
        online: [],
        offline: []
    }

    for (const friend of friends) {
        if (friend.online) {
            friendsStats.online.push(friend);
            continue;
        }

        friendsStats.offline.push(friend);
    }
    return friendsStats;
};