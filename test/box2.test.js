// 'use strict'
//
// var chai = require('chai')
// var assert = chai.assert
//
// var Box2 = require('..').Box2
//
// describe('Box2', function() {
//
//   it('can be expaned by a point', function() {
//     var p1 = [-1,-7]
//     var p2 = [5,11]
//     var box = new Box2().expandByPoint(p1).expandByPoint(p2)
//     assert.equal(box.min[0], -1)
//     assert.equal(box.min[1], -7)
//     assert.equal(box.max[0], 5)
//     assert.equal(box.max[1], 11)
//   })
//
//   it('can be expaned by points', function() {
//     var p1 = [-1,-7]
//     var p2 = [5,11]
//     var box = new Box2().expandByPoints([p1, p2])
//     assert.equal(box.min[0], -1)
//     assert.equal(box.min[1], -7)
//     assert.equal(box.max[0], 5)
//     assert.equal(box.max[1], 11)
//   })
//
//   it('can be constructed from an array of points', function() {
//     var p1 = [-1,-7]
//     var p2 = [5,11]
//     var box = Box2.fromPoints([p1, p2])
//     assert.equal(box.min[0], -1)
//     assert.equal(box.min[1], -7)
//     assert.equal(box.max[0], 5)
//     assert.equal(box.max[1], 11)
//   })
//
//   it('can be expanded from by an array of points (inclusive)', function() {
//     var p1 = [-1,-7]
//     var p2 = [5,11]
//     var box1 = Box2.fromPoints([p1, p2])
//     var box2 = box1.expandByPoints([[0, 0], [-100, 20]])
//     assert.equal(box2.min[0], -100)
//     assert.equal(box2.min[1], -7)
//     assert.equal(box2.max[0], 5)
//     assert.equal(box2.max[1], 20)
//   })
//
//   it('can test whether a point lies inside it (exclusive)', function() {
//
//     var p1 = [0,0]
//     var p2 = [100,100]
//     var box = Box2.fromPoints([p1, p2])
//     var inclusive = false
//
//     assert.isFalse(box.isPointInside([0, 0], inclusive))
//     assert.isFalse(box.isPointInside([100, 0], inclusive))
//     assert.isTrue(box.isPointInside([50, 10], inclusive))
//
//     assert.isFalse(box.isPointInside((-1,0), inclusive))
//     assert.isFalse(box.isPointInside([101, 0], inclusive))
//
//     var b2 = Box2.fromPoints([[0, 0], [20, 10]])
//     assert.isFalse(b2.isPointInside([10, 10], inclusive))
//   })
//
// })
