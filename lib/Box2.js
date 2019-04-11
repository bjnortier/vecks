"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _V = _interopRequireDefault(require("./V2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Box2 =
/*#__PURE__*/
function () {
  function Box2(min, max) {
    _classCallCheck(this, Box2);

    this.min = min || new _V["default"](Infinity, Infinity);
    this.max = max || new _V["default"](-Infinity, -Infinity);
  }

  _createClass(Box2, [{
    key: "equals",
    value: function equals(other) {
      return this.min.equals(other.min) && this.max.equals(other.max);
    }
  }, {
    key: "expandByPoint",
    value: function expandByPoint(p) {
      this.min = new _V["default"](Math.min(this.min.x, p.x), Math.min(this.min.y, p.y));
      this.max = new _V["default"](Math.max(this.max.x, p.x), Math.max(this.max.y, p.y));
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
      return p.x >= this.min.x && p.y >= this.min.y && p.x <= this.max.x && p.y <= this.max.y;
    }
  }, {
    key: "width",
    get: function get() {
      return this.max.x - this.min.x;
    }
  }, {
    key: "height",
    get: function get() {
      return this.max.y - this.min.y;
    }
  }]);

  return Box2;
}();

Box2.fromPoints = function (points) {
  return new Box2().expandByPoints(points);
};

var _default = Box2;
exports["default"] = _default;