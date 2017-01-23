'use strict'

class Plane3 {

  constructor(a, b, c, d) {
    this.a = a
    this.b = b
    this.c = c
    this.d = d
  }

  // Distance to a point
  // http://mathworld.wolfram.com/Point-PlaneDistance.html eq 10
  distanceToPoint(p0) {
    var dd = (this.a*p0.x + this.b*p0.y + this.c*p0.z + this.d) /
      Math.sqrt(this.a*this.a + this.b*this.b + this.c*this.c)
    return dd
  }

}

// From point and normal
Plane3.fromPointAndNormal = (p, n) => {
  const a = n.x
  const b = n.y
  const c = n.z
  const d = -(p.x*a + p.y*b + p.z*c)
  return new Plane3(n.x, n.y, n.z, d)
}

Plane3.fromPoints = (pa, pb, pc) => {
  const ab = pb.sub(pa)
  const bc = pc.sub(pb)
  const n = ab.cross(bc).norm()
  return Plane3.fromPointAndNormal(pa, n)
}



export default Plane3
