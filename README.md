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
  <script>var duoshuoQuery = {short_name:"your-short-name"};</script>
  <script src="http://static.duoshuo.com/embed.js" async></script>
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

<DuoShuo thread="your-data-thread-key"
         url="your-data-url"
         title="your-data-title"/>
```

## Properties

``` javascript
thread: React.PropTypes.string  // DuoShuo data-thread-key
title: React.PropTypes.string   // DuoShuo data-title
url: React.PropTypes.string     // DuoShuo data-url
```

# License

MIT
