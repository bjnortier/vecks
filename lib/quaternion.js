"use strict";

var Vec3 = require('./vec3');

// Heavily adapted from the Quaternion implementation in THREE.js
// https://github.com/mrdoob/three.js/blob/master/src/math/Quaternion.js

var Quaternion = function(x, y, z, w) {
  x = x || 0;
  y = y || 0;
  z = z || 0;
  w = (w !== undefined) ? w : 1;

  this.__defineGetter__('x', function() {
    return x;
  });
  this.__defineGetter__('y', function() {
    return y;
  });
  this.__defineGetter__('z', function() {
    return z;
  });
  this.__defineGetter__('w', function() {
    return w;
  });

  this.__defineSetter__('x', function() {
    throw new Error('Quaternion is immutable');
  });
  this.__defineSetter__('y', function() {
    throw new Error('Quaternion is immutable');
  });
  this.__defineSetter__('z', function() {
    throw new Error('Quaternion is immutable');
  });
  this.__defineSetter__('w', function() {
    throw new Error('Quaternion is immutable');
  });
};

Quaternion.fromAxisAngle = function(axis, angle) {
  // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
  axis = axis.normalize();
  var halfAngle = angle/2;
  var s = Math.sin(halfAngle);
  return new Quaternion(
    axis.x * s,
    axis.y * s,
    axis.z * s,
    Math.cos(halfAngle));
};


// Adapted from Vector3 in THREE.js
// https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js
Quaternion.prototype.applyToVec3 = function(v) {
  var x = v.x;
  var y = v.y;
  var z = v.z;

  var qx = this.x;
  var qy = this.y;
  var qz = this.z;
  var qw = this.w;

  // calculate quat * vector
  var ix =  qw * x + qy * z - qz * y;
  var iy =  qw * y + qz * x - qx * z;
  var iz =  qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  return new Vec3(
    ix * qw + iw * -qx + iy * -qz - iz * -qy,
    iy * qw + iw * -qy + iz * -qx - ix * -qz,
    iz * qw + iw * -qz + ix * -qy - iy * -qx);
};

Quaternion.prototype.toString = function() {
  return JSON.stringify(this);
};

module.exports = Quaternion;