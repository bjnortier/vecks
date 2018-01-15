import expect from 'expect'

import { Plane3, V3 } from '../src'

describe('Plane3', () => {
  it('can be constructed from arguments', () => {
    const pa = new Plane3(7, 11, -19, 23)
    expect(pa.a).toEqual(7)
    expect(pa.b).toEqual(11)
    expect(pa.c).toEqual(-19)
    expect(pa.d).toEqual(23)
  })

  it('can be tested for equality', () => {
    const pa = new Plane3(7, 11, -19, 23)
    expect(pa.equals(new Plane3(7, 11, -19, 23))).toEqual(true)
    expect(pa.equals(new Plane3(0, 11, -19, 23))).toEqual(false)
    expect(pa.equals(new Plane3(7, 0, -19, 23))).toEqual(false)
    expect(pa.equals(new Plane3(7, 11, 0, 23))).toEqual(false)
    expect(pa.equals(new Plane3(7, 11, -19, 0))).toEqual(false)
  })

  it('can be constructed from points', () => {
    const pa = Plane3.fromPoints([
      new V3(0, 0, 3), new V3(1, 0, 3), new V3(1, 1, 3)
    ])
    expect(pa.equals(new Plane3(0, 0, 1, -3))).toEqual(true)

    const pb = Plane3.fromPoints([
      new V3(0, 0, 10), new V3(1, 0, 10), new V3(1, 1, 10)
    ])
    expect(pb.equals(new Plane3(0, 0, 1, -10))).toEqual(true)

    // At least one point not in a line
    const pc = Plane3.fromPoints([
      new V3(0, 0, 10), new V3(1, 0, 10), new V3(2, 0, 10), new V3(2, 1, 10)
    ])
    expect(pc.equals(new Plane3(0, 0, 1, -10))).toEqual(true)

    // Different normals (concave polygon)
    const pd = Plane3.fromPoints([
      new V3(0, 0, 10), new V3(1, 0, 10), new V3(1, 1, 10), new V3(2, 1, 10),
      new V3(2, -1, 10)
    ])
    expect(pd.equals(new Plane3(0, 0, 1, -10))).toEqual(true)

    // Numeric stability observed emprirically (no exception)
    Plane3.fromPoints([
      new V3(40.44921, 0, 24.162658773653),
      new V3(33.006805707785, 0, 34.150635094611),
      new V3(31.862976320958, -8.537658773653, 34.150635094611)
    ])
  })

  it('throws an Error when points don\'t form a plane', () => {
    // Points in a straight line
    expect(() => {
      Plane3.fromPoints([
        new V3(0, 0, 0), new V3(1, 0, 0), new V3(2, 0, 0)
      ])
    }).toThrow('points not on a plane')

    // Points not in same plane
    expect(() => {
      Plane3.fromPoints([
        new V3(0, 0, 0), new V3(1, 0, 0), new V3(1, 1, 0), new V3(0, 1, 0.5)
      ])
    }).toThrow('points not on a plane')
  })

  it('can be constructed from a point a normal', () => {
    const pa = Plane3.fromPointAndNormal(new V3(0, 0, 0), new V3(0, 0, 1))
    expect(pa.equals(new Plane3(0, 0, 1, 0))).toEqual(true)

    const pb = Plane3.fromPointAndNormal(new V3(0, 0, 10), new V3(1, 1, 1))
    expect(pb.equals(new Plane3(1, 1, 1, -10))).toEqual(true)
  })

  it('can compute the distance to a point', () => {
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

  it('can be tested for co-planarity', () => {
    const pa = Plane3.fromPoints([new V3(1, 0, 0), new V3(1, 1, 0), new V3(1, 1, 1)])
    // Same but from offset
    const pb = Plane3.fromPoints([new V3(1, 1, 0), new V3(1, 2, 0), new V3(1, 2, 1)])
    // Same but negative normal
    const pc = Plane3.fromPoints([new V3(1, 0, 0), new V3(1, 0, 1), new V3(1, 1, 1)])
    const px = Plane3.fromPoints([new V3(0.5, 0, 0), new V3(0.5, 1, 0), new V3(0.5, 1, 1)])
    expect(pa.coPlanar(pb)).toEqual(true)
    expect(pa.coPlanar(pc)).toEqual(true)
    expect(pa.coPlanar(px)).toEqual(false)
  })
})
