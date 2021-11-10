const input = document.getElementById("validation-input");
const dataLength = document.querySelector('input[data-length="6"]');

input.addEventListener("blur", () => {
    
    if(input.value.length === Number(dataLength.dataset.length)){
        input.classList.remove("invalid");
        input.classList.add("valid");
    }else{
        input.classList.remove("valid");
        input.classList.add("invalid");
    };

});