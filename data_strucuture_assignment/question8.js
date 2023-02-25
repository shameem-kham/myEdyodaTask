// Write a program to check if all the brackets are closed in a given code snippet.
function isBracketBalanced(code) {
    const stack = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    for (let i = 0; i < code.length; i++) {
      const c = code[i];
      if (brackets[c]) {
        stack.push(c);
      } else if (c === ')' || c === '}' || c === ']') {
        const lastBracket = stack.pop();
        if (brackets[lastBracket] !== c) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  
  // Example usage
  const code1 = '(a + b) * c';
  const code2 = '(a + b * c';
  console.log(isBracketBalanced(code1)); // Output: true
  console.log(isBracketBalanced(code2)); // Output: false
  