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
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        };
        const newProduct = {
            ...product,
            quantity: 1,
        };
        this.items.push(newProduct);
    },
    
    remove(productName) {
       
        const { items } = this;

        for (let i = 0; i <= items.length; i += 1) {
            const { name } = items[i];
           
            if (productName === name) {
                console.log(productName);

                items.splice(i, 1);
            }
        }
    },
    
    clear() { 
        this.items = [];
    },
    
    countTotalPrice() {
        const { items } = this;
        let total = 0;

        for (const { price, quantity } of items) {
            total += price * quantity;
        }

        return total; 
    },
    
    increaseQuantity(productName) { },
    
    decreaseQuantity(productName) { },
};
console.log(cart.getItems());

//-------------
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lime', price: 60 });
cart.add({ name: 'redbul', price: 60 });
cart.add({ name: 'light', price: 110 });
cart.add({ name: 'redbul', price: 60 });
cart.add({ name: 'light', price: 110 });
console.trable(cart.getItems());

//-------------
cart.remove('apple');
console.trable(cart.getItems());

//-------------
cart.clear();
console.log(cart.getItems());

//-------------
cart.countTotalPrice();
console.log(cart.countTotalPrice());


