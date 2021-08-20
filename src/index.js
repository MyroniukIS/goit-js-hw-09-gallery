//- Создание и рендер разметки по массиву данных `galleryItems` из `db.js` и предоставленному шаблону.
import { gallery } from './js/rendering-markup'

//- Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого изображения.
import { handleNavClick } from './js/to-delegate'

gallery.addEventListener('click', handleNavClick)
