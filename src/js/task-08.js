
const formEl = document.querySelector('.login-form')
 
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formData = {
        mail,
        password
    }

    mail === '' || password === '' ?
        alert('Всі поля повинні бути заповнені') :
        console.log(formData)
    
    document.querySelector('.login-form').reset();
}




// ДОСТУП ЧЕРЕЗ КЛАС FORMDATA

// formEl.addEventListener('submit', onFormSubmit1);

// function onFormSubmit1(event) {
//     event.preventDefault();
//     const formData1 = new FormData(event.currentTarget);
    
//     console.log(formData1);

//     formData1.forEach((value, name) => {
//         console.log('значення name:', name)
//         console.log('значення value:', value)
              
//     })
// }
