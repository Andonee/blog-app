const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const devMode = process.env.NODE_ENV !== 'production'

const CSSModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: {
			localIdentName: '[name]__[local]___[hash:base64:5]',
		},
		importLoaders: 2,
		sourceMap: true,
	},
}

const CSSLoader = {
	loader: 'css-loader',
	options: {
		modules: 'global',
		importLoaders: 2,
		sourceMap: true,
	},
}

const PostCSSLoader = {
	loader: 'postcss-loader',
	options: {
		ident: 'postcss',
		sourceMap: true,
	},
}

const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin(),
		new CleanWebpackPlugin(),
	],
	resolve: {
		modules: [__dirname, 'src', 'node_modules'],
		extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: require.resolve('babel-loader'),
			},
			// Checks for .scss and css files

			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /\.module\.(sa|sc|c)ss$/,
				use: [styleLoader, CSSLoader, PostCSSLoader, 'sass-loader'],
			},
			{
				test: /\.module\.(sa|sc|c)ss$/,
				use: [styleLoader, CSSModuleLoader, PostCSSLoader, 'sass-loader'],
			},
			{
				test: /\.png|svg|jpg|gif$/,
				use: ['file-loader'],
			},
		],
	},
	devtool: !devMode ? 'source-map' : 'inline-source-map',
}
