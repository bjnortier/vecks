'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _src = require('../src');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Line2', function () {
  it('expects V2 instances', function () {
    (0, _expect2.default)(function () {
      new _src.Line2(); // eslint-disable-line no-new
    }).toThrow('expected first argument to be an instance of vecks.V2');
    (0, _expect2.default)(function () {
      new _src.Line2(new _src.V2()); // eslint-disable-line no-new
    }).toThrow('expected second argument to be an instance of vecks.V2');
  });

  it('has a length', function () {
    var a = new _src.Line2(new _src.V2(0, 0), new _src.V2(1, 0));
    (0, _expect2.default)(a.length()).toEqual(1);
  });

  it('can caculate intersections', function () {
    (0, _expect2.default)(function () {
      new _src.Line2(new _src.V2(0, 0), new _src.V2(1, 0)).getIntersection([]); // eslint-disable-line no-new
    }).toThrow('expected argument to be an instance of vecks.Line2');

    (0, _expect2.default)(new _src.Line2(new _src.V2(0, 0), new _src.V2(1, 0)).getIntersection(new _src.Line2(new _src.V2(0, 0), new _src.V2(1, 0)))).toEqual(null);

    (0, _util.expectV2Equal)(new _src.Line2(new _src.V2(0, 0), new _src.V2(1, 1)).getIntersection(new _src.Line2(new _src.V2(0, 1), new _src.V2(1, 0))), new _src.V2(0.5, 0.5));
  });
});