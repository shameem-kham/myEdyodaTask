// Write a program to print the first non-repeated character from a string?
function firstNonRepeatedChar(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
      if (charCount[str[i]]) {
        charCount[str[i]]++;
      } else {
        charCount[str[i]] = 1;
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (charCount[str[i]] === 1) {
        return str[i];
      }
    }
    return null; // If no non-repeated character is found
  }
  
  // Example usage
  const str = 'aabbcdeff';
  console.log(firstNonRepeatedChar(str)); // Output: 'c'
  