const Point = require('./es5-point');


function Point3D(x, y, z) {
  Point.call(this, x, y);
  this.z = z;
}

Point3D.prototype = Object.create(Point.prototype);
Point3D.prototype.constructor = Point3D;

Point3D.prototype.distance = function (p) {
  var dz  = this.z - p.z,
      old = Point.prototype.distance.call(this, p);

  return Math.sqrt(old * old + dz * dz);
};

Point3D.prototype.toString = function () {
  var tmp = Point.prototype.toString.call(this);
  return tmp.slice(0, -1) + ', ' + this.z + ')';
};


Point3D.make = function (obj) {
  return new Point3D(obj.x, obj.y, obj.z);
};

Point3D.ORIGIN = new Point3D(0, 0, 0);


module.exports = Point3D;
