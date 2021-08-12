// - Выбираем елементы блока создания и очистки коллекции
const renderBtn = document.querySelector('[data-action="render"]')
const destroyBtn = document.querySelector('[data-action="destroy"]')
const controlsBlock = document.querySelector('#controls input')
const collectionСontainer = document.querySelector('#boxes')

// - Создаём функцию `createBoxes(amount)`, которая принимает 1 параметр `amount` - число.
// Функция создает столько `div`, сколько указано в `amount` и добавляет их в `div#boxes`
// Каждый созданный div:
// - Имеет случайный rgb цвет фона
// - Размеры самого первого div - 30px на 30px
// - Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
let counter = 30

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div')
    box.style.margin = '5px'
    box.style.backgroundColor = `rgb(
      ${Math.round(Math.random() * 255)}, 
      ${Math.round(Math.random() * 255)}, 
      ${Math.round(Math.random() * 255)})`
    box.style.width = `${counter}px`
    box.style.height = `${counter}px`
    counter += 10

    collectionСontainer.appendChild(box)
  }
}

renderBtn.addEventListener('click', () => createBoxes(controlsBlock.valueAsNumber))

// - Создаём функцию `destroyBoxes()`, которая очищает `div#boxes`
const destroyBoxes = () => {
  const boxes = collectionСontainer.querySelectorAll('#boxes div')

  collectionСontainer.innerHTML = ''
  controlsBlock.value = ''
  counter = 30
}

destroyBtn.addEventListener('click', destroyBoxes)
