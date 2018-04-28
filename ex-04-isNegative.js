/**
 * isNegative()
 * ------------------------------------------------------
 * Write a function called isNegative that returns true/false for
 * whether a number is negative or not.
 *
 **/
function isNegative(number){

if (number < 0){
  console.log('numero negativo', number)
  console.log('====')
  return true
} else{
  console.log('numero positivo', number)
  console.log('====')
  return false
}
}

console.log('----My console.assert() test ----')
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( isNegative(100) === false )
console.assert( isNegative(14) === false )
console.assert( isNegative(2) === false )
console.assert( isNegative(0) === false )
console.assert( isNegative(-1) === true )
console.assert( isNegative(-64) === true )
