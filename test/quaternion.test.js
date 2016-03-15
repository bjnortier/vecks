var chai = require('chai');
var assert = chai.assert;

var quaternion = require('..').quaternion;

// Equal within 9 decimals
assert.equalWithin1emin9 = function(actual, expected) {
  assert.equal(actual.toFixed(9), expected.toFixed(9));
};

describe('quaternion', function() {

  it('can be constructed from axis angle', function() {
    var q2 = quaternion.fromAxisAngle([0,0,1], Math.PI/2);
    assert.equalWithin1emin9(0, q2[0]);
    assert.equalWithin1emin9(0, q2[1]);
    assert.equalWithin1emin9(1/Math.sqrt(2), q2[2]);
    assert.equalWithin1emin9(1/Math.sqrt(2), q2[3]);
  });

  it('can be applied to a vec3', function() {
    var q = quaternion.fromAxisAngle([0,0,1], Math.PI/2);
    var rotated = quaternion.applyToVec3(q, [1,0,0]);
    assert.equalWithin1emin9(0, rotated[0]);
    assert.equalWithin1emin9(1, rotated[1]);
    assert.equalWithin1emin9(0, rotated[2]);
  });

});
