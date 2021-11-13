const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addIngredients = document.getElementById("ingredients");

const newIngredients = ingredients.map(ingredient => {
  const heading = document.createElement("li");
  heading.textContent = ingredient;
  heading.classList.add("item");
  addIngredients.append(heading);
}).join("");

addIngredients.insertAdjacentHTML("beforeend", newIngredients);

// console.log(addIngredients);

