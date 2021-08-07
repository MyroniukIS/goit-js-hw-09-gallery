// - Выбираем елементы счетчика
const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const valueElem = document.querySelector('#value')

// - Создаём переменную `counterValue`, в которой будет хранится текущее значение счетчика
let counterValue = 0

// - Создаём функции `increment` и `decrement` для увеличения и уменьшения значения счетчика
const increment = () => {
  counterValue += 1
}

const decrement = () => {
  counterValue -= 1
}

// - Добавляем слушатели кликов на кнопки, вызовы функций и обновление интерфейса
incrementBtn.addEventListener('click', function () {
  increment()
  valueElem.textContent = counterValue
})

decrementBtn.addEventListener('click', function () {
  decrement()
  valueElem.textContent = counterValue
})
