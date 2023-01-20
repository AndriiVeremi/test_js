// Працюємо з кілкість товарів в кошику
//
// getItem();
// add(product);
// remove(productName)
// clear()
// countTotalPrice()
// increaseQuantity(productName)
// decreaseQuantity(productName)

const cart = {
    items: [],
    getItems() { 
        return this.items;
    },
    add(product) { 
        this.items.push(product);
    },
    remove(productName) {
        for (let i = 0; i <= this.items.length; i += 1) {
            if (productName === item.name) {
                console.log(productName);
            }
        }
    },
    clear() { },
    countTotalPrice() { },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};
console.log(cart.getItems());

//-------------
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lime', price: 60 });
cart.add({ name: 'redbul', price: 60 });
cart.add({ name: 'light', price: 110 });
console.trable(cart.getItems());

//-------------
cart.remove('apple');
console.trable(cart.getItems());


