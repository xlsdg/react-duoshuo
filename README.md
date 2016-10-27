# react-duoshuo
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
import DuoShuo from 'DuoShuo';

<DuoShuo thread="your-data-thread-key"
         url="your-data-url"
         title="your-data-title"/>
```

# License

MIT
