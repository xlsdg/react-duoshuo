# react-duoshuo2
A DuoShuo component for React.

## Installation

```
$ npm install xlsdg/react-duoshuo2 --save
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

<DuoShuo domain="your-short-name"
  thread="your-data-thread-key" />
```

## Properties

``` javascript
domain: React.PropTypes.string.isRequired // DuoShuo domain-short-name
thread: React.PropTypes.string.isRequired // DuoShuo data-thread-key
title:  React.PropTypes.string            // DuoShuo data-title
url:    React.PropTypes.string            // DuoShuo data-url
author: React.PropTypes.string            // DuoShuo author-key
```

# License

MIT
