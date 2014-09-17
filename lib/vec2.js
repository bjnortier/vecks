"use strict";

// # class Vec2

// Represents a 2D vector as an object with x and y values.
//
// Vec2 objects are immutable, and all functions
// return new Vec2 objects
var Vec2 = function(a) {
  var x,y;
  if (arguments.length === 2) {
    x = arguments[0];
    y = arguments[1];
  } else if ('x' in a) {
    x = a.x;
    y = a.y;
  } else {
    x = a[0];
    y = a[1];
  }

  this.__defineGetter__('x', function() {
    return x;
  });

  this.__defineGetter__('y', function() {
    return y;
  });

  this.__defineSetter__('x', function() {
    throw new Error('Vec2 is immutable');
  });

  this.__defineSetter__('y', function() {
    throw new Error('Vec2 is immutable');
  });

};

// Negate
Vec2.prototype.negate = function() {
  return new Vec2(-this.x, -this.y);
};

// Dot product
Vec2.prototype.dot = function(a) {
  return this.x * a.x + this.y * a.y;
};

// Length
Vec2.prototype.length = function() {
  return Math.sqrt(this.dot(this));
};

// Multiply
Vec2.prototype.multiply = function(a) {
  return new Vec2(this.x*a, this.y*a);
};

// Normalize
Vec2.prototype.normalize = function() {
  return this.multiply(1/this.length());
};

// Vector addition
Vec2.prototype.add = function(other) {
  return new Vec2(this.x + other.x, this.y + other.y);
};

// Vec2 subtraction
Vec2.prototype.sub = function(other) {
  return new Vec2(this.x - other.x, this.y - other.y);
};

module.exports = Vec2;