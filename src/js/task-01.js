
const categoriesRef = document.querySelector('#categories')

console.log(`Number of categories: ${categoriesRef.children.length}`)

console.log(`${categoriesRef.firstChild.textContent}`)

console.log(`Category: ${categoriesRef.firstElementChild.firstElementChild.textContent}`)
console.log(`Elements: ${categoriesRef.firstElementChild.lastElementChild.children.length}`)

console.log(`${categoriesRef.firstChild.textContent}`)

console.log(`Category: ${categoriesRef.firstElementChild.nextElementSibling.firstElementChild.textContent}`)
console.log(`Elements: ${categoriesRef.firstElementChild.nextElementSibling.lastElementChild.children.length}`)

console.log(`${categoriesRef.firstChild.textContent}`)

console.log(`Category: ${categoriesRef.lastElementChild.firstElementChild.textContent}`)
console.log(`Elements: ${categoriesRef.lastElementChild.lastElementChild.children.length}`)


// АБО РОЗПИСАНИЙ ВАРІАНТ ЗІ ЗМІННИМИ


// const catFirstItemsRef = categoriesRef.querySelector('li')

// const firstCatNameRef = catFirstItemsRef.querySelector('h2')
// console.log(`Category: ${firstCatNameRef.textContent}`)

// const firstElNumRef = catFirstItemsRef.querySelectorAll('li')
// console.log(`Elements: ${firstElNumRef.length}`)


// const catSecondItemsRef = categoriesRef.querySelector('li')

// const secondCatNameRef = catSecondItemsRef.nextElementSibling.querySelector('h2')
// console.log(`Category: ${secondCatNameRef.textContent}`)

// const secondElNumRef = catSecondItemsRef.nextElementSibling.querySelectorAll('li')
// console.log(`Elements: ${secondElNumRef.length}`)






