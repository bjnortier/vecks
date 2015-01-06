var chai = require('chai');
var assert = chai.assert;

var Vec2 = require('..').Vec2;

describe('Vec2', function() {

  it('can be constructed using an array, params or an object', function() {

    var va = new Vec2(3,5);
    assert.equal(va.x, 3);
    assert.equal(va.y, 5);
    assert.isTrue(va.equals(new Vec2(3,5)));

    var vb = new Vec2([-1, 7]);
    assert.isTrue(vb.equals(new Vec2(-1, 7)));

    var vc = new Vec2({x: 98, y: -5});
    assert.isTrue(vc.equals(new Vec2(98, -5)));

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

    assert.isTrue(va.negate().equals(new Vec2(-11, 7)));
    assert.equal(va.dot(vb), 5);
    assert.equal(va.length(), Math.sqrt(170));
    assert.isTrue(vb.normalize().equals(new Vec2(3*0.2, 4*0.2)));
    assert.isTrue(vb.add(va).equals(new Vec2(14, -3)));
    assert.isTrue(vb.sub(va).equals(new Vec2(-8, 11)));
    assert.isTrue(va.sub(vb).equals(new Vec2(8, -11)));

    // Original vectors are unchanged
    assert.isTrue(va.equals(new Vec2(11, -7)));
    assert.isTrue(vb.equals(new Vec2(3, 4)));

  });

});
