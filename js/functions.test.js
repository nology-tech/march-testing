import { capitalizeString, filterFoodByType, generateFoodHTML } from "./functions";

it("", () => {
  // ARRANGE

  // ACT

  // ASSERT
  expect(true).toBe(true);
});

// CHALLENGE 1 - CAN YOU TEST capitalizeString() TO SEE IF IT CAN CAPITALIZE A UPPERCASE STRING

it("should capitalize an uppercase string", () => {
  // ARRANGE

  // ACT

  // ASSERT
  expect(true).toBe(true); // UPDATE THIS PLEASE
});

it("should filter by junk foodType", () => {
  // ARRANGE
  const testData = [
    { img: "🍟", name: "fries", foodType: "junk", rating: 1 },
    { img: "🌭", name: "hot dog", foodType: "junk", rating: 14 },
    { img: "🥗", name: "salad", foodType: "healthy", rating: 2 },
    { img: "🥙", name: "pita", foodType: "healthy", rating: 0 },
  ];
  const testResult = [
    { img: "🍟", name: "fries", foodType: "junk", rating: 1 },
    { img: "🌭", name: "hot dog", foodType: "junk", rating: 14 },
  ];
  // ACT

  // ASSERT
  expect(true).toBe(true);
});

// CHALLENGE 2 - CAN YOU TEST filterFoodByType() TO SEE IF IT CAN FILTER BY HEALTHY FOOD TYPE

it("should filter by healthy foodType", () => {
  // ARRANGE
  const testData = [
    { img: "🍟", name: "fries", foodType: "junk", rating: 1 },
    { img: "🌭", name: "hot dog", foodType: "junk", rating: 14 },
    { img: "🥗", name: "salad", foodType: "healthy", rating: 2 },
    { img: "🥙", name: "pita", foodType: "healthy", rating: 0 },
  ];
  const testResult = [];
  // ACT

  // ASSERT
  expect(true).toEqual(true); // UPDATE THIS PLEASE
});
