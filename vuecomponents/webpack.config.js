const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: path.resolve(__dirname, 'entry.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: ['url-loader']
            },
            {test: /\.js$/, use: ['cache-loader', 'babel-loader'], exclude: '/node_modules/'},
            {test: /\.less/, use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']}
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 3000,
        hot: true,
        hotOnly: true,
        compress: true,
        liveReload: false,
        // clientLogLevel: 'none',//关闭log日志
    },
    resolve: {
        extensions: ['.vue', '.css', '.js', '.less']
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + '/index.html',
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true,
            // }
        }),
    ]
}
