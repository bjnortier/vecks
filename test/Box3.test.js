import expect from 'expect'

import { Box3, V3 } from '../src'

describe('Box3', function () {
  it('can be expaned by a point', function () {
    const p1 = { x: -1, y: -7, z: -13 }
    const p2 = { x: 5, y: 11, z: 17 }
    const box = new Box3().expandByPoint(p1).expandByPoint(p2)
    expect(box.min.x).toEqual(-1)
    expect(box.min.y).toEqual(-7)
    expect(box.min.z).toEqual(-13)
    expect(box.max.x).toEqual(5)
    expect(box.max.y).toEqual(11)
    expect(box.max.z).toEqual(17)
  })

  it('can be expanded by points', function () {
    const p1 = { x: -1, y: -7, z: -13 }
    const p2 = { x: 5, y: 11, z: 17 }
    const box = new Box3().expandByPoints([p1, p2])
    expect(box.min.x).toEqual(-1)
    expect(box.min.y).toEqual(-7)
    expect(box.min.z).toEqual(-13)
    expect(box.max.x).toEqual(5)
    expect(box.max.y).toEqual(11)
    expect(box.max.z).toEqual(17)
  })

  it('can be constructed from an array of points', function () {
    const p1 = { x: -1, y: -7, z: -13 }
    const p2 = { x: 5, y: 11, z: 17 }
    const box = Box3.fromPoints([p1, p2])
    expect(box.min.x).toEqual(-1)
    expect(box.min.y).toEqual(-7)
    expect(box.min.z).toEqual(-13)
    expect(box.max.x).toEqual(5)
    expect(box.max.y).toEqual(11)
    expect(box.max.z).toEqual(17)
  })

  it('can test whether a point lies inside it', function () {
    var p1 = { x: 0, y: 0, z: 0 }
    var p2 = { x: 100, y: 0, z: 100 }
    var box = Box3.fromPoints([p1, p2])
    expect(box.isPointInside(new V3(0, 0, 0))).toBe(true)
    expect(box.isPointInside(new V3(100, 0, 100))).toBe(true)
    expect(box.isPointInside(new V3(50, 0, 20))).toBe(true)
    expect(box.isPointInside(new V3(-1, 0, 0))).toBe(false)
    expect(box.isPointInside(new V3(101, 0, 0))).toBe(false)
  })
//
})
