// Робим  slug в URL з назви статті

const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase(); // перевили в нижній регістор
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' '); // розбили по слловах
// console.log(words);

// const slug = words.join('-'); // зшили назад але вже з пробілами
// console.log(slug);

// або

// const slug = title.toLowerCase().split(' ').join('-'); // тут декілька методів які ідуть один за одним і кожен з них працює на результаті попереднього метода.
// console.log(slug);


// function slugify(title) {
//     // Change code below this line

//     return title.toLowerCase().split(' ').join('-');
//     console.log(slug);
//     // Change code above this line
// }

// slugify("How to become a JUNIOR developer in TWO WEEKS")