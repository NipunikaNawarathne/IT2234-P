//Find the max of the array using foreach

let array = [3,7,9,2,8]
let max = 0

array.forEach((n)=>{
	if(max<n){
		max = n
	}
	//(max<n) && (max=n)
})
console.log("Max is "+max)