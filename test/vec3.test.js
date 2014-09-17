var chai = require('chai');
var assert = chai.assert;

var Vec3 = require('..').Vec3;

// Handy assert for Vec3 deepEqual
assert.v3Equal = function(actual, expected) {
  assert.deepEqual({x: actual.x, y: actual.y, z: actual.z}, expected);
};

// Equal within 9 decimals
assert.equalWithin1emin9 = function(actual, expected) {
  assert.equal(actual.toFixed(9), expected.toFixed(9));
};

describe('Vec3', function() {

  it('can be constructed using an array, params or an object', function() {

    var va = new Vec3(3,5,7);
    assert.v3Equal(va, {x: 3, y: 5, z: 7});

    var vb = new Vec3([-1, 7, -4]);
    assert.v3Equal(vb, {x: -1, y: 7, z: -4});

    var vc = new Vec3({x: 98, y: -5, z: 22});
    assert.v3Equal(vc, {x: 98, y: -5, z: 22});

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

    assert.v3Equal(va.negate(), {x: -11, y: 7, z: -13});
    assert.equal(va.dot(vb), 70);
    assert.v3Equal(va.cross(vb), {x: -87, y: -16, z: 65});
    assert.v3Equal(new Vec3(3,-3,1).cross(new Vec3(4,9,2)), 
      {x: -15, y: -2, z: 39});
    assert.v3Equal(new Vec3(3,-3,1).cross(new Vec3(-12,12,-4)), 
      {x: 0, y: 0, z: 0});


    assert.equal(va.length(), Math.sqrt(339));
    assert.v3Equal(vb.normalize(), {x: 3/Math.sqrt(50), y: 4/Math.sqrt(50), z: 5/Math.sqrt(50)});
    assert.v3Equal(vb.add(va), {x: 14, y: -3, z: 18});
    assert.v3Equal(vb.sub(va), {x: -8, y: 11, z: -8});
    assert.v3Equal(va.sub(vb), {x: 8, y: -11, z: 8});

    // Original vectors are unchanged
    assert.v3Equal(va, {x: 11, y: -7, z: 13});
    assert.v3Equal(vb, {x: 3, y: 4, z: 5});

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

});

