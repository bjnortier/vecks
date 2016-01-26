"use strict";

var isObject = require('lodash.isobject');

// # class Vec3

// An immutable 3D vector as an object with x, y and z values.
//
// Vec3 objects are immutable, and all functions
// return new Vec3 objects
var Vec3 = function(a) {
  var x;
  var y;
  var z;

  if (arguments.length === 3) {
    x = arguments[0];
    y = arguments[1];
    z = arguments[2];
  } else if (isObject(a) && ('x' in a)) {
    x = a.x;
    y = a.y;
    z = a.z;
  } else if (Array.isArray(a)) {
    x = a[0];
    y = a[1];
    z = a[2];
  } else {
    throw new Error('invalid construction of Vec3');
  }

  // Creates issues with unit tests
  if (x === -0) {
    x = 0;
  }
  if (y === -0) {
    y = 0;
  }
  if (z === -0) {
    z = 0;
  }

  this.__defineGetter__('x', function() {
    return x;
  });
  this.__defineGetter__('y', function() {
    return y;
  });
  this.__defineGetter__('z', function() {
    return z;
  });

  this.__defineSetter__('x', function() {
    throw new Error('Vec3 is immutable');
  });
  this.__defineSetter__('y', function() {
    throw new Error('Vec3 is immutable');
  });
  this.__defineSetter__('z', function() {
    throw new Error('Vec3 is immutable');
  });

};

// Equality
Vec3.prototype.equals = function(other) {
  return (this.x === other.x) && (this.y === other.y) && (this.z === other.z);
};

// Negate
Vec3.prototype.negate = function() {
  return new Vec3(-this.x, -this.y, -this.z);
};

// Dot product
Vec3.prototype.dot = function(a) {
  return this.x * a.x + this.y * a.y + this.z * a.z;
};

// Cross product
Vec3.prototype.cross = function(a) {
  return new Vec3(
    this.y * a.z - this.z * a.y,
    this.z * a.x - this.x * a.z,
    this.x * a.y - this.y * a.x
  );
};

// Length
Vec3.prototype.length = function() {
  return Math.sqrt(this.dot(this));
};

// Multiply
Vec3.prototype.multiply = function(a) {
  return new Vec3(this.x*a, this.y*a, this.z*a);
};

// Normalize
Vec3.prototype.normalize = function() {
  return this.multiply(1/this.length());
};

// Vector addition
Vec3.prototype.add = function(other) {
  return new Vec3(this.x + other.x, this.y + other.y, this.z + other.z);
};

// Vector subtraction
Vec3.prototype.sub = function(other) {
  return new Vec3(this.x - other.x, this.y - other.y, this.z - other.z);
};

// String
Vec3.prototype.toString = function() {
  return JSON.stringify(this);
};

// For Node console.log
Vec3.prototype.inspect = function() {
  return this.toString();
};

Vec3.prototype.serialize = function() {
  return [this.x, this.y, this.z];
};

// Determine the right-handed angle between this vector and another,
// according to the normal orientation given (i.e. the thumb direction)
Vec3.prototype.rightHandAngle = function(other, orientationNormal) {

  var crossMagnitude = this.cross(other).length();
  var crossSin = crossMagnitude/this.length()/other.length();
  var dot = this.dot(other);
  var dotSin = dot/this.length()/other.length();

  // The min/max is for robustness
  var alpha = Math.asin(Math.min(Math.max(crossSin, -1), 1));
  var beta = Math.asin(Math.min(Math.max(dotSin, -1), 1));
  var n = this.cross(other);

  if (n.dot(orientationNormal) >= 0) {
    if (beta > 0) {
      return alpha;
    } else {
      return Math.PI - alpha;
    }
  } else {
    if (beta > 0) {
      return -alpha;
    } else {
      return -Math.PI + alpha;
    }
  }

};

module.exports = Vec3;
