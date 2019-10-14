const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: false,
            inject: 'body',
            template: path.join(__dirname, '/index.html'),
        }),
    ],
    devtool: process.env.NODE_ENV === 'production' ? null : 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 1234,
        historyApiFallback: true,
        hot: true,
        proxy: {
            '/api': 'http://localhost:8080',
        },
    },
    watch: process.env.NODE_ENV !== 'production',
};
