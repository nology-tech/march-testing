# Jest Setup

Experimenting and exploring unit testing with [Jest](https://jestjs.io/).

## How to add jest to a project

Add jest & babel to your Project.

```bash
npm install --save-dev jest
npm install --save-dev jest babel-jest @babel/core @babel/preset-env
```

Create a babel.config.js file, and add the below.

```
// babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

In the package.json add a script to the package. 

```
"scripts": {
    "test": "jest js --watch",
  }
```
- test is going to watch the js folder, when you save it will run any `.test.js` files.

## Links

- [Get Started with Jest](https://jestjs.io/docs/getting-started)

- [Matchers](https://jestjs.io/docs/using-matchers)
