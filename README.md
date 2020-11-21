# Webpack Development Environment

## Getting Started  
- [Quick Start]()
- [What is Webpack?](#what-is-webpack)  
- [Project Requirements](#project-requirements)
  - [Node.js](#node.js)
  - [Express.js](#express.js)
- [Webpack Configuration]()
  - [Entry]()
  - [Output]()
  - [Loaders]()
  - [Plugins]()
  - [Mode]()
  - [NPM Scripts]()
  - [Directory Structure]()

___

## What is Webpack?
[Webpack](https://webpack.js.org/) is an open-source JavaScript module bundler for modern web applications. With webpack, it easy to organize and manage all our front-end assets, including JavaScript, HTML, CSS, and image assets, and neatly transform them into production-ready code for use in a browser. 

___

## Project Requirements

### Node.js
 Node is a JavaScript runtime environment allowing us to run JavaScript code directly in a computer process itself.

We will require [Node.js](https://nodejs.org/en/) and the node package manager (*npm*) to install webpack and additional packages. For many of the loaders and plugins we install we will use the following command:

```sh
npm install webpack webpack-cli --save-dev
```

The ``--save-dev`` flag will add the package under `devDependencies` in your `package.json`. These packages are used for local testing and development in your node package. The `package.json` acts as a project manifest for the node package containing project metadata, configurations, and dependencies.

> Tip: To easily initialize your project's `package.json` file run `npm init`

For the most part, we will be using npm to install webpack and our various loaders, plugins, frameworks, toolkits, and etcetera for development. 

### Express.js
To serve the static assets that we build from webpack we will spin up a simple [Express](https://expressjs.com/) server. Because our web application will be running the server in the background, we install it with the `--save` flag to save it under `dependencies`.

`./src/client/app.js`
```js
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```
Notice in our project directory structure we separate `client` and `server` code appropriately in `./src`. This is important when specifying our webpack entry point later on. Additionally, we serve `index.html` from the `./dist` folder, which is where webpack outputs our production build.

___
