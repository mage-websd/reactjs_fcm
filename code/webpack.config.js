module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/public",
        publicPath: "/assets/",
        filename: "assets/bundle.js",
        chunkFilename: '[name].js'
    },
    devServer: {
        contentBase: __dirname + "/public/",
        inline: true,
        host: '0.0.0.0',
        port: 3000,
    },
    module: {
        loaders: [
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2016", "react", "env", "stage-2"]
                }
            }
        ]
    }
};