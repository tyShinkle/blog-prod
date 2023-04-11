const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './scripts/app.js',
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
};
// https://www.sitepoint.com/bundle-static-site-webpack/
// npm init
// install webpack as dependency
// make dist directory
// bundle manually -> ./node_modules/webpack/bin/webpack.js ./scripts/script.js --output-filename=bundle.js --mode=development
// add   
//      "build": "webpack ./src/js/main.js --output-filename=bundle.js --mode=development
// to package.json 
// create a webpack config file -> webpack.config.js
// that is this file! 
// once this file is setup change build in package.json to simply "webpack"
// create app.js to include different components of bundle...
//      app.js
//          require('./scripts.js');
// change entry in webpack config file to './scripts/app.js'
// alter app.js to include loader to bundle css
