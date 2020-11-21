# Webpack Development Environment

## Getting Started  
- [Quick Start]()
- [What is Webpack?](#what-is-webpack)  
- [Included in this Project](#included-in-this-project)  
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
  - [Additional Topics]()
    - [Testing]()
    - [Environment Variables]()

## What is Webpack?
[Webpack](https://webpack.js.org/) is an open-source JavaScript module bundler for modern web applications. With webpack, it easy to organize and manage all our front-end assets, including JavaScript, HTML, CSS, and image assets, and neatly transform them into production-ready code for use in a browser. 

___

## Included in this Project:
This project includes an example of a development environment managed with webpack that is ready to use out of the box. It is configured with the following:

- **Defines a Custom Entry Point**
- **Development and Production Modes**
- **NPM Scripts**
- **Loaders**
  - [babel-loader](https://webpack.js.org/loaders/babel-loader/) ‒ Loads ES2015+ code and transpiles to ES5 using Babel
  - [sass-loader](https://webpack.js.org/loaders/sass-loader/) ‒  Loads and transpiles SASS/SCSS files to CSS

  For additional loaders: [webpack loaders](https://webpack.js.org/loaders/)
- **Plugins**: 
  - [eslint-webpack-plugin](https://webpack.js.org/plugins/eslint-webpack-plugin/) ‒  Identify and report on patterns in JavaScript to maintain code quality
  - [terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin/) ‒ Terser to optimize and minify the JavaScript in your project
  - [css-minimizer-webpack-plugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) ‒ cssnano to optimize and minify your CSS
  - [workbox-webpack-plugin](https://webpack.js.org/guides/progressive-web-application/#adding-workbox) ‒ Add offline support to web apps though service workers
  - [clean-webpack-plugin](https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder) ‒ Clean up the `./dist` folder before each build
  - [html-webpack-plugin]() ‒ Simplifies creation of HTML files to serve your webpack bundles

  For additional plugins: [webpack plugins](https://webpack.js.org/plugins/)

- Additional packages:
  - [webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server) ‒ Development web server with live reloading
  - [express]() ‒ Back-end web application framework for node to serve the webpack output

This project serves as a place to quickly get started and can be easily be modified for your project's needs. To get the most out of webpack, it is recommended you understand what's going on under the hood, but if you want to hit the ground running with this configuration head over to the [Quick Start]() section.
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
