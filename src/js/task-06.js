const formInput = document.querySelector('#validation-input')

formInput.addEventListener('blur', () => {
  if (formInput.textLength === Number(formInput.dataset.length)) {
    formInput.classList.add('valid')
    formInput.classList.remove('invalid')
  } else {
    formInput.classList.add('invalid')
    formInput.classList.remove('valid')
  }
})
