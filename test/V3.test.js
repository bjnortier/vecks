import expect from 'expect'

import { V3 } from '../src'

const expectV3Equal = (v1, v2) => {
  expect(v1.x).toEqual(v2.x)
  expect(v1.y).toEqual(v2.y)
  expect(v1.z).toEqual(v2.z)
}

describe('V3', function () {
  it('constructs from arguments or an object', function () {
    const va = new V3(7, -19, 23)
    expectV3Equal(va, new V3({x: 7, y: -19, z: 23}))
  })

  it('operations', function () {
    const va = new V3(11, -7, 13)
    const vb = new V3(3, 4, 5)

    expectV3Equal(va.neg(), new V3(-11, 7, -13))
    expect(va.length()).toEqual(Math.sqrt(339))
    expectV3Equal(vb.norm(), new V3(3 / Math.sqrt(50), 4 / Math.sqrt(50), 5 / Math.sqrt(50)))

    expectV3Equal(va.multiply(3), new V3(33, -21, 39))
    expectV3Equal(va.add(vb), new V3(14, -3, 18))
    expectV3Equal(vb.sub(va), new V3(-8, 11, -8))

    expect(va.dot(vb)).toEqual(70)
    expectV3Equal(va.cross(vb), new V3(-87, -16, 65))
    expectV3Equal(new V3(3, -3, 1).cross(new V3(4, 9, 2)), new V3(-15, -2, 39))
    expectV3Equal(new V3(3, -3, 1).cross(new V3(-12, 12, -4)), new V3(0, 0, 0))
  })
})
