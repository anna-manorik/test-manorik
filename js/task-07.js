const range = document.getElementById("font-size-control");
const text = document.getElementById("text");

range.addEventListener("change", (event) => {
    text.setAttribute("style", `font-size: ${event.currentTarget.value}px`);
})




