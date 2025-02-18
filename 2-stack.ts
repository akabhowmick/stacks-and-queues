// Step 1: Create a Stack class
// - Define a class named Stack.
// - Look into the private keyword. Make sure we can initialize a stack of any input type.
// - Initialize the stack in the constructor. Remember, we may need to utilize other data structures here to create the behavior we are looking for.

// Step 2: Implement push method
// - Create a method to add an element to the stack.
// - Add the element to the end of the array (top of the stack).

// Step 3: Implement pop method
// - Create a method to remove the last element (top of the stack).
// - If the stack is empty, return null.
// - Otherwise, remove and return the last item.

// Step 4: Implement peek method
// - Create a method to return the last element without removing it.
// - If the stack is empty, return null.

// Step 5: Implement isEmpty and size methods
// - Create a method to check if the stack is empty.
// - Create a method to return the number of elements in the stack.

// Step 6: Implement print method
// - Create a method to display the stack elements.
// - Print elements in order, separated by " | " with the top of the stack on the right.

// Step 1: Create a Stack class
export class Stack<T> {
  private items: T[] = [];

  constructor() {}
  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  print(): void {
    console.log(this.items.join(" | "));
  }
}

// Uncomment The Code Below to See If It Works! Feel free to write more code to test and examine the functionality of the stack.
// const stack1 = new Stack<number>(); // Create a stack that stores numbers
// stack1.push(10);
// stack1.push(20);
// stack1.push(30);
// stack1.print(); // Output: 10 | 20 | 30
// console.log(stack1.pop()); // 30
// console.log(stack1.pop()); // 20
// console.log(stack1.peek()); // 10
// console.log(stack1.size()); // 1
// console.log(stack1.isEmpty()); // false
