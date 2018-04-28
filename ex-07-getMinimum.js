/**
 * getMinimum()
 * ------------------------------------------------------
 * Write a function called `getMinimum()` that takes 4 numbers as arguments
 * and returns the one with the lowest value.
 *
 **/


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

function getMinimum(num1, num2, num3, num4) {
  if (num1 <= num2 && num1 <= num3 && num1 <= num4) {
    return num1
  } if (num2 <= num1 && num2 <= num3 && num2 <= num4){
    return num2
  } if (num3 <= num1 && num3 <= num2 && num3 <= num4) {
    return num3
  } if (num4 <= num1 && num4 <= num2 && num4 <= num3) {
    return num4
  }
}

console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(4,8,4,20) === 4 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,4,-5) === -11 )
