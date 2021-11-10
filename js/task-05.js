const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
    
  output.textContent = event.currentTarget.value;

});

// console.log(input);

// if(textInput.textContent === ""){

//     output.textContent = "Anonymous";

// }

