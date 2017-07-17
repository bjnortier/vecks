import expect from 'expect'

import { Plane3, V3 } from '../src'

const expectPlane3Equal = (p1, p2) => {
  expect(p1.a).toEqual(p2.a)
  expect(p1.b).toEqual(p2.b)
  expect(p1.c).toEqual(p2.c)
  expect(p1.d).toEqual(p2.d)
}

describe('Plane3', function () {
  it('can be constructed from arguments', function () {
    const pa = new Plane3(7, 11, -19, 23)
    expect(pa.a).toEqual(7)
    expect(pa.b).toEqual(11)
    expect(pa.c).toEqual(-19)
    expect(pa.d).toEqual(23)
  })

  it('can be constructed from a point a norma', function () {
    const pa = Plane3.fromPoints(new V3(0, 0, 0), new V3(1, 0, 0), new V3(1, 1, 0))
    expectPlane3Equal(pa, new Plane3(0, 0, 1, 0))

    const pb = Plane3.fromPoints(new V3(0, 0, 10), new V3(1, 0, 10), new V3(1, 1, 10))
    expectPlane3Equal(pb, new Plane3(0, 0, 1, -10))
  })

  it('can be constructed from a point a normal', function () {
    const pa = Plane3.fromPointAndNormal(new V3(0, 0, 0), new V3(0, 0, 1))
    expectPlane3Equal(pa, new Plane3(0, 0, 1, 0))

    const pb = Plane3.fromPointAndNormal(new V3(0, 0, 10), new V3(1, 1, 1))
    expectPlane3Equal(pb, new Plane3(1, 1, 1, -10))
  })

  it('can compute the distance to a point', function () {
    const pa = new Plane3(0, 0, 1, 0)
    expect(pa.distanceToPoint(new V3(0, 0, 0))).toEqual(0)
    expect(pa.distanceToPoint(new V3(10, 10, 0))).toEqual(0)
    expect(pa.distanceToPoint(new V3(0, 0, 1))).toEqual(1)
    expect(pa.distanceToPoint(new V3(-10, -10, 1))).toEqual(1)

    const pb = new Plane3(0, 0, 1, -10)
    expect(pb.distanceToPoint(new V3(0, 0, 0))).toEqual(-10)
    expect(pb.distanceToPoint(new V3(10, 10, 0))).toEqual(-10)
    expect(pb.distanceToPoint(new V3(0, 0, 15))).toEqual(5)
    expect(pb.distanceToPoint(new V3(-10, -10, 15))).toEqual(5)

    const pc = new Plane3(1, 1, 0, 0)
    expect(pc.distanceToPoint(new V3(1, 1, 0)).toFixed(6)).toEqual(Math.sqrt(2).toFixed(6))
  })
})
