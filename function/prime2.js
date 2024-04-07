function isLowerCase(char) {
    return char >= 'a' && char <= 'z';
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

function printPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// Example usage
printPrimes(20);
