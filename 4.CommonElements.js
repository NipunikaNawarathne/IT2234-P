/*
a = [4,5,6,3,7]
b = [8,3,2,1,5]
find the common elements between a and b
*/

let a = [4,5,6,3,7]
let b = [8,3,2,1,5]

a.forEach((i)=>{
	b.forEach((j)=>{
		if(i==j){
			console.log("Common elements: "+j)
		}
	})
})