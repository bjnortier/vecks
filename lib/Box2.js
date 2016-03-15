'use strict';

// # class Box2
function Box2(min, max) {
  this.min = min || [Infinity, Infinity];
  this.max = max || [-Infinity, -Infinity];
}

Box2.prototype.expandByPoint = function(p) {
  this.min = [
    Math.min(this.min[0], p[0]),
    Math.min(this.min[1], p[1]),
  ];
  this.max = [
    Math.max(this.max[0], p[0]),
    Math.max(this.max[1], p[1]),
  ];
  return this;
};

Box2.prototype.expandByPoints = function(points) {
  points.forEach(function(point) {
    this.expandByPoint(point);
  }, this);
  return this;
};

Box2.fromPoints = function(points) {
  return new Box2().expandByPoints(points);
};

Box2.prototype.isPointInside = function(p, inclusive) {
  if (inclusive === undefined) {
    inclusive = true;
  }
  if (inclusive) {
    return (
      (p[0] >= this.min[0]) &&
      (p[1] >= this.min[1]) &&
      (p[0] <= this.max[0]) &&
      (p[1] <= this.max[1]));
  } else {
    return (
      (p[0] > this.min[0]) &&
      (p[1] > this.min[1]) &&
      (p[0] < this.max[0]) &&
      (p[1] < this.max[1]));
  }
};

module.exports = Box2;
