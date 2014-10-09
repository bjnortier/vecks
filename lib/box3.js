"use strict";

var Vec3 = require('./vec3');

// # class Box

// An immutable 3 Dimensional box. Mutations return new boxes.
//
function Box3(min, max) {
  this.min = min || new Vec3(Infinity, Infinity, Infinity);
  this.max = max || new Vec3(-Infinity, -Infinity, -Infinity);
}

Box3.prototype.expandByPoint = function(p) {
  return new Box3(
    new Vec3(
      Math.min(this.min.x, p.x),
      Math.min(this.min.y, p.y),
      Math.min(this.min.z, p.z)),
    new Vec3(
      Math.max(this.max.x, p.x),
      Math.max(this.max.y, p.y),
      Math.max(this.max.z, p.z)));
};

Box3.fromPoints = function(points) {
  return points.reduce(function(acc, p) {
    return acc.expandByPoint(p);
  }, new Box3());
};

Box3.prototype.isPointInside = function(p) {
  return (
    (p.x >= this.min.x) && 
    (p.y >= this.min.y) && 
    (p.z >= this.min.z) && 
    (p.x <= this.max.x) && 
    (p.y <= this.max.y) && 
    (p.z <= this.max.z));
};

module.exports = Box3;
