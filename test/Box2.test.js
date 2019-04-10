import expect from 'expect'

import { Box2, V2 } from '../src'

describe('Box2', () => {
  it('can be expanded by a point', () => {
    const p1 = { x: -1, y: -7 }
    const p2 = { x: 5, y: 11 }
    const box = new Box2().expandByPoint(p1).expandByPoint(p2)
    expect(box.min.x).toEqual(-1)
    expect(box.min.y).toEqual(-7)
    expect(box.max.x).toEqual(5)
    expect(box.max.y).toEqual(11)
  })

  it('can be expanded by points', () => {
    const p1 = { x: -1, y: -7 }
    const p2 = { x: 5, y: 11 }
    const box = new Box2().expandByPoints([p1, p2])
    expect(box.min.x).toEqual(-1)
    expect(box.min.y).toEqual(-7)
    expect(box.max.x).toEqual(5)
    expect(box.max.y).toEqual(11)
  })

  it('can be constructed from an array of points', () => {
    const p1 = { x: -1, y: -7 }
    const p2 = { x: 5, y: 11 }
    const box = Box2.fromPoints([p1, p2])
    expect(box.min.x).toEqual(-1)
    expect(box.min.y).toEqual(-7)
    expect(box.max.x).toEqual(5)
    expect(box.max.y).toEqual(11)
  })

  it('can test whether a point lies inside it', () => {
    const p1 = { x: 5, y: 11 }
    const p2 = { x: 100, y: 50 }
    const box = Box2.fromPoints([p1, p2])
    expect(box.isPointInside(new V2(100, 11))).toBe(true)
    expect(box.isPointInside(new V2(5, 50))).toBe(true)
    expect(box.isPointInside(new V2(50, 20))).toBe(true)
    expect(box.isPointInside(new V2(0, 0))).toBe(false)
    expect(box.isPointInside(new V2(-1, 10))).toBe(false)
    expect(box.isPointInside(new V2(101, 51))).toBe(false)
  })

  it('has an equals method', () => {
    const box1 = new Box2()
    expect(box1.equals(new Box2())).toEqual(true)
    expect(new Box2(new V2(1, 3), new V2(7, 11))
      .equals(new Box2(new V2(1, 3), new V2(7, 11))))
      .toEqual(true)
  })
})
