"use strict";

var _ = require('lodash');

// # class Plane3

// An immutable 3D Plane defined in the standard ax+by+cz+d=0 form.
//
var Plane3 = function(x) {
  var a,b,c,d;

  if (arguments.length === 4) {
    a = arguments[0];
    b = arguments[1];
    c = arguments[2];
    d = arguments[3];
  } else if (_.isObject(x) && ('a' in x)) {
    a = x.a;
    b = x.b;
    c = x.c;
    d = x.d;
  } else {
    throw new Error('invalid construction of Plane3');
  }

  this.__defineGetter__('a', function() {
    return a;
  });
  this.__defineGetter__('b', function() {
    return b;
  });
  this.__defineGetter__('c', function() {
    return c;
  });
  this.__defineGetter__('d', function() {
    return d;
  });

  this.__defineSetter__('a', function() {
    throw new Error('Plane3 is immutable');
  });
  this.__defineSetter__('b', function() {
    throw new Error('Plane3 is immutable');
  });
  this.__defineSetter__('c', function() {
    throw new Error('Plane3 is immutable');
  });
  this.__defineSetter__('d', function() {
    throw new Error('Plane3 is immutable');
  });

};

// String
Plane3.prototype.toString = function() {
  return JSON.stringify(this);
};

module.exports = Plane3;