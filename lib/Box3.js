"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Box3 =
/*#__PURE__*/
function () {
  function Box3(min, max) {
    _classCallCheck(this, Box3);

    this.min = min || {
      x: Infinity,
      y: Infinity,
      z: Infinity
    };
    this.max = max || {
      x: -Infinity,
      y: -Infinity,
      z: -Infinity
    };
  }

  _createClass(Box3, [{
    key: "expandByPoint",
    value: function expandByPoint(p) {
      this.min = {
        x: Math.min(this.min.x, p.x),
        y: Math.min(this.min.y, p.y),
        z: Math.min(this.min.z, p.z)
      };
      this.max = {
        x: Math.max(this.max.x, p.x),
        y: Math.max(this.max.y, p.y),
        z: Math.max(this.max.z, p.z)
      };
      return this;
    }
  }, {
    key: "expandByPoints",
    value: function expandByPoints(points) {
      var _this = this;

      points.forEach(function (point) {
        _this.expandByPoint(point);
      }, this);
      return this;
    }
  }, {
    key: "isPointInside",
    value: function isPointInside(p) {
      return p.x >= this.min.x && p.y >= this.min.y && p.z >= this.min.z && p.x <= this.max.x && p.y <= this.max.y && p.z <= this.max.z;
    }
  }]);

  return Box3;
}();

Box3.fromPoints = function (points) {
  return new Box3().expandByPoints(points);
};

var _default = Box3;
exports["default"] = _default;