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

    const setBoxStyles = boxesConteiner.children;
    let param = 20;

    for(let i=0; i<setBoxStyles.length; i+=1){
      param += 10;
      setBoxStyles[i].classList.add("squere");
      setBoxStyles[i].style.width = param + "px";
      setBoxStyles[i].style.height = param + "px";
      setBoxStyles[i].style.backgroundColor = getRandomHexColor();
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