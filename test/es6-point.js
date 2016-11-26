class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance(p) {
    let dx = this.x - p.x,
        dy = this.y - p.y;

    return Math.sqrt(dx * dx + dy * dy);
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  static make({x, y}) {
    return new Point(x, y);
  }

}


Point.ORIGIN = new Point(0, 0);


module.exports = Point;
