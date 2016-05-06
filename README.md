# webpack-tmux-status

![demo animated gif](https://raw.githubusercontent.com/brigade/webpack-tmux-status/master/demo.gif)

A simple plugin to update the tmux status line as webpack builds.

To use it, add this to your `webpack.config.js`:

```javascript
const WebpackTmuxStatus = require('webpack-tmux-status');

{
  plugins: [
    // tmux status line updater
    new WebpackTmuxStatus(),
  ]
}
```

## TODO:
* Trap exit and reset the status background
* Write some tests

Contributions welcome!
