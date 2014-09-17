"use strict";

// # class Vec3

// An immutable 3D vector as an object with x, y and z values.
//
// Vec3 objects are immutable, and all functions
// return new Vec3 objects
var Vec3 = function(a) {
  var x,y,z;

  if (arguments.length === 3) {
    x = arguments[0];
    y = arguments[1];
    z = arguments[2];
  } else if ('x' in a) {
    x = a.x;
    y = a.y;
    z = a.z;
  } else {
    x = a[0];
    y = a[1];
    z = a[2];
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


module.exports = Vec3;