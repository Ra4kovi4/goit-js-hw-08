// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const galleryItemList = makeGalleryList(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemList);

function makeGalleryList(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
