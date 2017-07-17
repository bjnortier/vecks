'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _src = require('../src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Box2', function () {
  it('can be expaned by a point', function () {
    var p1 = { x: -1, y: -7 };
    var p2 = { x: 5, y: 11 };
    var box = new _src.Box2().expandByPoint(p1).expandByPoint(p2);
    (0, _expect2.default)(box.min.x).toEqual(-1);
    (0, _expect2.default)(box.min.y).toEqual(-7);
    (0, _expect2.default)(box.max.x).toEqual(5);
    (0, _expect2.default)(box.max.y).toEqual(11);
  });

  it('can be expanded by points', function () {
    var p1 = { x: -1, y: -7 };
    var p2 = { x: 5, y: 11 };
    var box = new _src.Box2().expandByPoints([p1, p2]);
    (0, _expect2.default)(box.min.x).toEqual(-1);
    (0, _expect2.default)(box.min.y).toEqual(-7);
    (0, _expect2.default)(box.max.x).toEqual(5);
    (0, _expect2.default)(box.max.y).toEqual(11);
  });

  it('can be constructed from an array of points', function () {
    var p1 = { x: -1, y: -7 };
    var p2 = { x: 5, y: 11 };
    var box = _src.Box2.fromPoints([p1, p2]);
    (0, _expect2.default)(box.min.x).toEqual(-1);
    (0, _expect2.default)(box.min.y).toEqual(-7);
    (0, _expect2.default)(box.max.x).toEqual(5);
    (0, _expect2.default)(box.max.y).toEqual(11);
  });

  it('can test whether a point lies inside it', function () {
    var p1 = { x: 5, y: 11 };
    var p2 = { x: 100, y: 50 };
    var box = _src.Box2.fromPoints([p1, p2]);
    (0, _expect2.default)(box.isPointInside(new _src.V2(100, 11))).toBe(true);
    (0, _expect2.default)(box.isPointInside(new _src.V2(5, 50))).toBe(true);
    (0, _expect2.default)(box.isPointInside(new _src.V2(50, 20))).toBe(true);
    (0, _expect2.default)(box.isPointInside(new _src.V2(0, 0))).toBe(false);
    (0, _expect2.default)(box.isPointInside(new _src.V2(-1, 10))).toBe(false);
    (0, _expect2.default)(box.isPointInside(new _src.V2(101, 51))).toBe(false);
  });
});