// Напиши скрипт який обєднує всі елементи масиву в один рядок
// елементів може бути випадкова кількість
// елементи в рядку повинні бути розділені комою

const friends = ['Mango', 'Poly', 'kiwi', 'Ajax'];

// // for ----------------------
// let string = '';

// for (const friend of friends) {
//     string += friend;
//  };
// console.log(string);


// // join() ----------------------

 

const string = friends.join('@');
console.log(string);





// let link = 'https://my-site.com'

// link += !link.endsWith('/') && link.includes('my-site') ? '/' : '';

























let total = 0;

function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line

    total
    console.log(message.split(" ") );
   
    for (let i = 0; i <= message.split(" "); i += 1) {
        console.log(message.length);
    }
    

    // Change code above this line
}
calculateEngravingPrice("Web-development is creative work", 20);

const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0; // зробити змінну total ДО ЦИКЛУ

for (i = 0; i < cart.length; i += 1) { // перебрати масив
    console.log(cart[i]);
    total += cart[i]  // кожен елемент приплюсувати до total
}
console.log('Total ', total);
