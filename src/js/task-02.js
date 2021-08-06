const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы']

const ingredientsList = document.querySelector('#ingredients')

// Пишем функцию для создания разметки списка ингридиентов
const makeIngredientsList = elements => {
  return elements.map(element => {
    const listItem = document.createElement('li')
    listItem.textContent = element

    return listItem
  })
}

const tegsArray = makeIngredientsList(ingredients)
ingredientsList.append(...tegsArray)
