# Class Info

Get information about your ES5/ES6 class.


## Usage

`require()` the module and pass your class constructor, like so:

```js
let classInfo = require('class-info');

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  getPosition() {
    return {x: this.x, y: this.y};
  }
  
  static place({x, y}) {
    return new Shape(x, y);
  }
}

let shapeInfo = classInfo(Shape);
console.log(shapeInfo); // -> { staticMethods: ['place'],
                        //      instanceMethods: ['getPosition'],
                        //      staticProperties: [],
                        //      instanceProperties: [],
                        //      parentClass: null }

class Circle extends Shape {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
  }
  
  getArea() {
    return Math.PI * this.r * this.r;
  }
}

Circle.NONE = new Circle(0, 0, 0);

let circleInfo = classInfo(Circle);
console.log(circleInfo); // -> { staticMethods: [],
                         //      instanceMethods: ['getArea'],
                         //      staticProperties: ['NONE'],
                         //      instanceProperties: [],
                         //      parentClass: Shape }

console.log(circleInfo.parentClass.name); // -> 'Shape'
```

### Information returned

- `staticMethods` contains all the static method names, defined via ES6 `static`
  keyword inside a class, or in both ES5/ES6 with `[class].[method]` syntax.
- `instanceMethods` contains all the instance method names, defined via ES6
  `[method](...) { ... }` or via ES5`[class].prototype.[method] = ...`.
- `staticProperties` lists all the properties names assigned with the syntax for
  both ES5/ES6 `[class].[property]`.
- `instanceProperties` **is not implemented**, but it'll be, I promise.
- `parentClass` contains the **raw** parent class (i.e. the constructor) which
  this class was derived from. If no parents were found, it's `null`.

### Warnings

- I'm not sure if `parentClass` is realiable, so use it with caution, only in
  extreme cases where you need it.


## License

This project is released under the [MIT license](LICENSE.txt).
