var chai = require('chai');
var assert = chai.assert;

var Vec2 = require('..').Vec2;

// For easier deepEqual comparison
function toObj(v) {
  return {x: v.x, y: v.y};
}

describe('Vec2', function() {

  it('can be constructed using an array, params or an object', function() {

    var va = new Vec2(3,5);
    assert.deepEqual(toObj(va), {x: 3, y: 5});

    var vb = new Vec2([-1, 7]);
    assert.deepEqual(toObj(vb), {x: -1, y: 7});

    var vc = new Vec2({x: 98, y: -5});
    assert.deepEqual(toObj(vc), {x: 98, y: -5});

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

    assert.deepEqual(toObj(va.negate()), {x: -11, y: 7});
    assert.deepEqual(va.dot(vb), 5);
    assert.deepEqual(va.length(), Math.sqrt(170));
    assert.deepEqual(toObj(vb.normalize()), {x: 3*0.2, y: 4*0.2});
    assert.deepEqual(toObj(vb.add(va)), {x: 14, y: -3});
    assert.deepEqual(toObj(vb.sub(va)), {x: -8, y: 11});
    assert.deepEqual(toObj(va.sub(vb)), {x: 8, y: -11});

    // Original vectors are unchanged
    assert.deepEqual(toObj(va), {x: 11, y: -7});
    assert.deepEqual(toObj(vb), {x: 3, y: 4});

  });

});
