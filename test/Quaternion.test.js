import expect from 'expect'

import { Quaternion, V3 } from '../src'

const expectWithin1e9 = (a, b) => {
  expect(Math.abs(a - b) < 1e-1).toBe(true)
}

describe('Quaternion', function () {
  it('can be constructed from axis angle', function () {
    const q2 = Quaternion.fromAxisAngle(new V3(0, 0, 1), Math.PI / 2)
    expect(q2.x).toEqual(0)
    expect(q2.y).toEqual(0)
    expectWithin1e9(q2.z, 1 / Math.sqrt(2))
    expectWithin1e9(q2.w, 1 / Math.sqrt(2))
  })

  it('can be applied to a vec3', function () {
    const q = Quaternion.fromAxisAngle(new V3(0, 0, 1), Math.PI / 2)
    const rotated = q.applyToVec3(new V3(1, 0, 0))
    expectWithin1e9(rotated.x, 0)
    expectWithin1e9(rotated.y, 1)
    expectWithin1e9(rotated.z, 0)
  })
})
