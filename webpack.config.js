const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    optimization: {
        minimize: false
    },
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'bundle.js',
    },
    watch: true,
    mode: 'production',
};
