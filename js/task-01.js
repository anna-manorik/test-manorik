const liCounter = document.querySelectorAll(".item").length;
console.log("Number of categories:", liCounter);



const categories = document.querySelectorAll(".item");
console.log("Category:", categories);


const categoriesInfo = categories.forEach(category => {
    console.log("Category:", category.querySelector("h2").textContent);
    console.log("Elements:", category.querySelectorAll("li").length);
})



