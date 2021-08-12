//- Создание и рендер разметки по массиву данных `galleryItems` из `app.js` и предоставленному шаблону.
import galleryItems from './app.js'

const gallery = document.querySelector('.js-gallery')

gallery.insertAdjacentHTML(
  'beforeend',
  galleryItems
    .map(
      image =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${image.original}">
            <img
              class="gallery__image"
              src="${image.preview}"
              data-source="${image.original}"
              alt="${image.description}"
            />
          </a>`,
    )
    .join(''),
)

//- Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого изображения.
gallery.addEventListener('click', handleNavClick)

function handleNavClick(event) {
  event.preventDefault()

  const target = event.target

  if (target.nodeName !== 'IMG') return

  getLargerImageLink(target)
  toOpenLightbox()
}

function getLargerImageLink(targetImage) {
  const currentLargeImage = document.querySelector('.lightbox__image')

  currentLargeImage.setAttribute('src', targetImage.dataset.source)
  currentLargeImage.setAttribute('alt', targetImage.alt)
}

//- Открытие модального окна по клику на элементе галереи.
function toOpenLightbox() {
  const lightbox = document.querySelector('.js-lightbox')

  lightbox.classList.add('is-open')
}

//- Подмена значения атрибута `src` элемента `img.lightbox__image`.
//- Закрытие модального окна по клику на кнопку `button[data-action="close-lightbox"]`.
//- Очистка значения атрибута `src` элемента `img.lightbox__image`. Это необходимо для того, чтобы при следующем открытии
//  модального окна, пока грузится изображение, мы не видели предыдущее.
