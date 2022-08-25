
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const galleryList = createGalleryCardsItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryList);


 function createGalleryCardsItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class"gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__img"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
.join("");
 }


const addGallary = createGalleryCardsItem (galleryItems);

const galleryFoto = document.querySelector('.gallery');

galleryFoto.insertAdjacentHTML('beforeend', addGallary);

const box = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 200,
});

