function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

let amount = 0;
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  amount = event.currentTarget.value;
}

function createBoxes(amount) {

  const boxesArray = []; 

  for (let i = 0; i <= amount; i +=1) {
    const box = document.createElement('div')
    box.style.width = `${30 + 10 * i}px`
    box.style.height = `${20 + 10 * i}px`
    box.style.backgroundColor = getRandomHexColor();

    boxesArray.push(box);
  }

  return boxesArray;
}

refs.createBtn.addEventListener('click', onButtonCreateClick);

function onButtonCreateClick(event) {
  let newBoxes = createBoxes(refs.input.value);
  boxes.append(...newBoxes);
}

refs.destroyBtn.addEventListener('click', onButtonDestroyClick);

function onButtonDestroyClick(event) {
  const destroyBoxes = refs.boxes.innerHTML = ""; 
}