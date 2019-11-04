import expect from 'expect'

import { Box3, V3 } from '../src'

describe('Box3', () => {
  it('can be constructed from {x,y} objects', () => {
    expect(() => new Box3(1, [])).toThrow('Illegal construction - must use { x, y, z } objects')
    const a = { x: 3, y: 7, z: 11 }
    const b = { x: 13, y: 17, z: 19 }
    const x = new Box3(a, b)
    // Check object is copied
    a.x = 4
    a.y = 5
    a.z = 6
    b.x = 7
    b.y = 8
    b.z = 9
    expect(x.min.x).toEqual(3)
    expect(x.min.y).toEqual(7)
    expect(x.min.z).toEqual(11)
    expect(x.max.x).toEqual(13)
    expect(x.max.y).toEqual(17)
    expect(x.max.z).toEqual(19)
    expect(x.valid).toEqual(true)
  })

  it('has has an "invalid" state', () => {
    const box = new Box3()
    expect(box.valid).toEqual(false)
  })

  it('can be expaned by a point', () => {
    const p1 = { x: -1, y: -7, z: -13 }
    const p2 = { x: 5, y: 11, z: 17 }
    const box = new Box3().expandByPoint(p1).expandByPoint(p2)
    expect(box.min.x).toEqual(-1)
    expect(box.min.y).toEqual(-7)
    expect(box.min.z).toEqual(-13)
    expect(box.max.x).toEqual(5)
    expect(box.max.y).toEqual(11)
    expect(box.max.z).toEqual(17)
    expect(box.valid).toEqual(true)
  })

  it('can be expanded by points', () => {
    const p1 = { x: -1, y: -7, z: -13 }
    const p2 = { x: 5, y: 11, z: 17 }
    const box = new Box3().expandByPoints([p1, p2])
    expect(box.min.x).toEqual(-1)
    expect(box.min.y).toEqual(-7)
    expect(box.min.z).toEqual(-13)
    expect(box.max.x).toEqual(5)
    expect(box.max.y).toEqual(11)
    expect(box.max.z).toEqual(17)
    expect(box.valid).toEqual(true)
  })

  it('can be constructed from an array of points', () => {
    const p1 = { x: -1, y: -7, z: -13 }
    const p2 = { x: 5, y: 11, z: 17 }
    const box = Box3.fromPoints([p1, p2])
    expect(box.min.x).toEqual(-1)
    expect(box.min.y).toEqual(-7)
    expect(box.min.z).toEqual(-13)
    expect(box.max.x).toEqual(5)
    expect(box.max.y).toEqual(11)
    expect(box.max.z).toEqual(17)
    expect(box.valid).toEqual(true)
  })

  it('can test whether a point lies inside it', () => {
    var p1 = { x: 0, y: 0, z: 0 }
    var p2 = { x: 100, y: 0, z: 100 }
    var box = Box3.fromPoints([p1, p2])
    expect(box.isPointInside(new V3(0, 0, 0))).toBe(true)
    expect(box.isPointInside(new V3(100, 0, 100))).toBe(true)
    expect(box.isPointInside(new V3(50, 0, 20))).toBe(true)
    expect(box.isPointInside(new V3(-1, 0, 0))).toBe(false)
    expect(box.isPointInside(new V3(101, 0, 0))).toBe(false)
  })

  it('has an equals method', () => {
    expect(() => new Box3().equals(new Box3())).toThrow('Box3 is invalid')
    expect(new Box3(new V3(2, 3, 5), new V3(7, 11, 13))
      .equals(new Box3(new V3(2, 3, 5), new V3(7, 11, 13))))
      .toEqual(true)
  })

  it('has width, depth and height', () => {
    const b = new Box3(new V3(2, 3, 5), new V3(7, 11, 13))
    expect(b.width).toEqual(5)
    expect(b.depth).toEqual(8)
    expect(b.height).toEqual(8)

    expect(() => new Box3().width).toThrow('Box3 is invalid')
    expect(() => new Box3().height).toThrow('Box3 is invalid')
    expect(() => new Box3().height).toThrow('Box3 is invalid')
  })
//
})
