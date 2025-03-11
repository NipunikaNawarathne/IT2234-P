/*4. reverse the numbers in left and right 4321-5-9876
Ex -:
	15
	654321-7-15 14 13 12 11 10 9 8
*/

let number = 9
let mid = parseInt(number/2) + 1

for(let j=mid-1; j>0; j--){
	console.log(j)
}

console.log(mid)

for(let j=number; j>mid; j--){
	console.log(j)
}