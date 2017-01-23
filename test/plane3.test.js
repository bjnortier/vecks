// var chai = require('chai')
// var assert = chai.assert
//
// var plane3 = require('..').plane3
// var fromPoints = plane3.fromPoints
// var fromPointAndNormal = plane3.fromPointAndNormal
// var distanceToPoint = plane3.distanceToPoint
//
// // because assert.deepEqual([0], [-0]) fails....
// assert.arrayEqual = function(a, b) {
//   assert.equal(a.length, b.length)
//   for(var i = 0; i < a.length; ++i) {
//     assert.equal(a[i], b[i])
//   }
// }
//
// describe('Plane3', function() {
//
//   it('can be constructed from 3 points', function() {
//     var pa = fromPoints([0,0,0], [1,0,0], [1,1,0])
//     assert.arrayEqual(pa, [0, 0, 1, 0])
//
//     var pb = fromPoints([0,0,10], [1,0,10], [1,1,10])
//     assert.arrayEqual(pb, [0, 0, 1, -10])
//   })
//
//   it('can be constructed from a point a normal', function() {
//     var pa = fromPointAndNormal([0,0,0], [0,0,1])
//     assert.arrayEqual(pa, [0, 0, 1, 0])
//
//     var pb = fromPointAndNormal([0,0,10], [1,1,1])
//     assert.arrayEqual(pb, [1, 1, 1, -10])
//   })
//
//   it('can compute the distance to a point', function() {
//
//     var pa = [0,0,1,0]
//     assert.equal(distanceToPoint(pa, [0,0,0]), 0)
//     assert.equal(distanceToPoint(pa, [10,10,0]), 0)
//     assert.equal(distanceToPoint(pa, [0,0,1]), 1)
//     assert.equal(distanceToPoint(pa, [-10,-10,1]), 1)
//
//     var pb = [0,0,1,-10]
//     assert.equal(distanceToPoint(pb, [0,0,0]), -10)
//     assert.equal(distanceToPoint(pb, [10,10,0]), -10)
//     assert.equal(distanceToPoint(pb, [0,0,15]), 5)
//     assert.equal(distanceToPoint(pb, [-10,-10,15]), 5)
//
//     var pc = [1,1,0,0]
//     assert.equal(distanceToPoint(pc, [1,1,0]).toFixed(6), Math.sqrt(2).toFixed(6))
//   })
//
// })
