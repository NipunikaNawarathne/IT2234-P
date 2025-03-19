let numArray = [1, 2, 3, 4, 5]
console.log(numArray)

console.log()

for(let i=0; i<numArray.length; i++){
	console.log(numArray[i])
}

console.log()

for(let i in numArray){
	console.log(numArray[i])
}

console.log()

//Foreach
//n takes the values not index
numArray.forEach((n)=>{
	console.log(n)
})