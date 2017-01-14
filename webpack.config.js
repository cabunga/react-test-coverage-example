const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, 'index.js'),

    output: {
        filename: 'app.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            }
        ]
    }
};
