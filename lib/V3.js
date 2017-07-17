'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var V3 = function () {
  function V3(x, y, z) {
    _classCallCheck(this, V3);

    if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {
      this.x = x.x;
      this.y = x.y;
      this.z = x.z;
    } else {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  }

  _createClass(V3, [{
    key: 'length',
    value: function length() {
      return Math.sqrt(this.dot(this));
    }
  }, {
    key: 'neg',
    value: function neg() {
      return new V3(-this.x, -this.y, -this.z);
    }
  }, {
    key: 'add',
    value: function add(b) {
      return new V3(this.x + b.x, this.y + b.y, this.z + b.z);
    }
  }, {
    key: 'sub',
    value: function sub(b) {
      return new V3(this.x - b.x, this.y - b.y, this.z - b.z);
    }
  }, {
    key: 'multiply',
    value: function multiply(w) {
      return new V3(this.x * w, this.y * w, this.z * w);
    }
  }, {
    key: 'norm',
    value: function norm() {
      return this.multiply(1 / this.length());
    }
  }, {
    key: 'dot',
    value: function dot(b) {
      return this.x * b.x + this.y * b.y + this.z * b.z;
    }
  }, {
    key: 'cross',
    value: function cross(b) {
      return new V3(this.y * b.z - this.z * b.y, this.z * b.x - this.x * b.z, this.x * b.y - this.y * b.x);
    }
  }]);

  return V3;
}();

exports.default = V3;