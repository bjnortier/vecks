class Box3 {
  constructor (min, max) {
    this.min = min || {
      x: Infinity,
      y: Infinity,
      z: Infinity
    }
    this.max = max || {
      x: -Infinity,
      y: -Infinity,
      z: -Infinity
    }
  }

  expandByPoint (p) {
    this.min = {
      x: Math.min(this.min.x, p.x),
      y: Math.min(this.min.y, p.y),
      z: Math.min(this.min.z, p.z)
    }
    this.max = {
      x: Math.max(this.max.x, p.x),
      y: Math.max(this.max.y, p.y),
      z: Math.max(this.max.z, p.z)
    }
    return this
  }

  expandByPoints (points) {
    points.forEach(function (point) {
      this.expandByPoint(point)
    }, this)
    return this
  }

  isPointInside (p) {
    return (
      (p.x >= this.min.x) &&
      (p.y >= this.min.y) &&
      (p.z >= this.min.z) &&
      (p.x <= this.max.x) &&
      (p.y <= this.max.y) &&
      (p.z <= this.max.z))
  }
}

Box3.fromPoints = (points) => {
  return new Box3().expandByPoints(points)
}

export default Box3
