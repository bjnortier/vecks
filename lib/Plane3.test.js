'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _src = require('../src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expectPlane3Equal = function expectPlane3Equal(p1, p2) {
  (0, _expect2.default)(p1.a).toEqual(p2.a);
  (0, _expect2.default)(p1.b).toEqual(p2.b);
  (0, _expect2.default)(p1.c).toEqual(p2.c);
  (0, _expect2.default)(p1.d).toEqual(p2.d);
};

describe('Plane3', function () {
  it('can be constructed from arguments', function () {
    var pa = new _src.Plane3(7, 11, -19, 23);
    (0, _expect2.default)(pa.a).toEqual(7);
    (0, _expect2.default)(pa.b).toEqual(11);
    (0, _expect2.default)(pa.c).toEqual(-19);
    (0, _expect2.default)(pa.d).toEqual(23);
  });

  it('can be constructed from a point a norma', function () {
    var pa = _src.Plane3.fromPoints(new _src.V3(0, 0, 0), new _src.V3(1, 0, 0), new _src.V3(1, 1, 0));
    expectPlane3Equal(pa, new _src.Plane3(0, 0, 1, 0));

    var pb = _src.Plane3.fromPoints(new _src.V3(0, 0, 10), new _src.V3(1, 0, 10), new _src.V3(1, 1, 10));
    expectPlane3Equal(pb, new _src.Plane3(0, 0, 1, -10));
  });

  it('can be constructed from a point a normal', function () {
    var pa = _src.Plane3.fromPointAndNormal(new _src.V3(0, 0, 0), new _src.V3(0, 0, 1));
    expectPlane3Equal(pa, new _src.Plane3(0, 0, 1, 0));

    var pb = _src.Plane3.fromPointAndNormal(new _src.V3(0, 0, 10), new _src.V3(1, 1, 1));
    expectPlane3Equal(pb, new _src.Plane3(1, 1, 1, -10));
  });

  it('can compute the distance to a point', function () {
    var pa = new _src.Plane3(0, 0, 1, 0);
    (0, _expect2.default)(pa.distanceToPoint(new _src.V3(0, 0, 0))).toEqual(0);
    (0, _expect2.default)(pa.distanceToPoint(new _src.V3(10, 10, 0))).toEqual(0);
    (0, _expect2.default)(pa.distanceToPoint(new _src.V3(0, 0, 1))).toEqual(1);
    (0, _expect2.default)(pa.distanceToPoint(new _src.V3(-10, -10, 1))).toEqual(1);

    var pb = new _src.Plane3(0, 0, 1, -10);
    (0, _expect2.default)(pb.distanceToPoint(new _src.V3(0, 0, 0))).toEqual(-10);
    (0, _expect2.default)(pb.distanceToPoint(new _src.V3(10, 10, 0))).toEqual(-10);
    (0, _expect2.default)(pb.distanceToPoint(new _src.V3(0, 0, 15))).toEqual(5);
    (0, _expect2.default)(pb.distanceToPoint(new _src.V3(-10, -10, 15))).toEqual(5);

    var pc = new _src.Plane3(1, 1, 0, 0);
    (0, _expect2.default)(pc.distanceToPoint(new _src.V3(1, 1, 0)).toFixed(6)).toEqual(Math.sqrt(2).toFixed(6));
  });
});