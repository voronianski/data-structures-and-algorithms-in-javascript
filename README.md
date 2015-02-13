# Data Structures and Algorithms in Javascript

[![](http://img.shields.io/badge/Status-Work%20In%20Progress-green.svg?style=flat-square)](https://github.com/voronianski/data-structures-and-algorithms-in-javascript/commits/master)

> Basic data structures and algorithms implemented in JavaScript.

[![Data Structures and Algorithms in Javascript](https://raw.githubusercontent.com/voronianski/data-structures-and-algorithms-in-javascript/master/promo.png)](http://labs.voronianski.com)

## Disclaimer

## Install

You can download necessary files manually or install module via [npm](https://www.npmjs.org):

```bash
npm install js-dsa
```

or even via [bower](http://bower.io)

```bash
bower install js-dsa
```

## Usage

### Node.js / Browserify

```javascript
var DataStructures = require('js-dsa/data-structures');
// or
var DataStructures = require('js-dsa').DataStructures;

var list = new DataStructures.DoublyLinkedList();
```

### AMD / Globals

In order to use `js-dsa` data structures and algorithms in other environments you can require every implementation separately:

```javascript
define(['/path/to/jsdsa', function (jsdsa) {
    var DataStructures = jsdsa.DataStructures;
    var list = new DataStructures.DoublyLinkedList();
}]);
```

```html
<script src="/path/to/jsdsa"></script>
<script>
    var DataStructures = jsdsa.DataStructures;
    var list = new DataStructures.DoublyLinkedList();
</script>
```

## References

- [_"Data Structures and Algorithms with JavaScript"_ by Michael McMillan](http://shop.oreilly.com/product/0636920029557.do)
- [_"Algorithms: Design and Analysis"_  by Tim Roughgarden](https://class.coursera.org/algo-006)

## License

MIT Licensed

Copyright (c) 2014-2015 Dmitri Voronianski [dmitri.voronianski@gmail.com](mailto:dmitri.voronianski@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
