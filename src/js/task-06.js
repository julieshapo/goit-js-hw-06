const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('input', onInputChange);
inputEl.addEventListener('blur', onInputBlur);

function onInputChange(event){
console.log(event.currentTarget.value.length)
}

function onInputBlur(event){
event.currentTarget.value.length === Number(inputEl.dataset.length) ? 
inputEl.classList.add('valid') : inputEl.classList.add('invalid');
}
