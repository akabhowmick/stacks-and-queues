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
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    //Step 2: Implement push method
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    // Step 3: Implement pop method
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    // Step 4: Implement peek method
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    // Step 5: Implement isEmpty and size methods
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    // Step 6: Implement print method
    Stack.prototype.print = function () {
        console.log(this.items.join(" | "));
    };
    return Stack;
}());
// Uncomment The Code Below to See If It Works! Feel free to write more code to test and examine the functionality of the stack.
var stack = new Stack(); // Create a stack that stores numbers
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 10 | 20 | 30
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false
