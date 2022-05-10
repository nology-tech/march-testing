# Jest

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

To test for equality with an **Object** or **Array** values you can use `expect().toEqual()`. This goes through indexes / keys to check they are equal.

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
