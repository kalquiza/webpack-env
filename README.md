# Webpack Development Environment

## What is Webpack?
[Webpack](https://webpack.js.org/) is an open-source JavaScript module bundler for modern web applications. With webpack, it easy to organize and manage all our front-end assets, including JavaScript, HTML, CSS, and image assets, and neatly transform them into production-ready code for use in a browser. 

___

## Included in this Webpack Configuration:
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
  - [express](https://expressjs.com/) ‒ Back-end web application framework for node to serve the webpack output


This project serves as a place to quickly get started and can be easily be modified for your project's needs. To get the most out of webpack, it is recommended you understand what's going on under the hood.

To use this configuration install [node](https://nodejs.dev/) on your system and using the node package manager (npm) run `npm install`.

The npm scripts for building, testing, and running the web application are defined in `package.json`.


For more on understanding webpack concepts refer to the official [webpack documentation](https://webpack.js.org/concepts/).
