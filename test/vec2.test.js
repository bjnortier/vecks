var chai = require('chai');
var assert = chai.assert;

var Vec2 = require('..').Vec2;

console.log(Vec2);

// For easier deepEqual comparison
function toObj(v) {
  return {x: v.x, y: v.y};
}

describe('Vec2', function() {

  it('can be constructed using an array, params or an object', function() {

    var v1 = new Vec2(3,5);
    assert.deepEqual(toObj(v1), {x: 3, y: 5});

    var v2 = new Vec2([-1, 7]);
    assert.deepEqual(toObj(v2), {x: -1, y: 7});

    var v3 = new Vec2({x: 98, y: -5});
    assert.deepEqual(toObj(v3), {x: 98, y: -5});

  });

  it('is immutable', function() {

    var v1 = new Vec2(13, 23);

    assert.throws(function() {
      v1.x = 0;
    }, 'Vec2 is immutable');

    assert.throws(function() {
      v1.y = 0;
    }, 'Vec2 is immutable');

  });

  it('has arithmetic functions', function() {

    var v1 = new Vec2(11, -7);
    var v2 = new Vec2(3, 4);

    assert.deepEqual(toObj(v1.negate()), {x: -11, y: 7});
    assert.deepEqual(v1.dot(v2), 5);
    assert.deepEqual(v1.length(), Math.sqrt(170));
    assert.deepEqual(toObj(v2.normalize()), {x: 3*0.2, y: 4*0.2});
    assert.deepEqual(toObj(v2.add(v1)), {x: 14, y: -3});
    assert.deepEqual(toObj(v2.sub(v1)), {x: -8, y: 11});
    assert.deepEqual(toObj(v1.sub(v2)), {x: 8, y: -11});

    // Original vectors are unchanged
    assert.deepEqual(toObj(v1), {x: 11, y: -7});
    assert.deepEqual(toObj(v2), {x: 3, y: 4});

  });

});
