// Write a program to check if two strings are a rotation of each other?
function isRotation(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    const combinedStr = str1 + str1;
    return combinedStr.includes(str2);
  }
  
  // Example usage
  const str1 = 'hello';
  const str2 = 'llohe';
  console.log(isRotation(str1, str2)); // Output: true
  