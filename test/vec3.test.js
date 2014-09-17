var chai = require('chai');
var assert = chai.assert;

var Vec3 = require('..').Vec3;

// For easier deepEqual comparison
function toObj(v) {
  return {x: v.x, y: v.y, z: v.z};
}

describe('Vec3', function() {

  it('can be constructed using an array, params or an object', function() {

    var va = new Vec3(3,5,7);
    assert.deepEqual(toObj(va), {x: 3, y: 5, z: 7});

    var vb = new Vec3([-1, 7, -4]);
    assert.deepEqual(toObj(vb), {x: -1, y: 7, z: -4});

    var vc = new Vec3({x: 98, y: -5, z: 22});
    assert.deepEqual(toObj(vc), {x: 98, y: -5, z: 22});

  });

  it('is immutable', function() {

    var v = new Vec3(13, 23, 47);

    assert.throws(function() {
      v.x = 0;
    }, 'Vec3 is immutable');

    assert.throws(function() {
      v.y = 0;
    }, 'Vec3 is immutable');

    assert.throws(function() {
      v.z = 0;
    }, 'Vec3 is immutable');

  });

  it('has arithmetic functions', function() {

    var va = new Vec3(11, -7, 13);
    var vb = new Vec3(3, 4, 5);

    assert.deepEqual(toObj(va.negate()), {x: -11, y: 7, z: -13});
    assert.deepEqual(va.dot(vb), 70);
    assert.deepEqual(va.length(), Math.sqrt(339));
    assert.deepEqual(toObj(vb.normalize()), {x: 3/Math.sqrt(50), y: 4/Math.sqrt(50), z: 5/Math.sqrt(50)});
    assert.deepEqual(toObj(vb.add(va)), {x: 14, y: -3, z: 18});
    assert.deepEqual(toObj(vb.sub(va)), {x: -8, y: 11, z: -8});
    assert.deepEqual(toObj(va.sub(vb)), {x: 8, y: -11, z: 8});

    // Original vectors are unchanged
    assert.deepEqual(toObj(va), {x: 11, y: -7, z: 13});
    assert.deepEqual(toObj(vb), {x: 3, y: 4, z: 5});

  });

});
