`npm init --yes`

`npm i webpack webpack-cli --save-dev`

## Basic about webpack - demo

```json
{
  "name": "webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build" : "webpack" //changes
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4"
  }
}

```

create 2 usual folders
src and dist(distribution)

src > index.js amd other.js

dist > index.html 

```js 
//other.js
export function other() {
    return "Other Func";
}
```

```js 
import {other} from "./other"

console.log(other())
```



Run command `npm run build`


You will see` main.js` file which consist of minified version of js files.

```js 
//main.js
(()=>{"use strict";console.log("Other Func")})();
```

now you create html file in dist folder and mention the script file pointing to `main.js`


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebPack</title>
</head>

<body>
    <h1>WebPack</h1>
    <script src="./main.js"></script>
</body>

</html>
```


<hr>

## Make Config file

mode, entry , output


```js 
const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    },
}
```

## Loaders

Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

### svg loader

`npm install svg-inline-loader --save-dev`

```js 
const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: "svg-inline-loader"
            }
        ]
    }
}
```

### css loader

you need 2 libraries - css-loader & style-loader

Here first css-loader loads, then style-loader
from last to first Direction

```js 
const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: "svg-inline-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
}
```

### babel Loader

converts modern ES6 to old JS , called as transpiller, it is necessary to support old browser or multiple browser Rendering of JS

```js 
const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: "svg-inline-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js)$/,
                use: "babel-loader"
            }
        ]
    }
}
```


## Plugins


this is done after the output.js is created, 
While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

In order to use a plugin, you need to require() it and add it to the plugins array. Most plugins are customizable through options. Since you can use a plugin multiple times in a configuration for different purposes, you need to create an instance of it by calling it with the new operator.

```js 
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: "svg-inline-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js)$/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
}
```
