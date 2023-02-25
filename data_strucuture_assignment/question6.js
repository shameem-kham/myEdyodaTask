// Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
function postfixToPrefix(postfix) {
    const stack = [];
    for (let i = 0; i < postfix.length; i++) {
      const c = postfix[i];
      if (/[a-zA-Z0-9]/.test(c)) {
        stack.push(c);
      } else {
        const op2 = stack.pop();
        const op1 = stack.pop();
        stack.push(`${c}${op1}${op2}`);
      }
    }
    return stack.pop();
  }
  
  // Example usage
  const postfix = 'ab+c*';
  const prefix = postfixToPrefix(postfix);
  console.log(prefix); // Output: '*+abc'
  