
```js
it("should show all food cards", () => {
  // ARRANGE
  cy.visit("http://127.0.0.1:5500/index.html");
  // ACT + ASSERT
  cy.get("div").should("have.length", 9);
});
```
```js
it("should show junk food cards", () => {
  // ARRANGE
  cy.visit("http://127.0.0.1:5500/index.html");

  // ACT
  cy.get("select").select("junk");
  cy.get("form").submit();

  // ASSERT
  cy.get(".junk").should("have.length", 4);
});

it("should show healthy food cards", () => {
  // ARRANGE
  cy.visit("http://127.0.0.1:5500/index.html");
  
  // ACT
  cy.get("select").select("healthy");
  cy.get("form").submit();

  // ASSERT
  cy.get(".healthy").should("have.length", 5);
});
```

// CHALLENGE CHANGE IT TO JUNK AND THEN BACK TO ALL
// CHECK THE CORRECT AMOUNT OF CARDS ARE SHOWN
