### Step 1: Set Up Your Project

1. **Initialize a new project (if you haven't already):**
    
    ```bash
    mkdir my-react-app
    cd my-react-app
    npm init -y
    
    ```
    
2. **Install React and React DOM:**
    
    ```bash
    npm install react react-dom
    
    ```
    

### Step 2: Install Webpack and Related Packages

1. **Install Webpack and Webpack CLI:**
    
    ```bash
    npm install --save-dev webpack webpack-cli
    
    ```
    
2. **Install Babel for JSX and ES6+ syntax support:**
    
    ```bash
    npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
    
    ```
    
3. **Install additional Webpack plugins:**
    
    ```bash
    npm install --save-dev html-webpack-plugin clean-webpack-plugin
    
    ```
    

### Step 3: Configure Babel

Create a `.babelrc` file in the root of your project with the following content:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

```

### Step 4: Configure Webpack

Create a `webpack.config.js` file in the root of your project with the following content:

```jsx
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    mode: 'development',
};

```

### Step 5: Create Source Files

1. **Create the necessary directories and files:**
    
    ```bash
    mkdir src
    touch src/index.js src/index.html
    
    ```
    
2. **Add a basic React component in `src/index.js`:**
    
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';
    
    const App = () => {
      return <h1>Hello, React!</h1>;
    };
    
    ReactDOM.render(<App />, document.getElementById('root'));
    
    ```
    
3. **Set up the HTML template in `src/index.html`:**
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React App</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
    
    ```
    

### Step 6: Run Your Application

1. **Add a start script in your `package.json`:**
    
    ```json
    "scripts": {
      "start": "webpack serve --open"
    }
    
    ```
    
2. **Start the development server:**
    
    ```bash
    npm start
    
    ```
    

Your React application should now be running on `http://localhost:9000`, and any changes you make to your source files will automatically trigger a rebuild and refresh the browser.

### Step 7: Build for Production

For a production build, you can add another script to your `package.json`:

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --open",
    "build": "webpack"
  },

```

Then run:

```bash
npm run build

```

This will create a `dist` folder with your optimized application ready for deployment.

By following these steps, you should have a basic Webpack configuration for a React application. You can further customize and extend this setup based on your project's requirements.