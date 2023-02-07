function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  colorName: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
}

refs.button.addEventListener('click', onBodyChangeColor)

function onBodyChangeColor(event) {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorName.textContent = refs.body.style.backgroundColor;
}

