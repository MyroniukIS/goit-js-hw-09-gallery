const formInput = document.querySelector('#name-input')
const greetingName = document.querySelector('#name-output')

formInput.addEventListener('input', event => (greetingName.textContent = event.currentTarget.value))
formInput.addEventListener('blur', event =>
  event.currentTarget.value === '' ? (greetingName.textContent = 'незнакомец') : null,
)
