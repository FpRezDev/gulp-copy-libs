const { copyLibs } = require('./gulp-copy-libs');
const { libsConfig } = require('./libs.config');
const del = require('del');


exports.build = () => {
    return copyLibs(libsConfig);
}

exports.clean = () => {
  return del('test-libs/');
}