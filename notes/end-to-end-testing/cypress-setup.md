# Cypress Setup

Experimenting and exploring end to end testing with [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress).

## How to add cypress to a project

If you do not have a `package.json` create one with the following command in the terminal.

```bash
npm init -y
```

Create `.gitignore` file with `node_modules` inside of it.

Add cypress to your Project.

```bash
npm install --save-dev cypress
```

In the package.json add a new script to the object.

```
"scripts": {
   "cypress": "cypress open",
  }
```

- cypress is going to open a browser with a dashboard where you can choose to run any `.spec.js` files.

## Links

- [Cypress](https://docs.cypress.io/api/commands/get).
