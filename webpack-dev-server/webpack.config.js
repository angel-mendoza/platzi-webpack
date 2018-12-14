const path = require('path')

module.exports = {
    mode: 'development',
    watch: true,
    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },    
    module:{
    	rules: [
    		{
    			test: /\.css$/,
    			use: [
    				'style-loader', 'css-loader'
    			]
    		}
    	]
    }
}
