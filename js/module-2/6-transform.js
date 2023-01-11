// Напиши скрипт який обєднує всі елементи масиву в один рядок
// елементів може бути випадкова кількість
// елементи в рядку повинні бути розділені комою

const friends = ['Mango', 'Poly', 'kiwi', 'Ajax'];

// // for ----------------------
let string = '';

for (const friend of friends) {
    string += friend;
 };
console.log(string);



// // join() ----------------------








let link = 'https://my-site.com'

link += !link.endsWith('/') && link.includes('my-site') ? '/' : '';


