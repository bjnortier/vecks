class V3 {

  constructor(x, y, z) {
    if (typeof x === 'object') {
      this.x = x.x
      this.y = x.y
      this.z = x.z
    } else {
      this.x = x
      this.y = y
      this.z = z
    }
  }

  length() {
    return Math.sqrt(this.dot(this))
  }

  neg() {
    return new V3(-this.x, -this.y, -this.z)
  }

  add(b) {
    return new V3(this.x + b.x, this.y + b.y, this.z + b.z)
  }

  sub(b) {
    return new V3(this.x - b.x, this.y - b.y, this.z - b.z)
  }

  multiply(w) {
    return new V3(this.x*w, this.y*w, this.z*w)
  }

  norm() {
    return this.multiply(1/this.length())
  }

  dot(b) {
    return this.x * b.x + this.y * b.y + this.z * b.z
  }

  cross(b) {
    return new V3(
      this.y * b.z - this.z * b.y,
      this.z * b.x - this.x * b.z,
      this.x * b.y - this.y * b.x)
  }

}

export default V3
