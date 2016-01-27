"use strict";

var Vec2= require('./Vec2');

// # class Box2

// An immutable 2 Dimensional box. Mutations return new boxes.
//
function Box2(min, max) {
  this.min = min || new Vec2(Infinity, Infinity);
  this.max = max || new Vec2(-Infinity, -Infinity);
}

Box2.prototype.expandByPoint = function(p) {
  return new Box2(
    new Vec2(
      Math.min(this.min.x, p.x),
      Math.min(this.min.y, p.y)),
    new Vec2(
      Math.max(this.max.x, p.x),
      Math.max(this.max.y, p.y)));
};

Box2.prototype.expandByPoints = function(points) {
  return points.reduce(function(acc, point) {
    return acc.expandByPoint(point);
  }, this);
};

Box2.fromPoints = function(points) {
  return new Box2().expandByPoints(points);
};

Box2.prototype.isPointInside = function(p, inclusive) {
  if (inclusive === undefined) {
    inclusive = true;
  }
  console.log('>>', p, this, inclusive);
  if (inclusive) {
    return (
      (p.x >= this.min.x) &&
      (p.y >= this.min.y) &&
      (p.x <= this.max.x) &&
      (p.y <= this.max.y));
  } else {
    return (
      (p.x > this.min.x) &&
      (p.y > this.min.y) &&
      (p.x < this.max.x) &&
      (p.y < this.max.y));
  }
};

// String
Box2.prototype.toString = function() {
  return JSON.stringify(this);
};

// For Node console.log
Box2.prototype.inspect = function() {
  return this.toString();
};



module.exports = Box2;
