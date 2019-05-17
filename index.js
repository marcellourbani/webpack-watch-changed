"use strict";
const chalk = require('chalk');
chalk.enabled = true
const title = chalk.bold.yellow;
const files = chalk.bold;
class WebpackWatchRunPlugin {
    constructor(options) {
        if (typeof options !== "object") options = {};
        this.options = options;
    }

    apply(compiler) {
        compiler.hooks.watchRun.tap("watch-run",
            function (watching) {
                const changedTimes = watching.watchFileSystem.watcher.mtimes;
                const changedFiles = Object.keys(changedTimes)
                    .map(file => `\n  ${file}`)
                    .join("");
                if (changedFiles.length) {
                    console.log(title("Files modified:"), files(changedFiles));
                }
            });
    }
}

module.exports = WebpackWatchRunPlugin;