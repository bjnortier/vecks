var chai = require('chai');
var assert = chai.assert;

var Vec3 = require('..').Vec3;
var Plane3 = require('..').Plane3;

// Handy assert for Plane3 deepEqual
assert.p3Equal = function(actual, expected) {
  assert.deepEqual({a: actual.a, b: actual.b, c: actual.c, d: actual.d}, expected);
};

describe('Plane3', function() {

  it('can be constructed using arguments or an object', function() {

    var pa = new Plane3(3,5,7,11);
    assert.p3Equal(pa, {a: 3, b: 5, c: 7, d: 11});

    var pb = new Plane3({a: 98, b: -5, c: 22, d: 29});
    assert.p3Equal(pb, {a: 98, b: -5, c: 22, d: 29});

    assert.equal('{"a":3,"b":5,"c":7,"d":11}', pa.toString());

  });

  it('is immutable', function() {

    var p = new Plane3(13, 23, 47, 31);

    assert.throws(function() {
      p.a = 0;
    }, 'Plane3 is immutable');

    assert.throws(function() {
      p.b = 0;
    }, 'Plane3 is immutable');

    assert.throws(function() {
      p.c = 0;
    }, 'Plane3 is immutable');

    assert.throws(function() {
      p.d = 0;
    }, 'Plane3 is immutable');

  });

  it('can be constructed from 3 points', function() {
    var pa = Plane3.fromPoints(new Vec3(0,0,0), new Vec3(1,0,0), new Vec3(1,1,0));
    assert.p3Equal(pa, {a: 0, b: 0, c: 1, d: 0});

    var pb = Plane3.fromPoints(new Vec3(0,0,10), new Vec3(1,0,10), new Vec3(1,1,10));
    assert.p3Equal(pb, {a: 0, b: 0, c: 1, d: -10});
  });

  it('can be constructed from a point a normal', function() {
    var pa = Plane3.fromPointAndNormal(new Vec3(0,0,0), new Vec3(0,0,1));
    assert.p3Equal(pa, {a: 0, b: 0, c: 1, d: 0});

    var pb = Plane3.fromPointAndNormal(new Vec3(0,0,10), new Vec3(1,1,1));
    assert.p3Equal(pb, {a: 1, b: 1, c: 1, d: -10});
  });

  it('can compute the distance to a point', function() {

    var pa = new Plane3(0,0,1,0);
    assert.equal(pa.distanceToPoint(new Vec3(0,0,0)), 0);
    assert.equal(pa.distanceToPoint(new Vec3(10,10,0)), 0);
    assert.equal(pa.distanceToPoint(new Vec3(0,0,1)), 1);
    assert.equal(pa.distanceToPoint(new Vec3(-10,-10,1)), 1);

    var pb = new Plane3(0,0,1,-10);
    assert.equal(pb.distanceToPoint(new Vec3(0,0,0)), -10);
    assert.equal(pb.distanceToPoint(new Vec3(10,10,0)), -10);
    assert.equal(pb.distanceToPoint(new Vec3(0,0,15)), 5);
    assert.equal(pb.distanceToPoint(new Vec3(-10,-10,15)), 5);

    var pc = new Plane3(1,1,0,0);
    assert.equal(pc.distanceToPoint(new Vec3(1,1,0)).toFixed(6), Math.sqrt(2).toFixed(6));
  });

});
