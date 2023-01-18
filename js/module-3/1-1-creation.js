// Обєкти

const playlist = {
    name: "asd",
    rating: 5,
    tracks: ['aaa1', 'ddd2', 'sss2'],
    tracksCount: 3,
};

playlist.asd = 5; // так додається до обекта нова властивість перезапише або створить нове




const propertyName = 'tracks'

console.log(playlist.tracks); // доступ до свойства обєкту через крапку
console.log(playlist['tracks']); // доступ до свойства рядком
console.log(playlist[propertyName]) // якщо параметри лежать в змінній

// Коротка запис властивостей

const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
    // username: username, // якщо імя та значення збігаються то можна використовувати короткий запис
    // email: email,
    username,
    email,
};


// Вичесляемие свойства

/* <input name="color" value="tomato"; */
const intupName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    [intupName]: inputValue, // бере ключ зі зіміної [змінна]
}


// силочні типи {} === {}  false  те саме як і в масивах


// МАСАВИ ТА ФУНКЦІЇ це теж ОБЄКТИ