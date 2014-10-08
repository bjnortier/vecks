var chai = require('chai');
var assert = chai.assert;

var Plane3 = require('..').Plane3;

// Handy assert for Plane3 deepEqual
assert.p3Equal = function(actual, expected) {
  assert.deepEqual({a: actual.a, b: actual.b, c: actual.c, d: actual.d}, expected);
};

// Equal within 9 decimals
assert.equalWithin1emin9 = function(actual, expected) {
  assert.equal(actual.toFixed(9), expected.toFixed(9));
};

describe('Plane3', function() {

  it('can be constructed using arguments or an object', function() {

    var pa = new Plane3(3,5,7,11);
    assert.p3Equal(pa, {a: 3, b: 5, c: 7, d: 11});

    var pb = new Plane3({a: 98, b: -5, c: 22, d: 29});
    assert.p3Equal(pb, {a: 98, b: -5, c: 22, d: 29});

    assert.equal('{"a":3,"b":5,"c":7,"d":11}', pa.toString());

  });

  it('is immutable', function() {

    var p = new Plane3(13, 23, 47, 31);

    assert.throws(function() {
      p.a = 0;
    }, 'Plane3 is immutable');

    assert.throws(function() {
      p.b = 0;
    }, 'Plane3 is immutable');

    assert.throws(function() {
      p.c = 0;
    }, 'Plane3 is immutable');

    assert.throws(function() {
      p.d = 0;
    }, 'Plane3 is immutable');

  });

});
