var chai = require('chai');
var assert = chai.assert;

var v3 = require('..').vec3;

// Equal within 9 decimals
assert.equalWithin1emin9 = function(actual, expected) {
  assert.equal(actual.toFixed(9), expected.toFixed(9));
};

describe('vec3', function() {

  it('operations', function() {

    var va = [11, -7, 13];
    var vb = [3, 4, 5];

    assert.deepEqual(v3.neg(va, vb), [-11, 7, -13]);
    assert.equal(v3.dot(va, vb), 70);
    assert.deepEqual(v3.cross(va, vb), [-87, -16, 65]);
    assert.deepEqual(v3.cross([3,-3,1], [4,9,2]), [-15, -2, 39]);
    assert.deepEqual(v3.cross([3,-3,1], [-12,12,-4]), [0, 0, 0]);
    assert.equal(v3.length(va), Math.sqrt(339));
    assert.deepEqual(v3.multiply(va, 3), [33, -21, 39]);
    assert.deepEqual(v3.norm(vb), [3/Math.sqrt(50), 4/Math.sqrt(50), 5/Math.sqrt(50)]);
    assert.deepEqual(v3.add(vb, va), [14, -3, 18]);
    assert.deepEqual(v3.sub(vb, va), [-8, 11, -8]);
    assert.deepEqual(v3.sub(va, vb), [8, -11, 8]);
  });

});
