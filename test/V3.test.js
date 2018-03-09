import expect from 'expect'

import { V3 } from '../src'

describe('V3', () => {
  it('constructs from arguments or an object', () => {
    const va = new V3(7, -19, 23)
    expect(va.equals(new V3({x: 7, y: -19, z: 23}))).toEqual(true)
    expect(va.equals(new V3({x: 0, y: -19, z: 23}))).toEqual(false)
    expect(va.equals(new V3({x: 7, y: 0, z: 23}))).toEqual(false)
    expect(va.equals(new V3({x: 7, y: -19, z: 0}))).toEqual(false)

    const vb = new V3()
    expect(vb.equals(new V3({x: 0, y: 0, z: 0}))).toEqual(true)
  })

  it('operations', () => {
    const va = new V3(11, -7, 13)
    const vb = new V3(3, 4, 5)

    expect(va.neg().equals(new V3(-11, 7, -13))).toEqual(true)
    expect(va.length()).toEqual(Math.sqrt(339))
    expect(vb.norm().equals(new V3(3 / Math.sqrt(50), 4 / Math.sqrt(50), 5 / Math.sqrt(50)))).toEqual(true)

    expect(va.multiply(3).equals(new V3(33, -21, 39))).toEqual(true)
    expect(va.add(vb).equals(new V3(14, -3, 18))).toEqual(true)
    expect(vb.sub(va).equals(new V3(-8, 11, -8))).toEqual(true)

    expect(va.dot(vb)).toEqual(70)
    expect(va.cross(vb).equals(new V3(-87, -16, 65))).toEqual(true)
    expect(new V3(3, -3, 1).cross(new V3(4, 9, 2)).equals(new V3(-15, -2, 39))).toEqual(true)
    expect(new V3(3, -3, 1).cross(new V3(-12, 12, -4)).equals(new V3(0, 0, 0))).toEqual(true)
  })
})
