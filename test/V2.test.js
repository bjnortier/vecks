import expect from 'expect'

import { V2 } from '../src'

describe('V2', () => {
  it('constructs from arguments or an object', () => {
    const va = new V2(7, -19)
    expect(va.equals(new V2({x: 7, y: -19}))).toEqual(true)
    expect(va.equals(new V2({x: 0, y: -19}))).toEqual(false)
    expect(va.equals(new V2({x: 7, y: 0}))).toEqual(false)
  })

  it('operations', () => {
    const va = new V2(11, -7)
    const vb = new V2(3, 4)
    expect(va.equals(new V2(11, -7))).toEqual(true)
    expect(va.neg().equals(new V2(-11, 7))).toEqual(true)
    expect(va.dot(vb)).toEqual(5)
    expect(va.length()).toEqual(Math.sqrt(170))
    expect(va.multiply(3).equals(new V2(33, -21))).toEqual(true)
    expect(vb.norm().equals(new V2(3 * 0.2, 4 * 0.2))).toEqual(true)
    expect(va.add(vb).equals(new V2(14, -3))).toEqual(true)
    expect(va.add(vb).equals(new V2(14, -3))).toEqual(true)
    expect(vb.sub(va).equals(new V2(-8, 11))).toEqual(true)
    expect(va.sub(vb).equals(new V2(8, -11))).toEqual(true)
  })
})
