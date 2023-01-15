// Робим  slug в URL з назви статті

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);


// через функцію


// const slugify = function (string) {
//     const normalizedTitle = string.toLowerCase();
//     const words = normalizedTitle.split(' ');
//     const slug = words.join('-');
//     return slug;
// };

// оптимізований код


// const slugify = function (string) {
    
//     return string.toLowerCase().split(' ').join('-');
// };


// console.log(slugify('Lkjsd Kjds Dk Sdkkl'));
// console.log(slugify('Mjjs Wjds Dk Pdkkl'));