const categories = document.querySelector('#categories')

console.log(`'В списке ${categories.children.length} категории.'`)

// -----------------------------------------------------------------

const categoriesItem = document.querySelectorAll('.item')

categoriesItem.forEach(item =>
  console.log(
    `- Категория: ${item.firstElementChild.textContent}\n- Количество элементов: ${item.lastElementChild.children.length}`,
  ),
)
