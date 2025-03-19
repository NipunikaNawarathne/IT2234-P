/*
Reverse the array using push and pop
a b c d -> d c b a
*/

let array = ['a','b','c','d']
console.log(array)
let popElement = []

array.pop()
array.pop()
array.pop()
array.pop()
console.log(array)
array.push('d')
array.push('c')
array.push('b')
array.push('a')
console.log(array)