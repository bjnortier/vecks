'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plane3 = function () {
  function Plane3(a, b, c, d) {
    _classCallCheck(this, Plane3);

    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  // Distance to a point
  // http://mathworld.wolfram.com/Point-PlaneDistance.html eq 10


  _createClass(Plane3, [{
    key: 'distanceToPoint',
    value: function distanceToPoint(p0) {
      var dd = (this.a * p0.x + this.b * p0.y + this.c * p0.z + this.d) / Math.sqrt(this.a * this.a + this.b * this.b + this.c * this.c);
      return dd;
    }
  }, {
    key: 'equals',
    value: function equals(other) {
      return this.a === other.a && this.b === other.b && this.c === other.c && this.d === other.d;
    }
  }, {
    key: 'coPlanar',
    value: function coPlanar(other) {
      var coPlanarAndSameNormal = this.a === other.a && this.b === other.b && this.c === other.c && this.d === other.d;
      var coPlanarAndReversedNormal = this.a === -other.a && this.b === -other.b && this.c === -other.c && this.d === -other.d;
      return coPlanarAndSameNormal || coPlanarAndReversedNormal;
    }
  }]);

  return Plane3;
}();

// From point and normal


Plane3.fromPointAndNormal = function (p, n) {
  var a = n.x;
  var b = n.y;
  var c = n.z;
  var d = -(p.x * a + p.y * b + p.z * c);
  return new Plane3(n.x, n.y, n.z, d);
};

Plane3.fromPoints = function (points) {
  var validCross = void 0;
  for (var i = 0, il = points.length; i < il; ++i) {
    var ab = points[(i + 1) % il].sub(points[i]);
    var bc = points[(i + 2) % il].sub(points[(i + 1) % il]);
    var cross = ab.cross(bc);
    if (!(isNaN(cross.length()) || cross.length() === 0)) {
      if (!validCross) {
        validCross = cross.norm();
      } else {
        var same = cross.norm().equals(validCross);
        var opposite = cross.neg().norm().equals(validCross);
        if (!(same || opposite)) {
          throw Error('points not on a plane');
        }
      }
    }
  }
  if (!validCross) {
    throw Error('points not on a plane');
  }
  return Plane3.fromPointAndNormal(points[0], validCross.norm());
};

exports.default = Plane3;