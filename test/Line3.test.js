import expect from 'expect'

import { Line3, V3 } from '../src'

describe('Line3', () => {
  it('expects objects with x and y properties', () => {
    expect(() => {
      new Line3() // eslint-disable-line no-new
    }).toThrow('expected first argument to have x, y and z properties')
    expect(() => {
      new Line3({ a: 1 }) // eslint-disable-line no-new
    }).toThrow('expected first argument to have x, y and z properties')
    expect(() => {
      new Line3({ x: 0, y: 0, z: 0 }) // eslint-disable-line no-new
    }).toThrow('expected second argument to have x, y and z properties')
    expect(() => {
      new Line3({ x: 0, y: 0, z: 0 }, { z: 2 }) // eslint-disable-line no-new
    }).toThrow('expected second argument to have x, y and z properties')
  })

  it('has a length', () => {
    const a = new Line3(new V3(0, 0, 0), new V3(1, 0, 0))
    expect(a.length()).toEqual(1)

    const b = new Line3(new V3(0, 0, 0), new V3(1, 2, 3))
    expect(b.length()).toEqual(Math.sqrt(14))
  })

  it('can test if it containts a point', () => {
    const a = new Line3({ x: 0, y: 0, z: 2 }, { x: 10, y: 0, z: 2 })
    expect(a.containsPoint(new V3(0, 0, 2))).toEqual(true)
    expect(a.containsPoint(new V3(10, 0, 2))).toEqual(true)
    expect(a.containsPoint(new V3(5, 0, 2))).toEqual(true)

    expect(a.containsPoint(new V3(0, 0.0001, 2))).toEqual(false)
    expect(a.containsPoint(new V3(5, 0.0001, 2))).toEqual(false)
    expect(a.containsPoint(new V3(10, 0.0001, 2))).toEqual(false)
    expect(a.containsPoint(new V3(0, -0.0001, 2))).toEqual(false)
    expect(a.containsPoint(new V3(5, -0.0001, 2))).toEqual(false)
    expect(a.containsPoint(new V3(10, -0.0001, 2))).toEqual(false)

    expect(a.containsPoint(new V3(0, 0, 1.99))).toEqual(false)
    expect(a.containsPoint(new V3(5, 0, 1.99))).toEqual(false)
    expect(a.containsPoint(new V3(10, 0, 1.99))).toEqual(false)
    expect(a.containsPoint(new V3(0, 0, 2.01))).toEqual(false)
    expect(a.containsPoint(new V3(5, 0, 2.01))).toEqual(false)
    expect(a.containsPoint(new V3(10, 0, 2.01))).toEqual(false)

    const eps = 0.1
    expect(a.containsPoint(new V3(5, 0.1, 2), eps)).toEqual(true)

    const b = new Line3({ x: 0, y: 0, z: 0 }, { x: 1, y: 2, z: 3 })
    expect(b.containsPoint(new V3(0.2, 0.4, 0.6), 1e-6)).toEqual(true)
  })
})
