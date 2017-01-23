import expect from 'expect'

import V2 from '../src/V2'

const expectV2Equal = (v1, v2) => {
  expect(v1.x).toEqual(v2.x)
  expect(v1.y).toEqual(v2.y)
}

describe('V2', function() {

  it('operations', function() {

    var va = new V2(11, -7)
    var vb = new V2(3, 4)

    expectV2Equal(va, new V2(11, -7))
    expectV2Equal(va.neg(), new V2(-11, 7))
    expect(va.dot(vb)).toEqual(5)
    expect(va.length()).toEqual(Math.sqrt(170))
    expectV2Equal(va.multiply(3), new V2(33, -21))
    expectV2Equal(vb.norm(), new V2(3*0.2, 4*0.2))
    expectV2Equal(va.add(vb), new V2(14, -3))
    expectV2Equal(va.add(vb), new V2(14, -3))
    expectV2Equal(vb.sub(va), new V2(-8, 11))
    expectV2Equal(va.sub(vb), new V2(8, -11))
  })

})
