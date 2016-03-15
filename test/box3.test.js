var chai = require('chai');
var assert = chai.assert;

var Box3 = require('..').Box3;
var Vec3 = require('..').Vec3;

describe.skip('Box3', function() {

  it('can be expaned by a point', function() {

    var p1 = new Vec3(-1,-7,-13);
    var p2 = new Vec3(5,11,17);
    var box = new Box3().expandByPoint(p1).expandByPoint(p2);

    assert.equal(box.min.x, -1);
    assert.equal(box.min.y, -7);
    assert.equal(box.min.z, -13);
    assert.equal(box.max.x, 5);
    assert.equal(box.max.y, 11);
    assert.equal(box.max.z, 17);

  });

  it('can be constructed from an array of points', function() {

    var p1 = new Vec3(-1,-7,-13);
    var p2 = new Vec3(5,11,17);
    var box = Box3.fromPoints([p1, p2]);

    assert.equal(box.min.x, -1);
    assert.equal(box.min.y, -7);
    assert.equal(box.min.z, -13);
    assert.equal(box.max.x, 5);
    assert.equal(box.max.y, 11);
    assert.equal(box.max.z, 17);

  });

  it('can test whether a point lies inside it', function() {

    var p1 = new Vec3(0,0,0);
    var p2 = new Vec3(100,0,100);
    var box = Box3.fromPoints([p1, p2]);

    assert.isTrue(box.isPointInside(new Vec3(0,0,0)));
    assert.isTrue(box.isPointInside(new Vec3(100,0,100)));
    assert.isTrue(box.isPointInside(new Vec3(50,0,20)));

    assert.isFalse(box.isPointInside(new Vec3(-1,0,0)));
    assert.isFalse(box.isPointInside(new Vec3(101,0,0)));

  });

});
