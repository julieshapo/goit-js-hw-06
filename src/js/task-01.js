
let categoriesEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesEl.length} `);

categoriesEl.forEach(item => {
    
   console.log(`Category: ${item.firstElementChild.textContent}`);

   console.log(`Elements: ${item.lastElementChild.children.length}`);
})




// СУПЕР-РОЗПИСАНИЙ :)

// const categoriesEl = document.querySelector('#categories')

// console.log(`Number of categories: ${categoriesEl.children.length}`)

// console.log(`${categoriesEl.firstChild.textContent}`)

// console.log(`Category: ${categoriesEl.firstElementChild.firstElementChild.textContent}`)
// console.log(`Elements: ${categoriesEl.firstElementChild.lastElementChild.children.length}`)

// console.log(`${categoriesEl.firstChild.textContent}`)

// console.log(`Category: ${categoriesEl.firstElementChild.nextElementSibling.firstElementChild.textContent}`)
// console.log(`Elements: ${categoriesEl.firstElementChild.nextElementSibling.lastElementChild.children.length}`)

// console.log(`${categoriesEl.firstChild.textContent}`)

// console.log(`Category: ${categoriesEl.lastElementChild.firstElementChild.textContent}`)
// console.log(`Elements: ${categoriesEl.lastElementChild.lastElementChild.children.length}`)


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






