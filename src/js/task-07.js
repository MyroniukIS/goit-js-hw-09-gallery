const rangeInput = document.querySelector('#font-size-control')
const fontText = document.querySelector('#text')
fontText.style.fontSize = '50px'

rangeInput.addEventListener('input', () => (fontText.style.fontSize = `${rangeInput.valueAsNumber}px`))
