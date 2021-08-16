import { toOpenLightbox } from './to-open-lightbox'
import { getLargerImageLink } from './current-large-image'

//- Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого изображения.
export function handleNavClick(event) {
  event.preventDefault()

  const target = event.target

  if (target.nodeName !== 'IMG') return

  toOpenLightbox()
  getLargerImageLink(target)
}
