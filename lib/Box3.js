'use strict';

// # class Box3
function Box3(min, max) {
  this.min = min || [Infinity, Infinity, Infinity];
  this.max = max || [-Infinity, -Infinity, -Infinity];
}

Box3.prototype.expandByPoint = function(p) {
  this.min = [
    Math.min(this.min[0], p[0]),
    Math.min(this.min[1], p[1]),
    Math.min(this.min[2], p[2]),
  ];
  this.max = [
    Math.max(this.max[0], p[0]),
    Math.max(this.max[1], p[1]),
    Math.max(this.max[2], p[2]),
  ];
  return this;
};

Box3.prototype.expandByPoints = function(points) {
  points.forEach(function(point) {
    this.expandByPoint(point);
  }, this);
  return this;
};

Box3.fromPoints = function(points) {
  return new Box3().expandByPoints(points);
};

Box3.prototype.isPointInside = function(p) {
  return (
    (p[0] >= this.min[0]) &&
    (p[1] >= this.min[1]) &&
    (p[2] >= this.min[2]) &&
    (p[0] <= this.max[0]) &&
    (p[1] <= this.max[1]) &&
    (p[2] <= this.max[2]));
};

module.exports = Box3;
