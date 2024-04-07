function isLowerCase(char) {
    return char >= 'a' && char <= 'z';
}

console.log(isLowerCase('a')); 
console.log(isLowerCase('A')); 
console.log(isLowerCase('z')); 
console.log(isLowerCase('Z')); // Output: false
console.log(isLowerCase('5')); // Output: false