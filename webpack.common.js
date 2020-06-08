const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const path = require('path');

const plugins = [
  new HtmlWebpackPlugin({
    template: '!!compile-ejs-loader!./src/templates/index.ejs',
    title: 'DronefaceRouter',
    favicon: './src/images/favicon.png'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
      FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      FIREBASE_DATABASE_URL: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
      FIREBASE_APP_ID: JSON.stringify(process.env.FIREBASE_APP_ID),
      FIREBASE_MEASUREMENT_ID: JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
    }
  })
];

const rules = [
	{
		test: /\.(ts|js)x?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader'
		},
	},
	{
		test: /\.css$/,
		use: ['style-loader', 'css-loader']
	},
	{
		test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
		exclude: /node_modules/,
		use: ['file-loader?name=[name].[ext]']
	},
	{
		test: /\.ejs$/,
		use: ['compile-ejs-loader']
	}
];

const node_path = process.cwd()
const valid_resolvers = node_path.split(path.delimiter).filter(Boolean)

module.exports = {
	entry: './src/index',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules'].concat(valid_resolvers),
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: rules
	},
	plugins: plugins
}