var chai = require('chai');
var assert = chai.assert;

var Vec3 = require('..').Vec3;
var Quaternion = require('..').Quaternion;

// Handy assert for Vec3 deepEqual
assert.qEqual = function(actual, expected) {
  assert.deepEqual({x: actual.x, y: actual.y, z: actual.z, w: actual.w}, expected);
};

// Equal within 9 decimals
assert.equalWithin1emin9 = function(actual, expected) {
  assert.equal(actual.toFixed(9), expected.toFixed(9));
};

describe.skip('Quaternion', function() {

  it('can be constructed', function() {

    var q1 = new Quaternion(3,5,7,11);
    assert.qEqual(q1, {x: 3, y: 5, z: 7, w: 11});
    assert.equal('{"x":3,"y":5,"z":7,"w":11}', q1.toString());

    var q2 = Quaternion.fromAxisAngle(new Vec3(0,0,1), Math.PI/2);
    assert.equalWithin1emin9(0, q2.x);
    assert.equalWithin1emin9(0, q2.y);
    assert.equalWithin1emin9(1/Math.sqrt(2), q2.z);
    assert.equalWithin1emin9(1/Math.sqrt(2), q2.w);

  });

  it('is immutable', function() {

    var q = new Quaternion(3,5,7,11);

    assert.throws(function() {
      q.x = 0;
    }, 'Quaternion is immutable');
    assert.throws(function() {
      q.y = 0;
    }, 'Quaternion is immutable');
    assert.throws(function() {
      q.z = 0;
    }, 'Quaternion is immutable');
    assert.throws(function() {
      q.w = 0;
    }, 'Quaternion is immutable');

  });


  it('can be applied to a Vec3', function() {
    var q = Quaternion.fromAxisAngle(new Vec3(0,0,1), Math.PI/2);
    var rotated = q.applyToVec3(new Vec3(1,0,0));
    assert.equalWithin1emin9(0, rotated.x);
    assert.equalWithin1emin9(1, rotated.y);
    assert.equalWithin1emin9(0, rotated.z);
  });

});
