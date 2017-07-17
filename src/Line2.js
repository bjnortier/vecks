import V2 from './V2'

function turn (p1, p2, p3) {
  const a = p1.x
  const b = p1.y
  const c = p2.x
  const d = p2.y
  const e = p3.x
  const f = p3.y
  const m = (f - b) * (c - a)
  const n = (d - b) * (e - a)
  return (m > n + Number.EPSILON) ? 1 : (m + Number.EPSILON < n) ? -1 : 0
}

// http://stackoverflow.com/a/16725715/35448
function isIntersect (e1, e2) {
  const p1 = e1.a
  const p2 = e1.b
  const p3 = e2.a
  const p4 = e2.b
  return (turn(p1, p3, p4) !== turn(p2, p3, p4)) && (turn(p1, p2, p3) !== turn(p1, p2, p4))
}

class Line2 {
  constructor (a, b) {
    if (!(a instanceof V2)) {
      throw new Error('expected first argument to be an instance of vecks.V2')
    }
    if (!(b instanceof V2)) {
      throw new Error('expected second argument to be an instance of vecks.V2')
    }
    this.a = a
    this.b = b
  }

  length () {
    return this.a.sub(this.b).length()
  }

  intersects (other) {
    if (!(other instanceof Line2)) {
      throw new Error('expected argument to be an instance of vecks.Line2')
    }
    return isIntersect(this, other)
  }
}

export default Line2
