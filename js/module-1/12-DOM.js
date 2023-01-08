// const btnAdd = document.querySelector('button[data-add]'); // робим змінну і добавляєм силку на кнопку за допомогою .querySelector і підставляєм тег button[data-add].
// const resets = document.querySelector('button[data-reset]');
// const valueInput = document.querySelector('input[data-value]'); //тут дивимся що водиться в інтупі input[data-value]
// const outputEl = document.querySelector('.js-output');  //тут вибираю абзац за допомогою CSS селектора .js-output

// let total = 0;

// btnAdd.addEventListener('click', function () {   // вішаю слушителя собитий за допомогою .addEventListener і вказую тип собитія 'click' і функцію яка виконається після кліка.
//     console.log('aaaaa');  // код який виконується після кліка.
    
//     const value = Number(valueInput.value); // після кліка тут переводить що було ведено в інтупі рядок в число і записує в змінну
    
//     console.log(value);
    
//     total += value; // по кліку додає все що було ведено в інтупі і зберігає в змінній total

//     outputEl.textContent = total;
       
//     valueInput.value = '';  // чистим поле ввода після кліка
// })

// resets.addEventListener('click', function () {
//     total = 0;
//     outputEl.textContent = total;
// })



function checkForSpam(message) {
    let result;
    // Change code below this line

    result = message.toLowerCase();
    console.log(result);
    result = result.includes("spam") || result.includes("sale");
    console.log(result);
    // Change code above this line
    return result;
}

checkForSpam("Get rid of sPaM emails. Our book in on sale!")

// result = message.toLowerCase().includes('spam', 'sale');