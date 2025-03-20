//Take the sum of above numbers
const mysum = (...n)=>{
	let t = 0
	n.forEach((i)=>t=t+i)
	console.log(t)
}
mysum(4,5,6,7,8,9)

//better way to do addition
const mysum1 = (...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum1(4,5,6,7,8,9))