const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/js/main.js',
    optimization: {
        minimize: true
    },
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'bundle.js',
    },
    watch: true,
    mode: 'production',
    plugins: [
        new Dotenv()
    ],
};