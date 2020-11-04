# webpack-env
A basic production environment for front-end development built with Webpack

## Node.js

Find instructions to install node on your system [here](https://nodejs.org/en/download/).

### Web Server Setup

Create the file ```app.js```
```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Run the web server using:
```
node app.js
```

### Project Configuration
The ```package.json``` file is kind of a manifest for your project, containing project metadata, configurations, and dependencies.

To initialize a ```package.json``` file for your project use:

```
npm init
```

To install an existing project with the dependencies in the local node_modules folder from the root directory run:
```
npm install
```

Running ```npm install``` with arguments will install a module and save any specified packages into the project's dependencies.


### Webpack Configuration
Install webpack locally with:
```
npm install webpack webpack-cli --save-dev
```

it is suggested that you install it with --save-dev option if you're not going to include webpack in your production build.

Typically webpack is run via one or more npm scripts:
```
"scripts": {
	"build": "webpack --config webpack.config.js"
}
```