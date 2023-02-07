const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients')

const arrayElItems = [];

ingredients.forEach((ingredient) => {
  const elItem = document.createElement("li");
  elItem.textContent = ingredient;
  elItem.classList.add("item");
  arrayElItems.push(elItem);
});

ingredientsEl.append(...arrayElItems);






// АБО ВАРІАНТ ЧЕРЕЗ шаблонну строку та insertAdjacentHTML

// const ingredientsEl = document.querySelector('#ingredients')
// console.log(ingredientsEl)

// const markupIngredients = ingredients.map((ingredient) => `<li class='item'>${ingredient}</li>`).join(' ')
// console.log(markupIngredients)

// ingredientsEl.insertAdjacentHTML('beforeend', markupIngredients)