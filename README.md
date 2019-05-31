# mystone
[![Build Status](https://travis-ci.org/hankaibo/mystone.svg?branch=master)](https://travis-ci.org/hankaibo/mystone)

A tool library for me.

## 安装依赖

``` bash
$ npm install -S mystone
```

## 使用
#### 普通页面中使用

``` bash
  <script src="path/to/mystone.js"></script>
  mystone.classof({})
```
#### Node项目中使用
``` bash
  let mystone = require('mystone')
  or
  import mystone from 'mystone'
  
  mystone.classof({}) // 'Object'
  mystone.all([1,2]) // true

```

## 文档

[API](https://hankaibo.github.io/mystone/)

## License

[MIT](http://opensource.org/licenses/MIT)