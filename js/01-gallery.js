import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(image => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
            />
        </a>
    </div>`
}).join("");

gallery.insertAdjacentHTML("beforeend", markup);


gallery.addEventListener("click", event => {
    event.preventDefault();

    if(event.target.nodeName !== "IMG"){
        return;
    }

    const url = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${url}" width="800" height="600">`, {
        onClose: (instance) => {
            window.removeEventListener("keydown", event => {
                if(event.code === "Escape"){
                    instance.close();
                }
            });
        }
    });

    instance.show();


    window.addEventListener("keydown", event => {
        if(event.code === "Escape"){
            instance.close();
        }
    });

})
