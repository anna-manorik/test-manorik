function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const num = document.querySelector("#controls input");
const boxesConteiner = document.getElementById("boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  createBtn.addEventListener("click", (event) => {

    for (let i=0; i<amount.value; i+=1){
      boxesConteiner.insertAdjacentHTML(`beforeend`, `<div></div>`);
    }

    const changeBoxWidth = boxesConteiner.children;
    let width = 20;
    let height = 20;

    for(let i=0; i<changeBoxWidth.length; i+=1){
      width += 10;
      height += 10
      changeBoxWidth[i].classList.add("squere");
      changeBoxWidth[i].style.width = width + "px";
      changeBoxWidth[i].style.height = height + "px";
      changeBoxWidth[i].style.backgroundColor = getRandomHexColor();
    }

  });
}


function destroyBoxes() {
    destroyBtn.addEventListener("click", (event) => {
    const allDivs = document.querySelectorAll(".squere");

    allDivs.forEach(div => {
      div.remove();
    })

    num.value = "";

  })
}


createBoxes(num);
destroyBoxes();