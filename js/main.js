// DEFAULT IMPORT -> ONE THING
import foodStock from "./foodStock.js";

// NAMED IMPORT -> MULTIPLES
import { generateFoodHTML, filterFoodByType } from "./functions.js";

const form = document.getElementById("food-form");
const sortBy = document.getElementById("sort-food");
const foodContainer = document.getElementById("food-container");

foodContainer.innerHTML = generateFoodHTML(foodStock);

form.addEventListener("submit", event => {
  // STOPS FORM REFRESH
  event.preventDefault();

  // GETS THE VALUE OF SELECT EITHER ALL OR JUNK OR HEALTHY
  const value = sortBy.value;

  let foodStockToDisplay = foodStock;

  // IF NOT ALL IT IS EITHER JUNK OR HEALTHY
  if (value !== "all") {
    // SET THE
    foodStockToDisplay = filterFoodByType(value, foodStock);
  }

  foodContainer.innerHTML = generateFoodHTML(foodStockToDisplay);
});


