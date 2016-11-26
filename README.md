# Class Info

Get information about your ES5/ES6 class.


## Usage

Pass your class' constructor to the exported method:

```js
let classInfo = require('class-info');

class Sample {}

let info = classInfo(Sample);
console.log(info); // -> { staticMethods: [], instanceMethods: [],
                   //      staticProperties: [], instanceProperties: [] }
```

For now, only **`instanceProperties` is not implemented**.


## License

This project is released under the [MIT license](LICENSE.txt).
