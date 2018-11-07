var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        vendor: [path.join(__dirname, "vendors.js")]
    },
    output: {
        path: path.join(__dirname, "..", "build", "dll"),
        filename: "dll.[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "..", "build", "dll", "[name]-manifest.json"),
            name: "[name]",
            context: path.resolve(__dirname)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                reduce_vars: false,
            },
            output: {
                comments: false,
            },
            sourceMap: true,
        })
    ],
};