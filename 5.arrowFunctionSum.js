//write an arrow function to sum 2 numbers

const add = (a, b)=>{return a+b}
console.log("Sum: "+add(4,5))

//default parameter//
//b is a default parameter
const mult = (a, b=2)=>{return a*b}
console.log(mult(7, 6))
console.log(mult(7))

//Rest parameter//
//u can pass parameter as an Array
const mysum = (...n)=>{
	console.log(n)
}
mysum(4,5,6,7,8,9)


