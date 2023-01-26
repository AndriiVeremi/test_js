// // стрілочні функції

// const add = function (a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// };

// // стрілочна функція

// const add1 = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// };

// add(5, 10, 15);

// // якщо параметр один то можна не ставити ()

// const add2 = a => {
//     console.log(a);
//     return a ;
// };

// add(5);

// // якщо параметр взагалі не має то повинні бути пусті --> ()

// const add3 = () => {
    
// };

// //---------------------------------------


// const add4 = (a, b, c) => {   // явний возврат
//     return a + b + c;
// };

// // якщо тільки рreturn (одна операція) можна скоротити запис

// const add5 = (a, b, c) => a + b + c; // не явний возврат


// // якщо з стрілочної функції хочеш вернути Обєкт {} то його потрібно
// // обернути в вираженіє ()   ---->   ({ });


// //----------------------------------

// const callback2 = function (values) {
//     return values <= 4;
// }
//  // те саме тільки стрілочна функція
 
// const callback2a = (values) => values <= 4;






// //-----------------------------------

// const callback1 = function (values) {
//     return values >= 3;
// }
// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// // те саме тільки стрілочна функція

// const r1 = filter([1, 2, 3, 4, 5], values => values >= 3);
// console.log(r1);



// fruits => fruits.quantity >= 120
// //-----------------------------------

// const getFruitsWithQuantity = function (fruits) {
//     return fruits.quantity >= 120;
// }

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

// // те саме тільки стрілочна функція

// const r3a = filter(fruits, fruits => fruits.quantity >= 120);
// console.log(r3a);







const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["adventure", "history"],
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        genres: ["fiction"],
    },
    {
        title: "Redder Than Blood",
        author: "Tanith Lee",
        genres: ["horror", "mysticism"],
    },
];
// Change code below this line

const genres = books.flatMap(books => books.genres);






const students = [
    { name: "Манго", courses: ["математика", "фізика"] },
    { name: "Полі", courses: ["інформатика", "математика"] },
    { name: "Ківі", courses: ["фізика", "біологія"] },
];

students.map(student => student.courses);
// [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

students.flatMap(student => student.courses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];





const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(numbers => numbers % 2 === 0); 
const oddNumbers = numbers.filter(numbers => numbers % 2 !== 0);


students.flatMap(student =>const allGenres = books.flatMap(books => books.genres);
    const uniqueGenres = allGenres.filter(.indexOf(books) => books === books);  




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
const uniqueGenres = allGenres.filter(
    (books) => books.indexOf(books) === books);  

const uniqueCourses = allCourses.filter(
    (course, index, array) => array.indexOf(course) === index
);