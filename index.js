const spawn = require('child_process').spawn;

function WebpackTmuxPlugin() {
}

WebpackTmuxPlugin.prototype.apply = function(compiler) {
  const setBgColor = function(color) {
    spawn('tmux', ['set-option', 'status-left-bg', color]);
    spawn('tmux', ['set-option', 'status-left-fg', 'black']);
  };

  if (process.env.TMUX) {
    compiler.plugin('compile', function() {
      setBgColor('yellow');
    });

    compiler.plugin('invalid', function() {
      setBgColor('yellow');
    });

    compiler.plugin('done', function(stats) {
      if (stats.hasErrors()) {
        setBgColor('red');
      } else {
        setBgColor('green');
      }
    });
  }
};

module.exports = WebpackTmuxPlugin;
