const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', onInputBlur); 

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {

       inputEl.classList.add('valid')

      if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid')
        }
    } else {
      if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid')
        }
        
        inputEl.classList.add('invalid')
    }
}