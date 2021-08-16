import { lightbox } from './to-open-lightbox'
import { lightboxByKey } from './lightbox-by-key'
import { resetLargerImageLink } from './reset-larger-image-link'

//- Закрытие модального окна по клику на кнопку `button[data-action="close-lightbox"]`.
export const lightboxCloseBtn = document.querySelector('[data-action="close-lightbox"]')

//- Закрытие модального окна по клику на `div.lightbox__overlay`.
export const lightboxCloseOverlay = document.querySelector('.lightbox__overlay')

export function toCloseLightbox() {
  lightbox.classList.remove('is-open')
  resetLargerImageLink()

  lightboxCloseBtn.removeEventListener('click', toCloseLightbox)
  lightboxCloseOverlay.removeEventListener('click', toCloseLightbox)
  window.removeEventListener('keydown', lightboxByKey)
}
