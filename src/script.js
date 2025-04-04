function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "the recipe",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
