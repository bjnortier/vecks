'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _src = require('../src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expectWithin1e9 = function expectWithin1e9(a, b) {
  (0, _expect2.default)(Math.abs(a - b) < 1e-1).toBe(true);
};

describe('Quaternion', function () {
  it('can be constructed from axis angle', function () {
    var q2 = _src.Quaternion.fromAxisAngle(new _src.V3(0, 0, 1), Math.PI / 2);
    (0, _expect2.default)(q2.x).toEqual(0);
    (0, _expect2.default)(q2.y).toEqual(0);
    expectWithin1e9(q2.z, 1 / Math.sqrt(2));
    expectWithin1e9(q2.w, 1 / Math.sqrt(2));
  });

  it('can be applied to a vec3', function () {
    var q = _src.Quaternion.fromAxisAngle(new _src.V3(0, 0, 1), Math.PI / 2);
    var rotated = q.applyToVec3(new _src.V3(1, 0, 0));
    expectWithin1e9(rotated.x, 0);
    expectWithin1e9(rotated.y, 1);
    expectWithin1e9(rotated.z, 0);
  });
});