const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.jsx$/, // $ -> terminam em .jsx, importa o arquivo
                exclude: /node_modules/,
                use: 'babel-loader', // integra babel e webpack, converte o arquivo jsx pro browser
            }
        ],
    }
};