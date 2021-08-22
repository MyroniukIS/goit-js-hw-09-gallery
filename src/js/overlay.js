import { onCloseModal } from './on-close-open-modal.js';

export function onOverlayClick(event) {
    if (event.currentTarget === event.target) {
        console.log('Клік на бекдроп!!!!');
        onCloseModal();
    }
}