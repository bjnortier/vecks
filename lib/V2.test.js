'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _src = require('../src');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('V2', function () {
  it('constructs from arguments or an object', function () {
    var va = new _src.V2(7, -19);
    (0, _util.expectV2Equal)(va, new _src.V2({ x: 7, y: -19 }));
  });

  it('operations', function () {
    var va = new _src.V2(11, -7);
    var vb = new _src.V2(3, 4);
    (0, _util.expectV2Equal)(va, new _src.V2(11, -7));
    (0, _util.expectV2Equal)(va.neg(), new _src.V2(-11, 7));
    (0, _expect2.default)(va.dot(vb)).toEqual(5);
    (0, _expect2.default)(va.length()).toEqual(Math.sqrt(170));
    (0, _util.expectV2Equal)(va.multiply(3), new _src.V2(33, -21));
    (0, _util.expectV2Equal)(vb.norm(), new _src.V2(3 * 0.2, 4 * 0.2));
    (0, _util.expectV2Equal)(va.add(vb), new _src.V2(14, -3));
    (0, _util.expectV2Equal)(va.add(vb), new _src.V2(14, -3));
    (0, _util.expectV2Equal)(vb.sub(va), new _src.V2(-8, 11));
    (0, _util.expectV2Equal)(va.sub(vb), new _src.V2(8, -11));
  });
});