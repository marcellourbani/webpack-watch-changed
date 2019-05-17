# Webpack changed files plugin

Simple webpack plugin to display what file changes triggered a rebuild

Useful to troubleshoot rebuild loops which can occur when your webpack script changes watched files

Based on [this article by David Gnanasekaran](https://davidsekar.com/angular/simple-webpack-plugin-to-identify-the-cause-of-repeated-rebuild-issue)

## Usage

install with npm or yarn, i.e.

`npm i --save-dev webpack-watch-changed`

in your webpack.config.js add the following:

```javascript
const WatchRunPlugin = require("webpack-watch-changed")

module.exports = {
  // ...
  plugins: [new WatchRunPlugin()]
}
```

## License

MIT
Standard disclaimer applies: no warranty,...
