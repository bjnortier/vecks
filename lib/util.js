'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expectV2Equal = undefined;

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expectV2Equal = exports.expectV2Equal = function expectV2Equal(v1, v2) {
  (0, _expect2.default)(v1.x).toEqual(v2.x);
  (0, _expect2.default)(v1.y).toEqual(v2.y);
};