import expect from 'expect'

export const expectV2Equal = (v1, v2) => {
  expect(v1.x).toEqual(v2.x)
  expect(v1.y).toEqual(v2.y)
}
