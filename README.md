# Gif App ![Vite](./src/assets/images/vite.svg) ![React](./src/assets/images/react.svg)

## Description

React application to search for images or gifs by making requests to the [GIPHY API](https://developers.giphy.com/)

This is a small application that has as a learning objective to use React with custom Hooks to solve a specific need.

## Requirements

It is necessary to have installed:

A source code editor such as [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/) or any other editor we like.

[![Node.js](https://img.shields.io/badge/node-v18.14.1-green)](https://nodejs.org/es) [![yarn](https://img.shields.io/badge/yarn-v1.22.19-blue)](https://yarnpkg.com/)

## Scaffolding Vite project

> Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

With NPM:

```bash
npm create vite@latest
```

With Yarn:

```bash
yarn create vite
```

With PNPM:

```bash
pnpm create vite
```

More information about Vite is available at the following link [Vite](https://vitejs.dev/)

## Installation

In the project directory run the following command

```bash
yarn install
```

## Launch the application

In the project directory run the following command

```bash
yarn dev
```

## Testing Introduction

### What is testing?

Software testing is a process of executing an application to validate and verify that it meets the business and technical requirements and works as expected.

Testing is a process, not a single activity. So the process of designing tests early at the beginning of the development and the product's lifecycle can help to prevent deficiencies in the code or product design.

Tests prove that your code works in every situation in which it’s designed to work. Even when you are improving the design or creating new features, you can change your current code without breaking what already works.

## Testing with Jest and React Testing Library

### Running Tests

To run tests, run the following command in the project directory

```bash
yarn test
```

### Jest

It is the most popular and recommended testing tool for React. It is created by Facebook. Jest is not just a library, it is a testing framework. It means that it comes with an assertion library, a test runner and support for things. As it has been designed specifically for testing React applications, it can also be used in other JavaScript frameworks.

Install Jest using your favorite package manager:

```bash
npm install --save-dev jest
```

```bash
yarn add --dev jest
```

More information about Jest is available at the following link [Jest](https://jestjs.io/)

### React Testing Library

React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

> Projects created with Create React App have out of the box support for React Testing Library.

Install React Testing Library using your favorite package manager:

```bash
npm install --save-dev @testing-library/react
```

```bash
yarn add --dev @testing-library/react
```

More information about Testing Library is available at the following link [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## Installation and configuration of Jest + React Testing Library

### React + Vite projects

1. Installations

```bash
npm install --save-dev jest babel-jest @babel/core @babel/preset-env @babel/preset-react
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react

npm install --save-dev @testing-library/react jest-environment-jsdom
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Optional. If Fetch API is used in the project

```bash
npm install --save-dev whatwg-fetch
```

```bash
yarn add --dev whatwg-fetch
```

3. Update the scripts of the ```package.json```

```bash
"scripts": {
    ...
    "test": "jest --watchAll"
}
```

4. Create the babel configuration ```babel.config.js```

```js
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Optional, but eventually necessary, create Jest config and setup

 __jest.config.js__

```js
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__

```js
// In case you need to implement Fetch API
import 'whatwg-fetch'; // npm install --save-dev whatwg-fetch or yarn add whatwg-fetch
```

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
