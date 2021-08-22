const lightBox = document.querySelector('.js-lightbox');
import { onEscKeyPress } from './on-esc-key-press.js';


export function onCloseModal() {
    
  lightBox.classList.remove('is-open');

  window.removeEventListener('keydown', onEscKeyPress);
};

export function onOpenModal(evt) {
  lightBox.classList.add('is-open');
  const btnClose = document.querySelector('.lightbox__button');

  btnClose.addEventListener('click', onCloseModal);
  window.addEventListener('keydown', onEscKeyPress);
  
}