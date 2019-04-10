import expect from 'expect'

import { Line2, V2 } from '../src'

describe('Line2', () => {
  it('expects objects with x and y properties', () => {
    expect(() => {
      new Line2() // eslint-disable-line no-new
    }).toThrow('expected first argument to have x and y properties')
    expect(() => {
      new Line2({ a: 1 }) // eslint-disable-line no-new
    }).toThrow('expected first argument to have x and y properties')
    expect(() => {
      new Line2({ x: 0, y: 0 }) // eslint-disable-line no-new
    }).toThrow('expected second argument to have x and y properties')
    expect(() => {
      new Line2({ x: 0, y: 0 }, { z: 2 }) // eslint-disable-line no-new
    }).toThrow('expected second argument to have x and y properties')
  })

  it('has a length', () => {
    const a = new Line2(new V2(0, 0), new V2(1, 0))
    expect(a.length()).toEqual(1)
  })

  it('can caculate intersections', () => {
    expect(() => {
      new Line2(new V2(0, 0), new V2(1, 0)).intersects([]) // eslint-disable-line no-new
    }).toThrow('expected argument to be an instance of vecks.Line2')

    expect(new Line2(new V2(0, 0), new V2(1, 0))
      .intersects(new Line2(new V2(0, 0), new V2(1, 0))))
      .toEqual(false)

    expect(new Line2(new V2(0, 0), new V2(1, 1))
      .intersects(new Line2(new V2(0, 1), new V2(1, 0))))
      .toEqual(true)

    expect(new Line2(new V2(0, 0), new V2(1, 0))
      .getIntersection(new Line2(new V2(0, 0), new V2(1, 1)))
      .equals(new V2(0.0, 0.0))).toEqual(true)

    expect(new Line2(new V2(0, 0), new V2(1, 1))
      .getIntersection(new Line2(new V2(0, 1), new V2(1, 0)))
      .equals(new V2(0.5, 0.5))).toEqual(true)

    expect(new Line2(new V2(1, 0), new V2(1, 1))
      .getIntersection(new Line2(new V2(0, 2), new V2(2, 2))))
      .toEqual(null)
  })

  it('can test if it containts a point', () => {
    const a = new Line2({ x: 0, y: 0 }, { x: 10, y: 0 })
    expect(a.containsPoint(new V2(0, 0))).toEqual(true)
    expect(a.containsPoint(new V2(10, 0))).toEqual(true)
    expect(a.containsPoint(new V2(5, 0))).toEqual(true)
    expect(a.containsPoint(new V2(0, 0.0001))).toEqual(false)
    expect(a.containsPoint(new V2(5, 0.0001))).toEqual(false)
    expect(a.containsPoint(new V2(10, 0.0001))).toEqual(false)
    expect(a.containsPoint(new V2(0, -0.0001))).toEqual(false)
    expect(a.containsPoint(new V2(5, -0.0001))).toEqual(false)
    expect(a.containsPoint(new V2(10, -0.0001))).toEqual(false)
    expect(a.containsPoint(new V2(-0.0001, 0))).toEqual(false)
    expect(a.containsPoint(new V2(10.0001, 0))).toEqual(false)

    const eps = 0.1
    expect(a.containsPoint(new V2(5, 0.1), eps)).toEqual(true)
  })
})
