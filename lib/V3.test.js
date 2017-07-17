'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _src = require('../src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expectV3Equal = function expectV3Equal(v1, v2) {
  (0, _expect2.default)(v1.x).toEqual(v2.x);
  (0, _expect2.default)(v1.y).toEqual(v2.y);
  (0, _expect2.default)(v1.z).toEqual(v2.z);
};

describe('V3', function () {
  it('constructs from arguments or an object', function () {
    var va = new _src.V3(7, -19, 23);
    expectV3Equal(va, new _src.V3({ x: 7, y: -19, z: 23 }));
  });

  it('operations', function () {
    var va = new _src.V3(11, -7, 13);
    var vb = new _src.V3(3, 4, 5);

    expectV3Equal(va.neg(), new _src.V3(-11, 7, -13));
    (0, _expect2.default)(va.length()).toEqual(Math.sqrt(339));
    expectV3Equal(vb.norm(), new _src.V3(3 / Math.sqrt(50), 4 / Math.sqrt(50), 5 / Math.sqrt(50)));

    expectV3Equal(va.multiply(3), new _src.V3(33, -21, 39));
    expectV3Equal(va.add(vb), new _src.V3(14, -3, 18));
    expectV3Equal(vb.sub(va), new _src.V3(-8, 11, -8));

    (0, _expect2.default)(va.dot(vb)).toEqual(70);
    expectV3Equal(va.cross(vb), new _src.V3(-87, -16, 65));
    expectV3Equal(new _src.V3(3, -3, 1).cross(new _src.V3(4, 9, 2)), new _src.V3(-15, -2, 39));
    expectV3Equal(new _src.V3(3, -3, 1).cross(new _src.V3(-12, 12, -4)), new _src.V3(0, 0, 0));
  });
});