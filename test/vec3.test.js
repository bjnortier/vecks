var chai = require('chai');
var assert = chai.assert;

var Vec3 = require('..').Vec3;

// Equal within 9 decimals
assert.equalWithin1emin9 = function(actual, expected) {
  assert.equal(actual.toFixed(9), expected.toFixed(9));
};

describe('Vec3', function() {

  it('can be constructed using an array, params or an object', function() {

    var va = new Vec3(3,5,7);
    assert.equal(va.x, 3);
    assert.equal(va.y, 5);
    assert.equal(va.z, 7);
    assert.isTrue(va.equals(new Vec3(3,5,7)));

    var vb = new Vec3([-1, 7, -4]);
    assert.isTrue(vb.equals(new Vec3(-1, 7, -4)));

    var vc = new Vec3({x: 98, y: -5, z: 22});
    assert.isTrue(vc.equals(new Vec3(98, -5, 22)));

    assert.throws(function() {
      new Vec3('foo');
    }, 'invalid construction of Vec3');

    assert.equal('{"x":3,"y":5,"z":7}', va.toString());

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

    assert.isTrue(va.negate().equals(new Vec3(-11, 7, -13)));
    assert.equal(va.dot(vb), 70);
    assert.isTrue(va.cross(vb).equals(new Vec3(-87, -16, 65)));
    assert.isTrue(new Vec3(3,-3,1).cross(new Vec3(4,9,2))
      .equals(new Vec3(-15, -2, 39)));
    assert.isTrue(new Vec3(3,-3,1).cross(new Vec3(-12,12,-4))
      .equals(new Vec3(0, 0, 0)));

    assert.equal(va.length(), Math.sqrt(339));
    assert.isTrue(vb.normalize().equals(
      new Vec3(3/Math.sqrt(50), 4/Math.sqrt(50), 5/Math.sqrt(50))));
    assert.isTrue(vb.add(va).equals(new Vec3(14, -3, 18)));
    assert.isTrue(vb.sub(va).equals(new Vec3(-8, 11, -8)));
    assert.isTrue(va.sub(vb).equals(new Vec3(8, -11, 8)));

    // Original vectors are unchanged
    assert.isTrue(va.equals(new Vec3(11, -7, 13)));
    assert.isTrue(vb.equals(new Vec3(3, 4, 5)));

  });

  it('has a right-hand angle function', function() {

    var normal = new Vec3(0,0,1);
    var va = new Vec3(1,0,0);
    var vb = new Vec3(1,1,0);
    var vc = new Vec3(0,1,0);
    var vd = new Vec3(-1,0,0);
    var ve = new Vec3(0,-1,0);

    assert.equalWithin1emin9(va.rightHandAngle(va, normal), 0);
    assert.equalWithin1emin9(va.rightHandAngle(vb, normal), Math.PI/4);
    assert.equalWithin1emin9(va.rightHandAngle(vc, normal), Math.PI/2);
    assert.equalWithin1emin9(va.rightHandAngle(vd, normal), Math.PI);
    assert.equalWithin1emin9(va.rightHandAngle(ve, normal), -Math.PI/2);

  });

  it('can be serialized to an array', function() {

    var v = new Vec3(1,2,3);
    assert.deepEqual(v.serialize(), [1,2,3]);

  });

});
