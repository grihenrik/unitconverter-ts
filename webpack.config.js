const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const conf = {
  src: __dirname + "/src/app/",
  dist: __dirname + "/src/dist/"
};

module.exports = {
  entry: conf.src + "index.ts",
  mode: "development",
  devtool:'inline-source-map',
  output: {
    path: conf.dist,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        include: conf.src,
        use: {
          loader:"babel-loader",
          options: {
            presets:['env']
          },
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        include: conf.src,
        use: ["to-string-loader","css-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: conf.src + "index.html"
    }),
    new CopyPlugin([{
      from: conf.src + "./fontawesome-free-5.13.0-web/",
      to: conf.dist + "./fontawesome-free-5.13.0-web/"
    },
    {
      from: conf.src + "./assets/",
      to: conf.dist + "./assets/"
    }
    ])
  ]
};