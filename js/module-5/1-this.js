// // Функція це обєкт -> СИЛОЧНИЙ ТИП ----------------------------------

// console.log('[] === []', [] === []); // не рівні
// console.log('{} === {}', {} === {}); // не рівні

// console.log('function(){}', function () { } === function () { }) // не рівні (але якщо вних лежать сики на один і той самий обєкт то тоді будуть рівні)

// const fnA = function () {
//     console.log('hello');
// };
// const fnB = fnA;

// // (функія це складний обєк!!! і тут ми порівнюєм дві функції (fnA і fnB) в яких лежать силкі на один і той самий обєкт function () { } тому рівні)
// console.log(fnB === fnA) // рівні



// // Контекст (this) ----------------------------------
// // - Де і як була обявлена функція НЕ МАЄ НІ ЯКОГО ВПЛИВУ на контекст
// // - Контекст опририділяється В МОМЕНТ ВИКЛИКУ ФУНКЦІЇ, якщо він не привязаний явно



// // --------------------
// // // коли функція це мотд обєкта

// // const user = {
// //     tag: 'Mango',
// //     showTag() {
// //         console.log('showTag -> this', this);
// //     },
// // };

// // user.showTag();



// // --------------------
// // // виклик бз контекста
// // // - В строгому режимі = undefined
// // // - Не встрогому режимі = window

// // const foo = function () {
// //     console.log('foo -> this', this);
// // };

// // foo();



// // --------------------
// // // як метод обєкту, но обявленна як зовнішня функція
// // // - В контексті обєкта

// // const showTag = function () {
// //     console.log('showTag -> this', this);
// //     console.log('showTag -> this.tag', this.tag)
// // }
// // // showTag(); буде ундефайнт

// // const user = {
// //     tag: 'Mango',
// // };

// // user.showUserTag = showTag;
// // console.log(user);

// // user.showUserTag();


// // --------------------
// // // без контексту но як обявленна як метод

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag(); //ok

// const outerShowTag = user.showTag;

// user.showUserTag(); // ok
// showUserTag(); // undefide



// // --------------------
// // // Контекст в callback - функціях

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);
//     action();
// };

// // invokeAction(user.showTag);

// --------------тести-------------------

