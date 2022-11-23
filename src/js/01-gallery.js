// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Delegation

const galleryRef = document.querySelector('div.gallery');

// const modal = basicLightbox.create(`
// <div class="modal">
// </div>
// `);

// galleryRef.addEventListener('click', galleryClickHandler);

let galleryMarkup = galleryItems
.map((item) => {
    return `
<div class="gallery__item"> 
    <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
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
