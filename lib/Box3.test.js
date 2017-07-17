'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _src = require('../src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Box3', function () {
  it('can be expaned by a point', function () {
    var p1 = { x: -1, y: -7, z: -13 };
    var p2 = { x: 5, y: 11, z: 17 };
    var box = new _src.Box3().expandByPoint(p1).expandByPoint(p2);
    (0, _expect2.default)(box.min.x).toEqual(-1);
    (0, _expect2.default)(box.min.y).toEqual(-7);
    (0, _expect2.default)(box.min.z).toEqual(-13);
    (0, _expect2.default)(box.max.x).toEqual(5);
    (0, _expect2.default)(box.max.y).toEqual(11);
    (0, _expect2.default)(box.max.z).toEqual(17);
  });

  it('can be expanded by points', function () {
    var p1 = { x: -1, y: -7, z: -13 };
    var p2 = { x: 5, y: 11, z: 17 };
    var box = new _src.Box3().expandByPoints([p1, p2]);
    (0, _expect2.default)(box.min.x).toEqual(-1);
    (0, _expect2.default)(box.min.y).toEqual(-7);
    (0, _expect2.default)(box.min.z).toEqual(-13);
    (0, _expect2.default)(box.max.x).toEqual(5);
    (0, _expect2.default)(box.max.y).toEqual(11);
    (0, _expect2.default)(box.max.z).toEqual(17);
  });

  it('can be constructed from an array of points', function () {
    var p1 = { x: -1, y: -7, z: -13 };
    var p2 = { x: 5, y: 11, z: 17 };
    var box = _src.Box3.fromPoints([p1, p2]);
    (0, _expect2.default)(box.min.x).toEqual(-1);
    (0, _expect2.default)(box.min.y).toEqual(-7);
    (0, _expect2.default)(box.min.z).toEqual(-13);
    (0, _expect2.default)(box.max.x).toEqual(5);
    (0, _expect2.default)(box.max.y).toEqual(11);
    (0, _expect2.default)(box.max.z).toEqual(17);
  });

  it('can test whether a point lies inside it', function () {
    var p1 = { x: 0, y: 0, z: 0 };
    var p2 = { x: 100, y: 0, z: 100 };
    var box = _src.Box3.fromPoints([p1, p2]);
    (0, _expect2.default)(box.isPointInside(new _src.V3(0, 0, 0))).toBe(true);
    (0, _expect2.default)(box.isPointInside(new _src.V3(100, 0, 100))).toBe(true);
    (0, _expect2.default)(box.isPointInside(new _src.V3(50, 0, 20))).toBe(true);
    (0, _expect2.default)(box.isPointInside(new _src.V3(-1, 0, 0))).toBe(false);
    (0, _expect2.default)(box.isPointInside(new _src.V3(101, 0, 0))).toBe(false);
  });
  //
});