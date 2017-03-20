# react-duoshuo2
A DuoShuo component for React.

## Installation

```
$ npm install react-duoshuo2 --save
```


## Usage

In `index.html` :

``` html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Demo</title>
  <link rel="stylesheet" href="index.css" />
</head>
<body>
  <div id="root"></div>
  <script src="common.js"></script>
  <script src="index.js"></script>
</body>
</html>
```

Then:

``` javascript
import DuoShuo from 'react-duoshuo2';

<DuoShuo
  domain="your-short-name"
  thread="your-data-thread-key"
/>
```

## Properties

``` javascript
domain:   React.PropTypes.string.isRequired,  // DuoShuo short_name 多说二级域名
thread:   React.PropTypes.string.isRequired,  // 文章在原站点中的 ID 或其他唯一标识
image:    React.PropTypes.string,             // 文章图片地址，将用于转发时的附图
author:   React.PropTypes.string,             // 作者在本站中的 ID
position: React.PropTypes.string,             // 该页面中评论框的位置，取值 `top` (评论框在顶端显示)，`bottom` (评论框在底端显示)
limit:    React.PropTypes.number,             // 单页显示评论数，取值范围: 1～200
order:    React.PropTypes.string,             // 排序方式，取值：`asc` (从旧到新)，`desc` (从新到旧)
onReady:  React.PropTypes.func                // 插件加载完成后的回调函数
```

See more [DuoShuo](http://dev.duoshuo.com/docs/5003ecd94cab3e7250000008)

# License

MIT
