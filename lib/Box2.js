'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _V = require('./V2');

var _V2 = _interopRequireDefault(_V);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Box2 = function () {
  function Box2(min, max) {
    _classCallCheck(this, Box2);

    this.min = min || new _V2.default(Infinity, Infinity);
    this.max = max || new _V2.default(-Infinity, -Infinity);
  }

  _createClass(Box2, [{
    key: 'expandByPoint',
    value: function expandByPoint(p) {
      this.min = new _V2.default(Math.min(this.min.x, p.x), Math.min(this.min.y, p.y));
      this.max = new _V2.default(Math.max(this.max.x, p.x), Math.max(this.max.y, p.y));
      return this;
    }
  }, {
    key: 'expandByPoints',
    value: function expandByPoints(points) {
      points.forEach(function (point) {
        this.expandByPoint(point);
      }, this);
      return this;
    }
  }, {
    key: 'isPointInside',
    value: function isPointInside(p) {
      return p.x >= this.min.x && p.y >= this.min.y && p.x <= this.max.x && p.y <= this.max.y;
    }
  }]);

  return Box2;
}();

Box2.fromPoints = function (points) {
  return new Box2().expandByPoints(points);
};

exports.default = Box2;