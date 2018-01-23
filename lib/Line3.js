'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _V = require('./V3');

var _V2 = _interopRequireDefault(_V);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dist = function dist(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2));
};

var Line3 = function () {
  function Line3(a, b) {
    _classCallCheck(this, Line3);

    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object' || a.x === undefined || a.y === undefined || a.z === undefined) {
      throw Error('expected first argument to have x, y and z properties');
    }
    if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object' || b.x === undefined || b.y === undefined || b.y === undefined) {
      throw Error('expected second argument to have x, y and z properties');
    }
    this.a = new _V2.default(a);
    this.b = new _V2.default(b);
  }

  _createClass(Line3, [{
    key: 'length',
    value: function length() {
      return this.a.sub(this.b).length();
    }
  }, {
    key: 'containsPoint',
    value: function containsPoint(point) {
      var eps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e-12;

      return Math.abs(dist(this.a, this.b) - dist(point, this.a) - dist(point, this.b)) < eps;
    }
  }]);

  return Line3;
}();

exports.default = Line3;