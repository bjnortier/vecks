'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

var Plane3 = (function () {
  function Plane3 (a, b, c, d) {
    _classCallCheck(this, Plane3)

    this.a = a
    this.b = b
    this.c = c
    this.d = d
  }

  // Distance to a point
  // http://mathworld.wolfram.com/Point-PlaneDistance.html eq 10

  _createClass(Plane3, [{
    key: 'distanceToPoint',
    value: function distanceToPoint (p0) {
      var dd = (this.a * p0.x + this.b * p0.y + this.c * p0.z + this.d) / Math.sqrt(this.a * this.a + this.b * this.b + this.c * this.c)
      return dd
    }
  }])

  return Plane3
}())

// From point and normal

Plane3.fromPointAndNormal = function (p, n) {
  var a = n.x
  var b = n.y
  var c = n.z
  var d = -(p.x * a + p.y * b + p.z * c)
  return new Plane3(n.x, n.y, n.z, d)
}

Plane3.fromPoints = function (pa, pb, pc) {
  var ab = pb.sub(pa)
  var bc = pc.sub(pb)
  var n = ab.cross(bc).norm()
  return Plane3.fromPointAndNormal(pa, n)
}

exports.default = Plane3
