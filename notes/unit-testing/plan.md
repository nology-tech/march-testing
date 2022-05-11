# Jest

run `npm run test:jest` to get jest to start watching the js folder.

## Basic test syntax

Jest gives you the `it()` function it takes to parameters.

1. Is a string, this describes what you are testing.
2. Is a function, this is your test .

Inside the second parameter the function hest gives you access to the `expect()` function. You can use this to assert whether something passes of fails the test.

```js
it("should....", () => {
  expect(5 + 5).toBe(10);
});
```

To run Jest in watch mode run.

```bash
npm test
```

_See package.json for the test script_

## Common matchers

A Matcher follow's the `expect()` function. The jest docs has a list of different matchers. We will look at two common ones.

### toBe()

To test for equality with **primitive** values you can use `expect().toBe()`.

```js
// TO BE
it("should capitalize a lowercase string", () => {
  // ARRANGE
  const testString = "hello";
  // ACT
  const result = capitalizeString(testString);
  // ASSERT
  expect(result).toBe("Hello");
});
```

Go onto the Challenge 1, solution below.

```js
it("should capitalize a uppercase string", () => {
  // ARRANGE
  const testString = "HELLO";
  // ACT
  const result = capitalizeString(testString);
  // ASSERT
  expect(result).toBe("Hello");
});
```

### toEqual()

To test for equality with an **Object** or an **Array** values you can use `expect().toEqual()`. This goes through indexes / keys to check they are equal.

```js
it("should filter by junk foodType", () => {
  // ARRANGE
  const testData = [
    { img: "🍟", name: "fries", foodType: "junk" },
    { img: "🌭", name: "hot dog", foodType: "junk" },
    { img: "🥗", name: "salad", foodType: "healthy" },
    { img: "🥙", name: "pita", foodType: "healthy" },
  ];
  const testResult = [
    { img: "🍟", name: "fries", foodType: "junk" },
    { img: "🌭", name: "hot dog", foodType: "junk" },
  ];
  // ACT
  const result = filterFoodByType("junk", testData);
  // ASSERT
  expect(result).toEqual(testResult);
});
```

Go onto the Challenge 2, solution below.

```js
it("should filter by junk foodType", () => {
  // ARRANGE
  const testData = [
    { img: "🍟", name: "fries", foodType: "junk" },
    { img: "🌭", name: "hot dog", foodType: "junk" },
    { img: "🥗", name: "salad", foodType: "healthy" },
    { img: "🥙", name: "pita", foodType: "healthy" },
  ];
  const testResult = [
    { img: "🥗", name: "salad", foodType: "healthy" },
    { img: "🥙", name: "pita", foodType: "healthy" },
  ];
  // ACT
  const result = filterFoodByType("healthy", testData);
  // ASSERT
  expect(result).toEqual(testResult);
});
```

## Positive & Negative tests

**Positive test case** is when everything goes as expected.

e.g. The function is given the correct parameters / inputs.

**Negative test case** is the when it does go to plan.

e.g. The function is given the wrong parameters / inputs.

The tests we have written so far only deal with positive outcomes.

```js
it("should handle incorrect inputs", () => {
  // ARRANGE + ACT + ASSERT
  expect(capitalizeString()).toBe("");
  expect(capitalizeString(2)).toBe("");
  expect(capitalizeString(true)).toBe("");
  expect(capitalizeString([])).toBe("");
  expect(capitalizeString({})).toBe("");
  expect(capitalizeString(null)).toBe("");
});
```

```js
export const capitalizeString = word => {
  if (typeof word !== "string") {
    return "";
  }

  const capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

  return capitalizedWord;
};
```
