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

  // console.log(heading);
})

console.log(addIngredients);

