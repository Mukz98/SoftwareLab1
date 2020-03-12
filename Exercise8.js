'use strict'

const array1 = [1, 2, 3, 4, 5]
const Square = function (array) {
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i] * array[i]
  }
  return array
}
const map = function (functionToApply, array) {
  functionToApply(array)
}

map(Square, array1)
console.log(array1)
