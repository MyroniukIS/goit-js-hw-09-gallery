import { galleryItems } from './app'

//- Создание и рендер разметки по массиву данных `galleryItems` из `app.js` и предоставленному шаблону.
export const galleryUl = document.querySelector('.js-gallery');

const elementsGallery = createGalleryElements(galleryItems);

galleryUl.insertAdjacentHTML('beforeend', elementsGallery)

function createGalleryElements(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
    .join('');
  
};   
  
  
// galleryUl.addEventListener('click', onGalerryContainerClick);
