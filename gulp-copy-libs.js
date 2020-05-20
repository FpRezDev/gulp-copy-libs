const { src, dest } = require('gulp');
const merge = require("merge-stream");

/**
 * @typedef {Object} LibsConfig Libs configuration object
 * @property {string} outputDirectory - path to output directory
 * @property {string | string[] } inputFiles - Indicates whether the Power component is present.
 */

/**
 * @param {Array.<LibsConfig>} config array of libs dependencies
 */
const copyLibs = (config) => {
  let tasks = config.map((x) => {
    return src(x.inputFiles)
            .pipe(dest(x.outputDirectory));
  });

  return merge(tasks);
};

exports.copyLibs = copyLibs;