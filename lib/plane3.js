'use strict';

var vec3 = require('./vec3');
var sub = vec3.sub;
var cross = vec3.cross;
var norm = vec3.norm;

// From point and normal
function fromPointAndNormal(p, n) {
  var a = n[0];
  var b = n[1];
  var c = n[2];
  var d = -(p[0]*a + p[1]*b + p[2]*c);
  return [n[0], n[1], n[2], d];
}

// From points
function fromPoints(pa, pb, pc) {
  if (arguments.length !== 3) {
    throw new Error('3 points arguments required');
  }
  var ab = sub(pb, pa);
  var bc = sub(pc, pb);
  var n = norm(cross(ab, bc));
  return fromPointAndNormal(pa, n);
}


// Distance to a point
// http://mathworld.wolfram.com/Point-PlaneDistance.html eq 10
function distanceToPoint(plane, p0) {
  var dd = (plane[0]*p0[0] + plane[1]*p0[1] + plane[2]*p0[2] + plane[3]) /
    Math.sqrt(plane[0]*plane[0] + plane[1]*plane[1] + plane[2]*plane[2]);
  return dd;
}

module.exports.fromPointAndNormal = fromPointAndNormal;
module.exports.fromPoints = fromPoints;
module.exports.distanceToPoint = distanceToPoint;
