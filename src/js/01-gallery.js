import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imageMarkup = createImageList(galleryItems);
gallery.insertAdjacentHTML('beforeend', imageMarkup);
gallery.addEventListener('click', onClickImg);

function createImageList(e) {
    return e.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `
    })
        .join('');
}

function onClickImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
}

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

