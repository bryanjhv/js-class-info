function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.distance = function (p) {
  var dx = this.x - p.x,
      dy = this.y - p.y;

  return Math.sqrt(dx * dx + dy * dy);
};

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};


Point.make = function (obj) {
  return new Point(obj.x, obj.y);
};

Point.ORIGIN = new Point(0, 0);


module.exports = Point;
