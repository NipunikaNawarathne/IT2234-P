//print the nested array
//[[1,2,30], [5,6], [8,5,3]]

let array = [[1,2,30], [5,6], [8,5,3]]

array.forEach((n)=>{
	console.log(n)
})

console.log()

array.forEach((n)=>{
	n.forEach((i)=>{
		console.log(i)
	})
})

console.log()

for(let i in array){
	for(let j in array){
		console.log(array[i][j])
	}
}