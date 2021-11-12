const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, '../dist')
    }
};
