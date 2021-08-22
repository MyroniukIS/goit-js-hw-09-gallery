import { toOpenLightbox } from './to-open-lightbox'

const imgLightBox = document.querySelector('.lightbox__image')

// //- Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого изображения.
export function onGalerryContainerClick(evt) {
  evt.preventDefault()
  
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const elem = evt.target;
  const srcElem = elem.dataset.source;
  
  imgLightBox.src = srcElem;
  console.log(evt.target)
  console.log(srcElem)
  toOpenLightbox()
  
}
