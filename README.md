[![NPM Version](http://img.shields.io/npm/v/require-arr.svg?style=flat)](https://npmjs.org/package/require-arr)
[![Build Status](http://img.shields.io/travis/royriojas/require-arr.svg?style=flat)](https://travis-ci.org/royriojas/require-arr)

# require-arr
> browserify transform to replace `require` calls to globs to an array of `requires` 

## Overview
This transform will turn this: 

```javascript
module.exports = {
  run: function () {
    var deps = requireArr('./files/**/*.js', '!./files/test1.js');
  }
};
```

Into this:

```javascript
module.exports = {
  run: function () {
    var deps = [require("./files/test2.js"), require("./files/test3.js")];
  }
};
```

Assuming in your filesystem the files exists.

## Install

```bash
npm i --save-dev require-arr
```

## Usage

```
var requireArr = require( 'require-arr' ));

var b = browserify();
b.add('./my-module');
b.transform( require-arr );
b.bundle().pipe(process.stdout);
```

## License

MIT

## Changelog

[Changelog](./changelog.md)
