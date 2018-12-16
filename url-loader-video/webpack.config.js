const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/bundle.js',
        publicPath: './dist/'
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
			},
			{
			test: /\.(png|jpg|gif|woff|ttf|eot|svg)$/i,
			use: [
					{
					loader: 'url-loader',
						options: {
					  		limit: 25000
						}
					}
				]
			},
			{
			test: /\.(mp4|webm)$/,
			use: [
					{
					loader: 'url-loader',
						options: {
					  		limit: 25000,
					  		name: 'videos/[name].[hash].[ext]'
						}
					}
				]
			},						
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}			
		]
	}
}
