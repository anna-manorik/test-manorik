import images from "./app.js";


const gallary = document.querySelector(".gallery");
const bigImg = document.querySelector(".lightbox__image");
const lightbox = document.querySelector(".lightbox");
const closeBtn = document.querySelector(`button[data-action="close-lightbox"]`);
const closeOverlay = document.querySelector(".lightbox__overlay");
let imagesArray;

const markup = images.map((image, index) => {
    return `<li class="gallery__item">
        <a
        class="gallery__link"
        href="${image.original}"
        >
        <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
            data-index="${index}"
        />
        </a>
    </li>`
}).join("");

gallary.insertAdjacentHTML("beforeend", markup);
imagesArray = document.querySelectorAll(".gallery__image");


gallary.addEventListener("click", event => {
    event.preventDefault();

    const url = event.target.dataset.source;
    const alt = event.target.getAttribute("alt");

    if(event.target.nodeName !== "IMG"){
        return;
    }

    lightbox.classList.add("is-open");

    bigImg.setAttribute("src", url);
    bigImg.setAttribute("alt", alt);

    window.addEventListener("keydown", keypress);
});


closeBtn.addEventListener("click", closeModal);
closeOverlay.addEventListener("click", closeModal);

function closeModal () {
    lightbox.classList.remove("is-open");

    bigImg.setAttribute("src", "");
    bigImg.setAttribute("alt", "");

    window.removeEventListener("keydown", keypress);
};

function moveRight() {

}



function moveLeft(event) {
    let indexCurrent = event.target.firstElementChild.dataset.index;
    // console.log(left);

    indexCurrent -= 1;

    const currImg = [...imagesArray].find((el) => el.dataset.index == indexCurrent);
    console.log(currImg);

}

function keypress(event) {
    if(event.code === "Escape"){
        closeModal();
    }

    if(event.code === "ArrowRight"){
        moveRight(event);
    }

    if(event.code === "ArrowLeft"){
        moveLeft(event);
    }
};


