/*arr = [1,2,3,4,5,6]
target = 7
write a code to find the all pairs that sum up to the target*/

let array = [1,2,3,4,5,6]
let target = 7
console.log(array)
console.log()

array.forEach((n)=>{
	array.forEach((m)=>{
		if(n+m == target){
			console.log("Pair: "+n+", "+m)
		}
	})
})
