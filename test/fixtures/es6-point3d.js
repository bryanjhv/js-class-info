const Point = require('./es6-point');


class Point3D extends Point {

  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }

  distance(p) {
    let dz  = this.z - p.z,
        old = super.distance(p);

    return Math.sqrt(old * old + dz * dz);
  }

  toString() {
    return `${super.toString().slice(0, -1)}, ${this.z})`;
  }

  static make({x, y, z}) {
    return new Point3D(x, y, z);
  }

}


Point3D.ORIGIN = new Point3D(0, 0, 0);


module.exports = Point3D;
