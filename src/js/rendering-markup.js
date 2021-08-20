import { galleryItems } from './db'

//- Создание и рендер разметки по массиву данных `galleryItems` из `db.js` и предоставленному шаблону.
export const gallery = document.querySelector('.js-gallery')

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
          </a>
        </li>`,
    )
    .join(''),
)
