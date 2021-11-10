function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const body = document.querySelector("body");

colorBtn.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  colorName.textContent = currentColor;
  body.style.backgroundColor = currentColor;
})