var chai = require('chai');
var assert = chai.assert;

var Box2 = require('..').Box2;
var Vec2 = require('..').Vec2;

describe.skip('Box2', function() {

  it('can be expaned by a point', function() {

    var p1 = new Vec2(-1,-7);
    var p2 = new Vec2(5,11);
    var box = new Box2().expandByPoint(p1).expandByPoint(p2);

    assert.equal(box.min.x, -1);
    assert.equal(box.min.y, -7);
    assert.equal(box.max.x, 5);
    assert.equal(box.max.y, 11);

  });

  it('can be constructed from an array of points', function() {

    var p1 = new Vec2(-1,-7);
    var p2 = new Vec2(5,11);
    var box = Box2.fromPoints([p1, p2]);

    assert.equal(box.min.x, -1);
    assert.equal(box.min.y, -7);
    assert.equal(box.max.x, 5);
    assert.equal(box.max.y, 11);

  });

  it('can be expanded from by an array of points (inclusive)', function() {

    var p1 = new Vec2(-1,-7);
    var p2 = new Vec2(5,11);
    var box1 = Box2.fromPoints([p1, p2]);
    var box2 = box1.expandByPoints([new Vec2(0,0), new Vec2(-100, 20)]);

    assert.equal(box2.min.x, -100);
    assert.equal(box2.min.y, -7);
    assert.equal(box2.max.x, 5);
    assert.equal(box2.max.y, 20);

  });

  it('can test whether a point lies inside it (exclusive)', function() {

    var p1 = new Vec2(0,0);
    var p2 = new Vec2(100,100);
    var box = Box2.fromPoints([p1, p2]);
    var inclusive = false;

    assert.isFalse(box.isPointInside(new Vec2(0,0), inclusive));
    assert.isFalse(box.isPointInside(new Vec2(100,0), inclusive));
    assert.isTrue(box.isPointInside(new Vec2(50,10), inclusive));

    assert.isFalse(box.isPointInside(new Vec2(-1,0), inclusive));
    assert.isFalse(box.isPointInside(new Vec2(101,0), inclusive));

    var b2 = Box2.fromPoints([new Vec2(0,0), new Vec2(20, 10)]);
    assert.isFalse(b2.isPointInside(new Vec2(10,10), inclusive));
  });

});
