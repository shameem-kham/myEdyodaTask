// Write a program to convert prefix expression to infix expression.
function prefixToInfix(prefix) {
    const stack = [];
    for (let i = prefix.length - 1; i >= 0; i--) {
      const c = prefix[i];
      if (/[a-zA-Z0-9]/.test(c)) {
        stack.push(c);
      } else {
        const op1 = stack.pop();
        const op2 = stack.pop();
        stack.push(`(${op1}${c}${op2})`);
      }
    }
    return stack.pop();
  }
  
  // Example usage
  const prefix = '*+abc';
  const infix = prefixToInfix(prefix);
  console.log(infix); // Output: '(a+b)*c'
  