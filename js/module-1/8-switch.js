// switch () {  тело цикла  }

// // Напиши скрипт вибора ціни готелю по кількості зірочок
// // 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// // якщo в перемінній не має такого готелю виводить
// // "Такого готелю не має"

// const stars = 6;
// let price;

// if (stars === 1) {
//     price = 10;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого готелю не має');
// }

// console.log(price);

// // якщо нам потрібно одну річ порівняти на рівність з іншими
// // то краще використовувати інструкцію switch() {} але світ використовується тільки для РІВНОСТІ

// const stars = 4;
// let price;

// switch (stars) {
//     case 1:
//         price = 10;
//         break;  // потрібно ставити щоб коли знайшов співпадіння зупинився і не провіряв дальше.(тобто щоб знайшов і зупинився).
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого готелю не має');
// }
// console.log(price);









// // Напиши скрипт вибора готелю по кількості зірочок
// // 1,2 - 20$, 3,4 - 30$, 5 - 120$

// const stars = 4;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого готелю не має');
// }

// console.log(price);

// // використання інструкції switch() {}

// const stars = 4;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого готелю не має');
// }
// console.log(price);











// // Напиши скрипт вибора опції доставки
// // 1 - Відібрати в магазині, 2 - Курєр, 3 - Пошта
// // В змінну записується message залежно від опції доставки
// // - Ви зможете забрати товар після 12:00 в нашому магазині
// // - Пачка буде надіслана сьогодні
// // - Курєр сьогодні доставить пачку о 15:00
// // - З вами сконтактується менеджер

// const option = 2;
// let message = ' ';

// switch (option) {
//     case 1:
//         message = 'Ви зможете забрати товар після 12:00 в нашому магазині';
//         break;
//     case 2:
//         message = 'Пачка буде надіслана сьогодні';
//         break;
//     case 3:
//         message = 'Курєр сьогодні доставить пачку о 15:00';
//         break;
//     default:
//         message = 'З вами сконтактується менеджер';
// }
// console.log(message);










function getShippingCost(country) {
    let message;
    // Change code below this line

    switch (country) {
        
        case "China":
            message = "Shipping to China will cost 100 credits";
            break;
        case "Chile":
            message = "Shipping to Chile will cost 250 credits";
            break;
        case "Australia":
            message = "Shipping to Australia will cost 170 credits";
            break;
        case "Jamaica":
            message = "Shipping to Jamaica will cost 120 credits";
            break;
        default:
            message = "Sorry, there is no delivery to your country";
    }

    // Change code above this line
    return message;
}










function getSubscriptionPrice(type) {
    let price;
    // Change code below this line

    switch (type) {

        case "starter":
            price = 0;
            break;
        case "professional":
            price = 20;
            break;
        case "organization":
            price = 50;
            break;
    }

    // Change code above this line
    return price;
}
getSubscriptionPrice("professional");




function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line


    if (password === null) {
        message = "Canceled by user!";
    } else if (password === ADMIN_PASSWORD) {
        message = "Welcome!";
    } else {
        message = "Access denied, wrong password!";
    }

    // Change code above this line
    return message;
}


function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line


    switch (password) {
        case null:
            message = "Canceled by user!";
            break;
        case "jqueryismyjam":
            message = "Welcome!";
            break;
        default:
            message = "Access denied, wrong password!";
            break;
    }

    // Change code above this line
    return message;
}