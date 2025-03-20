//write a boolean function to find a given number is prime

function isPrime(n){
	if(n<2){ //0 and 1 are not prime
		return false
	}
	for(let i=2; i<n; i++){ //If divisible, not prime
		if(n%i === 0){
			return false
		}
	}
	return true
}
console.log(isPrime(7))
console.log(isPrime(2))
console.log(isPrime(1))
console.log(isPrime(10))
console.log(isPrime(15))
console.log(isPrime(23))