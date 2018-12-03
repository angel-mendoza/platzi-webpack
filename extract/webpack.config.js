const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/bundle.js'
    },
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "[id].css"
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../'
						}
					},
					"css-loader"
				]
			}
		]
	}
}
