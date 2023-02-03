const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function getIngredient(ingredients) {
  let ingredientName = [];
  for (let i = 0; i < ingredients.length; i +=1) {
    ingredientName = ingredients[i]
  }
  return ingredientName
}

const firstItemEl = document.createElement('li')
console.log(firstItemEl)
firstItemEl.textContent = ingredients[0]
firstItemEl.classList.add('item')

const secondItemEl = document.createElement('li')
console.log(secondItemEl)
secondItemEl.textContent = ingredients[1]
secondItemEl.classList.add('item')

const thirdItemEl = document.createElement('li')
console.log(thirdItemEl)
thirdItemEl.textContent = ingredients[2]
thirdItemEl.classList.add('item')

const forthItemEl = document.createElement('li')
console.log(forthItemEl)
forthItemEl.textContent = ingredients[3]
forthItemEl.classList.add('item')

const fifthItemEl = document.createElement('li')
console.log(fifthItemEl)
fifthItemEl.textContent = ingredients[4]
fifthItemEl.classList.add('item')

const sixthItemEl = document.createElement('li')
console.log(sixthItemEl)
sixthItemEl.textContent = ingredients[5]
sixthItemEl.classList.add('item')

const ingredientsEl = document.querySelector('#ingredients')
ingredientsEl.append(firstItemEl, secondItemEl, thirdItemEl, forthItemEl, fifthItemEl, sixthItemEl)



// АБО ВАРІАНТ ЧЕРЕЗ insertAdjacentHTML

// const ingredientsEl = document.querySelector('#ingredients')
// console.log(ingredientsEl)

// const markupIngredients = ingredients.map((ingredient) => `<li class='item'>${ingredient}</li>`).join(' ')
// console.log(markupIngredients)

// ingredientsEl.insertAdjacentHTML('beforeend', markupIngredients)