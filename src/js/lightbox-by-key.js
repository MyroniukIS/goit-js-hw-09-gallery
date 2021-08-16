import { toCloseLightbox } from './to-close-lightbox'
import { toSlideLeft, toSlideRight } from './slide'

//- Управление модального окна по нажатию клавиш
export function lightboxByKey(event) {
  event.code === 'Escape' ? toCloseLightbox() : null
  event.code === 'ArrowLeft' ? toSlideLeft() : null
  event.code === 'ArrowRight' ? toSlideRight() : null
}
