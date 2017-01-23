
function neg(a) {
  return [-a[0], -a[1], -a[2]]
}

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ]
}

function length(a) {
  return Math.sqrt(dot(a, a))
}

function multiply(a, factor) {
  return [a[0]*factor, a[1]*factor, a[2]*factor]
}

// Normalize
function norm(a) {
  return multiply(a, 1/length(a))
}

// Vector addition
function add(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
}

// Vector subtraction
function sub(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
}

module.exports.neg = neg
module.exports.dot = dot
module.exports.cross = cross
module.exports.length = length
module.exports.multiply = multiply
module.exports.norm = norm
module.exports.add = add
module.exports.sub = sub
