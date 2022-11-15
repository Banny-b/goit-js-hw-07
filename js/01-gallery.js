import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const body = document.querySelector("body");
console.log(body);
const gallery = document.querySelector(".gallery");

const imgLists = galleryItems.map(({ preview, original, description }) =>`<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image create" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`).join(" ");
gallery.insertAdjacentHTML("afterbegin", imgLists);

// * Решение задачи:

// Создание модального окна и вложеных елементов
const modal = document.createElement("div");
modal.classList.add("modal");
body.appendChild(modal);

const placeholder = document.createElement("div");
placeholder.classList.add("basicLightbox__placeholder");
placeholder.setAttribute("role", "dialog");
modal.appendChild(placeholder);

const img = document.createElement("img");
img.classList.add("img-modal");

const images = document.querySelectorAll(".gallery__image");

images.forEach(image => {
    const imageOpen = (event) => {
// Отмена действий браузера по  умолчанию 
        event.preventDefault();

// Добавление классов basicLightbox + src фото
        if (event.target.dataset.source === image.dataset.source) {
            modal.classList.add("basicLightbox", "basicLightbox--img", "basicLightbox--visible");
            img.src = image.dataset.source;
            while (placeholder.firstChild) {
                placeholder.removeChild(placeholder.firstChild);
            }
            placeholder.appendChild(img);
        }
    }
    console.log(image.dataset.source);
    gallery.addEventListener("click", imageOpen);
});

//  Закрытие по клику мышки
    console.log(img);

const imageClose = (event) => {
    if (event.target.nodeName  === "img") return;
    modal.classList.remove("basicLightbox", "basicLightbox--img", "basicLightbox--visible");
    console.log(event.currentTarget);
};
modal.addEventListener("click", imageClose);

//  Закрытие кнопкой "Esc"
const pressKeyLightBox = (event) => {
    if (modal.classList.contains("basicLightbox")){
        if (event.code === "Escape") {
            modal.classList.remove("basicLightbox", "basicLightbox--img", "basicLightbox--visible");
        }
        console.log(`соблюдение первого if`)
    }
}
body.addEventListener("keyup", pressKeyLightBox);