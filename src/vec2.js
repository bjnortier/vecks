'use strict'

function neg(a) {
  return [-a[0], -a[1]]
}

function dot(a, b) {
  return a[0]*b[0] + a[1]*b[1]
}

function length(a) {
  return Math.sqrt(dot(a, a))
}

function multiply(a, factor) {
  return [a[0]*factor, a[1]*factor]
}

function norm(a) {
  return multiply(a, 1/length(a))
}

function add(a, b) {
  return [a[0] + b[0], a[1] + b[1]]
}

function sub(a, b) {
  return [a[0] - b[0], a[1] - b[1]]
}

module.exports.neg = neg
module.exports.dot = dot
module.exports.length = length
module.exports.multiply = multiply
module.exports.norm = norm
module.exports.add = add
module.exports.sub = sub
