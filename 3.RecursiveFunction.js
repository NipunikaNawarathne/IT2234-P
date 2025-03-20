//write recursive function to print numbers from 1 to n

function recursiveNumbers(n){
	if(n==0){
		return -1
	}
	else{
		console.log(n)
		recursiveNumbers(n-1)
	}
}
recursiveNumbers(5)