// Array.prototype.flat(depth)
//     - розглажує масив до вказаної глубини
//     - По замовчуванні глубина 1


// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(1));                          // [1, 2, 4, [5], 6, [7, 8, [9]]]
// console.log(array.flat(2));                          // [1, 2, 4, 5, 6, 7, 8, [9]]
// console.log(array.flat(3));                          // [1, 2, 4, 5, 6, 7, 8, 9]


//-------------------------------------------------------------------------------------

// Array.prototype.flatMap(callback)
// - комбінація map + flat


// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
//     { id: '005', likes: 3, tags: ['js', 'nodejs', 'css'] },
// ];

const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// за допомогою (.map) і (.flat)
const tags = tweets.map(t => t.tags).flat(); 

// за допомогою (.flatMap)
const tags = tweets.flatMap(t => t.tags); 







const stats = tags.reduce((acc, tag) => {
    return {
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    };
}, {});