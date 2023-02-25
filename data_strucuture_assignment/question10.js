// Write a program to find the smallest number using a stack
class Stack {
    constructor() {
      this.items = [];
      this.minStack = [];
    }
  
    push(item) {
      this.items.push(item);
      if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(item);
      }
    }
  
    pop() {
      const poppedItem = this.items.pop();
      if (poppedItem === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
      return poppedItem;
    }
  
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(5);
  stack.push(2);
  stack.push(7);
  stack.push(1);
  console.log('Smallest number:', stack.getMin()); // Output: 1
  