export const capitalizeString = word => {
  const capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

  return capitalizedWord;
};

export const filterFoodByType = (type, foodArray) => {
  const filteredArray = foodArray.filter(food => {
    return food.foodType === type;
  });

  return filteredArray;
};

export const generateFoodHTML = foodArray => {
  const HTML = foodArray.map(food => {
    const name = capitalizeString(food.name);
    return `<div class="${food.foodType}"><p>${food.img}</p><p>${name}</p></div>`;
  });

  return HTML.join("");
};
