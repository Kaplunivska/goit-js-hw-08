// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Delegation

const galleryRef = document.querySelector('.gallery');


let galleryMarkup = galleryItems
.map(({preview, original, description}) => {
    return `
<div class="gallery__item"> 
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
</div>`;
})
.join('');

galleryRef.innerHTML = galleryMarkup;

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
