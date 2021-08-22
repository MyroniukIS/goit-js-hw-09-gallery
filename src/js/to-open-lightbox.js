// import { lightboxCloseBtn, toCloseLightbox, lightboxCloseOverlay } from './to-close-lightbox'
import { lightboxByKey } from './lightbox-by-key'

//- Открытие модального окна по клику на элементе галереи.
export const lightbox = document.querySelector('.js-lightbox')

export function toOpenLightbox() {
  lightbox.classList.add('is-open')

  // lightboxCloseBtn.addEventListener('click', toCloseLightbox)
  // lightboxCloseOverlay.addEventListener('click', toCloseLightbox)
  // window.addEventListener('keydown', lightboxByKey)
}
