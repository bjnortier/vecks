import V2 from './V2'

class Box2 {
  constructor (min, max) {
    this.min = min || new V2(Infinity, Infinity)
    this.max = max || new V2(-Infinity, -Infinity)
  }

  equals (other) {
    return ((this.min.equals(other.min)) &&
            (this.max.equals(other.max)))
  }

  get width () {
    return this.max.x - this.min.x
  }

  get height () {
    return this.max.y - this.min.y
  }

  expandByPoint (p) {
    this.min = new V2(
      Math.min(this.min.x, p.x),
      Math.min(this.min.y, p.y))
    this.max = new V2(
      Math.max(this.max.x, p.x),
      Math.max(this.max.y, p.y))
    return this
  }

  expandByPoints (points) {
    points.forEach(point => {
      this.expandByPoint(point)
    }, this)
    return this
  }

  isPointInside (p) {
    return (
      (p.x >= this.min.x) &&
      (p.y >= this.min.y) &&
      (p.x <= this.max.x) &&
      (p.y <= this.max.y))
  }
}

Box2.fromPoints = (points) => {
  return new Box2().expandByPoints(points)
}

export default Box2
