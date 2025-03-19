/*
[4,8,3,4,3,2,1,8,4]
Find the most frequent element in the array
*/

let array = [4,8,3,4,3,2,1,8,4]
console.log(array)
console.log()

let frequencyMap = {}
let maxCount = 0
let mostFrequentElement = 0 //let mostFrequentElement = null

array.forEach((n)=>{
	frequencyMap[n] = (frequencyMap[n] || 0) + 1
	if(frequencyMap[n] > maxCount){
		mostFrequentElement = n
	}
})
console.log("Most frequent element: "+mostFrequentElement)

/*
Explanation:

	1.	We create an empty object frequencyMap to count occurrences.
	2.	We iterate through the array and update the count for each number.
	3.	If a number’s count exceeds maxCount, we update mostFrequentElement.
	4.	Finally, we print the most frequent element.

*/

