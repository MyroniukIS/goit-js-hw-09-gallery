// REFS
const galleryUl = document.querySelector('.js-gallery');
const overlay = document.querySelector('.lightbox__overlay');


import { elementsGallery } from './js/create-elements.js';

galleryUl.addEventListener('click', onGalerryContainerClick);
galleryUl.insertAdjacentHTML('beforeend', elementsGallery);

import { onCloseModal } from './js/on-close-open-modal.js';
import { onEscKeyPress } from './js/on-esc-key-press.js';
import { onGalerryContainerClick } from './js/gallery-click.js';
import { onOpenModal } from './js/on-close-open-modal.js';

overlay.addEventListener('click', onOverlayClick)
import { onOverlayClick } from './js/overlay.js';
