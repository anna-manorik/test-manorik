const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    const allInputs = {
        email: email.value,
        password: password.value,
    }

    if(allInputs.email === "" || allInputs.password === ""){
        alert("Inputs can't be empty!");
    } else {
        console.log(allInputs);
    }

    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.value = "";
    })

})