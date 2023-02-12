import products from './data/products.js'; 
console.log(products)




// створюємо карточку продукта
// - В классі продукта може бути product-on-sale  product-not-available

// const product = {
//     name: 'Сервоприводи',
//     description: 'loremzc dghd jhs ajhkla  aidujfias uiasuif sd  asodujfoa aoiadf',
//     price: 2000,
//     available: true,
//     onSale: true,
// }

// {
// //    <article class="product" >
// //     <h2 class="product__name">Назва:</h2>
// //     <p class="product__descr">Опис:</p>
// //     <p class="product__price">Ціна:</p>
// //    </article > 
// }

const productEl = document.createElement('article');
productEl.classList.add('product');

const nameEl = document.createElement('h2');
nameEl.textContent = `Назва: ${product.name}`;
nameEl.classList.add('product__name');


const descrEl = document.createElement('p');
descrEl.textContent = `Опис: ${product.description}`;
descrEl.classList.add('product__descr');


const priceEl = document.createElement('p');
priceEl.textContent = `Ціна: ${product.price}`;
priceEl.classList.add('product__price');


productEl.append(nameEl, descrEl, priceEl)

console.log(productEl)



// Пишем функцію для створення карточки продукта --------------

{
    //    <article class="product" >
    //     <h2 class="product__name">Назва:</h2>
    //     <p class="product__descr">Опис:</p>
    //     <p class="product__price">Ціна:</p>
    //    </article > 
}


const productsContainerEl = document.querySelector('.js-products')


const makeProductCard = ({ name, description, price }) => {

    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const nameEl = document.createElement('h2');
    nameEl.textContent = name;
    nameEl.classList.add('product__name');


    const descrEl = document.createElement('p');
    descrEl.textContent = description;
    descrEl.classList.add('product__descr');


    const priceEl = document.createElement('p');
    priceEl.textContent = price;
    priceEl.classList.add('product__price');


    productEl.append(nameEl, descrEl, priceEl);

    return productEl;
};

console.log(makeProductCard(products[1]));
 

// Тепер зробимо багато карточок продукта --------------


const elements = products.map(makeProductCard);
console.log(elements)

productsContainerEl.append(...elements);