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

const firstItemRef = document.createElement('li')
console.log(firstItemRef)
firstItemRef.textContent = ingredients[0]
firstItemRef.classList.add('item')

const secondItemRef = document.createElement('li')
console.log(secondItemRef)
secondItemRef.textContent = ingredients[1]
secondItemRef.classList.add('item')

const thirdItemRef = document.createElement('li')
console.log(thirdItemRef)
thirdItemRef.textContent = ingredients[2]
thirdItemRef.classList.add('item')

const forthItemRef = document.createElement('li')
console.log(forthItemRef)
forthItemRef.textContent = ingredients[3]
forthItemRef.classList.add('item')

const fifthItemRef = document.createElement('li')
console.log(fifthItemRef)
fifthItemRef.textContent = ingredients[4]
fifthItemRef.classList.add('item')

const sixthItemRef = document.createElement('li')
console.log(sixthItemRef)
sixthItemRef.textContent = ingredients[5]
sixthItemRef.classList.add('item')

const ingredientsRef = document.querySelector('#ingredients')
ingredientsRef.append(firstItemRef, secondItemRef, thirdItemRef, forthItemRef, fifthItemRef, sixthItemRef)