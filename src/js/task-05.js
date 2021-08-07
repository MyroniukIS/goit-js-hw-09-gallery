const formInput = document.querySelector('#name-input')
const greetingName = document.querySelector('#name-output')

formInput.addEventListener('input', event => (greetingName.textContent = event.currentTarget.value))
formInput.addEventListener('change', event =>
  event.currentTarget.value === '' ? (greetingName.textContent = 'незнакомец') : event.currentTarget.value,
)
