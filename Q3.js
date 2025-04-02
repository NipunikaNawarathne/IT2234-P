function getMaxValue(num) {
    if (num < 10) return num; // Ensure minimum of 2 digits
    
    return parseInt(num.toString()
        .split('')
        .sort((a, b) => b - a) // Sort digits in descending order
        .join(''), 10);
}

// Example cases
console.log(getMaxValue(215));  // 521
console.log(getMaxValue(1093)); // 9310
