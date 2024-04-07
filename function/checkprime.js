function isPrime(num) {

    if (num <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true; 
}

// Example usage
console.log(isPrime(7)); // Output: true
console.log(isPrime(12)); // Output: false
console.log(isPrime(29)); // Output: true
console.log(isPrime(100)); // Output: false
