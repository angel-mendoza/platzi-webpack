const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
    	home: path.join(__dirname, './src/js/index.js'),	
    	precios: path.join(__dirname, './src/js/precios.js'),	
    	contacto: path.join(__dirname, './src/js/contacto.js'),	
    }, 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js'
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
