// Write a program to reverse a stack.
function reverseStack(stack) {
    if (stack.length === 0) {
      return;
    }
    const top = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, top);
  }
  
  function insertAtBottom(stack, item) {
    if (stack.length === 0) {
      stack.push(item);
      return;
    }
    const top = stack.pop();
    insertAtBottom(stack, item);
    stack.push(top);
  }
  
  // Example usage
  const stack = [1, 2, 3, 4, 5];
  console.log('Original stack:', stack);
  reverseStack(stack);
  console.log('Reversed stack:', stack);
  