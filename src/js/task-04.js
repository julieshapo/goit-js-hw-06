const valueEl = document.querySelector('#value');
const btnDecrementEl = document.querySelector('[data-action="decrement"]')
const btnIncrementEl = document.querySelector('[data-action="increment"]')

let counterValue = 0;
btnDecrementEl.addEventListener('click',() => {
    valueEl.textContent =  counterValue -= 1;
})

btnIncrementEl.addEventListener('click', () => {
    valueEl.textContent = counterValue += 1;
})


