import V2 from './V2'

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

  getIntersection (other) {
    if (!(other instanceof Line2)) {
      throw new Error('expected argument to be an instance of vecks.Line2')
    }

    // https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
    const x1 = this.a.x
    const x2 = this.b.x
    const y1 = this.a.y
    const y2 = this.b.y

    const x3 = other.a.x
    const x4 = other.b.x
    const y3 = other.a.y
    const y4 = other.b.y

    const x12 = x1 - x2
    const x34 = x3 - x4
    const y12 = y1 - y2
    const y34 = y3 - y4
    const c = x12 * y34 - y12 * x34

    const px = ((x1 * y2 - y1 * x2) * (x34) - (x12) * (x3 * y4 - y3 * x4)) / c
    const py = ((x1 * y2 - y1 * x2) * (y34) - (y12) * (x3 * y4 - y3 * x4)) / c

    if (isNaN(px) || isNaN(py)) {
      return null
    } else {
      return new V2(px, py)
    }
  }
}

export default Line2
