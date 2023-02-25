// Write a program to find all pairs of an integer array whose sum is equal to a given number?
function findPairs(arr, targetSum) {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
    return pairs;
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const targetSum = 7;
  console.log(findPairs(arr, targetSum)); // Output: [ [2, 5], [3, 4] ]
  