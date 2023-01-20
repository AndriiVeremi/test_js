// Операція spread (распиление)
// Array.prototype.concat

// // const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);  // зшиває два масиви
// // const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]]; // розпилює масиви
// const numbers = [0, 5, 10, ...[1, 2, 3], 4, 5]; // ... розпилює масив [1, 2, 3] // результат [0, 5, 10, 1, 2, 3, 4, 5]


// // Пошук самого малого числа і самого виликого

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));


// // розпиленя сложних типів ()

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];



// // Розпилення обєктів
// // Object.prototype.assign() і spread

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const c = Object.assign({}, a, b);       // зшиває(розпиляє обєкт а і b в пустий обєкт ) два обєкта в один
// // console.log(c);  // {x: 0, y: 2, z: 3}

// // новіший кращий запис

// const c = {
//     ...a,
//     ...b,
// };