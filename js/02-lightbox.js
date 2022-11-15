import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const imgLists = galleryItems
  .map(
    (image) =>
      `<li><a  href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}"/></a></li>`
  )
  .join(" ");
gallery.insertAdjacentHTML("afterbegin", imgLists);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});