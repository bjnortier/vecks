'use strict';

var chai = require('chai');
var assert = chai.assert;

var Box3 = require('..').Box3;

describe('Box3', function() {

  it('can be expaned by a point', function() {
    var p1 = [-1,-7,-13];
    var p2 = [5,11,17];
    var box = new Box3().expandByPoint(p1).expandByPoint(p2);
    assert.equal(box.min[0], -1);
    assert.equal(box.min[1], -7);
    assert.equal(box.min[2], -13);
    assert.equal(box.max[0], 5);
    assert.equal(box.max[1], 11);
    assert.equal(box.max[2], 17);
  });

  it('can be expanded by points', function() {
    var p1 = [-1,-7,-13];
    var p2 = [5,11,17];
    var box = new Box3().expandByPoints([p1, p2]);
    assert.equal(box.min[0], -1);
    assert.equal(box.min[1], -7);
    assert.equal(box.min[2], -13);
    assert.equal(box.max[0], 5);
    assert.equal(box.max[1], 11);
    assert.equal(box.max[2], 17);
  });

  it('can be constructed from an array of points', function() {
    var p1 = [-1,-7,-13];
    var p2 = [5,11,17];
    var box = Box3.fromPoints([p1, p2]);
    assert.equal(box.min[0], -1);
    assert.equal(box.min[1], -7);
    assert.equal(box.min[2], -13);
    assert.equal(box.max[0], 5);
    assert.equal(box.max[1], 11);
    assert.equal(box.max[2], 17);
  });

  it('can test whether a point lies inside it', function() {
    var p1 = [0,0,0];
    var p2 = [100,0,100];
    var box = Box3.fromPoints([p1, p2]);
    assert.isTrue(box.isPointInside([0,0,0]));
    assert.isTrue(box.isPointInside([100,0,100]));
    assert.isTrue(box.isPointInside([50,0,20]));
    assert.isFalse(box.isPointInside([-1,0,0]));
    assert.isFalse(box.isPointInside([101,0,0]));
  });

});
