import { onOpenModal } from './on-close-open-modal.js';

const imgLightBox = document.querySelector('.lightbox__image');

export function onGalerryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const elem = evt.target;
  const srcElem = elem.dataset.source;
  onOpenModal();
    imgLightBox.src = srcElem;
    console.log("клік на картинці");
}