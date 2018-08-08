
const webpack = require("webpack");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const iniConfig = require("./webpack.ini");
const {
	dir, staticFolder, styleLoader,
	cssStyleLoader, cssModuleLoader,
	postStyleLoader, lessStyleLoader,
} = iniConfig;

const developmentConfig = {
	// devtool: "cheap-eval-source-map",
	devtool: "cheap-module-eval-source-map",
	module: {
		loaders: [
			{
				test: /_\.css(\?.*)?$/i,
				loaders: [
					styleLoader,
					cssModuleLoader,
					postStyleLoader,
				],
			},
			{
				test: /[^_]\.css(\?.*)?$/i,
				loaders: [
					styleLoader,
					cssStyleLoader,
					postStyleLoader,
				],
			},
			{
				test: /_\.less(\?.*)?$/i,
				loaders: [
					styleLoader,
					cssModuleLoader,
					postStyleLoader,
					lessStyleLoader,
				],
			},
			{
				test: /[^_]\.less(\?.*)?$/i,
				loaders: [
					styleLoader,
					cssStyleLoader,
					postStyleLoader,
					lessStyleLoader,
				],
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("development"),
			},
		}),
		new FriendlyErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: dir(staticFolder),
		historyApiFallback: true,
		watchContentBase: true,
		compress: true,
		hotOnly: true,
		inline: false, // ie11以下不支持inline
		noInfo: true,
		https: false,
		quiet: false,
		open: false,
		hot: true,
		clientLogLevel: "error",
		publicPath: "/",
		host: "0.0.0.0",
		port: 8888,
		proxy: iniConfig.html.proxy,
	},
};

module.exports = developmentConfig;