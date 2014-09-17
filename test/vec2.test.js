var chai = require('chai');
var assert = chai.assert;

var Vec2 = require('..').Vec2;

// Handy assert for Vec2 deepEqual
assert.v2Equal = function(actual, expected) {
  assert.deepEqual({x: actual.x, y: actual.y}, expected);
};

describe('Vec2', function() {

  it('can be constructed using an array, params or an object', function() {

    var va = new Vec2(3,5);
    assert.v2Equal(va, {x: 3, y: 5});

    var vb = new Vec2([-1, 7]);
    assert.v2Equal(vb, {x: -1, y: 7});

    var vc = new Vec2({x: 98, y: -5});
    assert.v2Equal(vc, {x: 98, y: -5});

    assert.equal('{"x":3,"y":5}', va.toString());

  });

  it('is immutable', function() {

    var va = new Vec2(13, 23);

    assert.throws(function() {
      va.x = 0;
    }, 'Vec2 is immutable');

    assert.throws(function() {
      va.y = 0;
    }, 'Vec2 is immutable');

  });

  it('has arithmetic functions', function() {

    var va = new Vec2(11, -7);
    var vb = new Vec2(3, 4);

    assert.v2Equal(va.negate(), {x: -11, y: 7});
    assert.equal(va.dot(vb), 5);
    assert.equal(va.length(), Math.sqrt(170));
    assert.v2Equal(vb.normalize(), {x: 3*0.2, y: 4*0.2});
    assert.v2Equal(vb.add(va), {x: 14, y: -3});
    assert.v2Equal(vb.sub(va), {x: -8, y: 11});
    assert.v2Equal(va.sub(vb), {x: 8, y: -11});

    // Original vectors are unchanged
    assert.v2Equal(va, {x: 11, y: -7});
    assert.v2Equal(vb, {x: 3, y: 4});

  });

});
