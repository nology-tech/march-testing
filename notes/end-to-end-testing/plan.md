# Cypress

run `npm run test:cypress` to get cypress to start up.

## Basic syntax

Similar to Jest you are able to use the `it()` function it takes to parameters.

1. Is a string, this describes what you are testing.
2. Is a function, this is your test .

Your are able to access the `cy` global object to interact with your page.

It has different methods you can use to arrange, act and assert your tests.

- [get](https://docs.cypress.io/api/commands/get#Syntax)
- [should](https://docs.cypress.io/api/commands/should#Syntax)

```js
it("should show all food cards", () => {
  // ARRANGE
  cy.visit("http://127.0.0.1:5500/index.html");
  // ACT + ASSERT
  cy.get("div").should("have.length", 9);
});
```

## Simulate Interactions

You are able to use `cy` to interact with your page. To mimic the different paths your user may take.

```js
it("should only show junk food cards", () => {
  // ARRANGE
  cy.visit("http://127.0.0.1:5500/index.html");

  // ACT
  cy.get("select").select("junk");
  cy.get("form").submit();

  // ASSERT
  cy.get(".junk").should("have.length", 4);

  cy.get(".healthy").should("not.exist");
});

it("should only show healthy food cards", () => {
  // ARRANGE
  cy.visit("http://127.0.0.1:5500/index.html");

  // ACT
  cy.get("select").select("healthy");
  cy.get("form").submit();

  // ASSERT
  cy.get(".healthy").should("have.length", 5);

  cy.get(".junk").should("not.exist");
});
```

Go onto the Challenge.

```js
it("should show all food cards after showing healthy cards", () => {
  cy.visit("http://127.0.0.1:5500/index.html");

  cy.get("select").select("healthy");
  cy.get("form").submit();

  cy.get("select").select("all");
  cy.get("form").submit();

  cy.get("div").should("have.length", 9);
});

it("should show all food cards after showing junk cards", () => {
  cy.visit("http://127.0.0.1:5500/index.html");

  cy.get("select").select("junk");
  cy.get("form").submit();

  cy.get("select").select("all");
  cy.get("form").submit();

  cy.get("div").should("have.length", 9);
});
```
