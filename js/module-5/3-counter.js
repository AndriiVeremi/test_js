
const counter = {
    value: 0,
    increment(value) {
        this.value += value;
    },
    decrement(value) {
        this.value -= value;
    },
};

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

decrementBtn.addEventListener('click', function () { 
    counter.decrement();
    valueEl.textContent = counter.value;
})
incrementBtn.addEventListener('click', function () { 
    counter.increment();
    valueEl.textContent = counter.value;
})