'use strict';

var norm = require('./vec3').norm;

// Quaternion implementation heavily adapted from the Quaternion implementation in THREE.js
// https://github.com/mrdoob/three.js/blob/master/src/math/Quaternion.js

function fromAxisAngle(axis, angle) {
  // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
  axis = norm(axis);
  var halfAngle = angle/2;
  var s = Math.sin(halfAngle);
  return [
    axis[0] * s,
    axis[1] * s,
    axis[2] * s,
    Math.cos(halfAngle)
  ];
}

// Adapted from Vector3 in THREE.js
// https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js
function applyToVec3(q, v3) {
  var x = v3[0];
  var y = v3[1];
  var z = v3[2];

  var qx = q[0];
  var qy = q[1];
  var qz = q[2];
  var qw = q[3];

  // calculate quat * vector
  var ix =  qw * x + qy * z - qz * y;
  var iy =  qw * y + qz * x - qx * z;
  var iz =  qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  return [
    ix * qw + iw * -qx + iy * -qz - iz * -qy,
    iy * qw + iw * -qy + iz * -qx - ix * -qz,
    iz * qw + iw * -qz + ix * -qy - iy * -qx,
  ];
}

module.exports.fromAxisAngle = fromAxisAngle;
module.exports.applyToVec3 = applyToVec3;
