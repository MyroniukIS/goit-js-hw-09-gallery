 import { toCloseLightbox } from './to-close-lightbox'


// //- Управление модального окна по нажатию клавиш
 export function lightboxByKey(event) {
   event.code === 'Escape' ? toCloseLightbox() : null
 
 }
