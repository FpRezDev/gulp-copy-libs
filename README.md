# gulp-copy-libs

A gulp plugin to copy libs dependencies 

Usage
======

### Example

```js
// gulpfile.js
const { copyLibs } = require('./gulp-copy-libs')
const libsConfig = [
  {
    'outputDirectory': 'test-libs/jquery/',
    'inputFiles': 'node_modules/jquery/dist/*.js'
  },
  {
    'outputDirectory': 'test-libs/popper.js/',
    'inputFiles': 'node_modules/popper.js/dist/popper.*'
  },
  {
    'outputDirectory': 'test-libs/bootstrap/',
    'inputFiles': 'node_modules/bootstrap/dist/**/bootstrap*'
  },
  {
    'outputDirectory': 'test-libs/fontawesome/css/',
    'inputFiles': [
      'node_modules/@fortawesome/fontawesome-free/css/*.css'
    ]
  },
  {
    'outputDirectory': 'test-libs/fontawesome/webfonts/',
    'inputFiles': [
      'node_modules/@fortawesome/fontawesome-free/webfonts/fa-*'
    ]
  }
];

exports.default = () => {
  return copyLibs(libsConfig);
};
```
