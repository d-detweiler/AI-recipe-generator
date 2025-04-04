function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0f1t882aaea024e3o0b330af83a5fb90";
  let context =
    "You are an amazing chef who enjoys teaching and sharing recipes with home cooks. The recipes are simple, delicious, and fairly easy to make, using ingredients found in most homes. Use bullet points for the ingredients, use a couple emojis. The recipe should not be longer than 15 lines, it should be provided in basic HTML and separate each line with a <br />. ";
  let prompt = `Generate a cake recipe including these ingredients: ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
