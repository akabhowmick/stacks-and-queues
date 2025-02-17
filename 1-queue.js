// Step 1: Create a Queue class
// - Define a class named Queue.
// - Look into the private keyword. Make sure we can initialize a queue of any input type.
// - Initialize the queue in the constructor. Remember, we may need to utilize other data structures here to create the behavior we are looking for.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Step 2: Implement enqueue method
// - Create a method to add an element to the queue.
// - Add the element to the end of the array.
// Step 3: Implement dequeue method
// - Create a method to remove the first element.
// - If the queue is empty, return null.
// - Otherwise, remove and return the first item.
// Step 4: Implement front method
// - Create a method to return the first element without removing it.
// - If the queue is empty, return null.
// Step 5: Implement isEmpty and size methods
// - Create a method to check if the queue is empty.
// - Create a method to return the number of elements in the queue.
// Step 6: Implement print method
// - Create a method to display the queue elements.
// - Print elements in order, separated by "<-".
// Uncomment The Code Below to See If It Works! Feel free to write more code to test and examine the functionality of the queue.
// Step 1: Create a Queue class
var Queue = /** @class */ (function () {
    function Queue(initialValues) {
        this.items = [];
        if (initialValues) {
            this.items = __spreadArray([], initialValues, true);
        }
    }
    // Step 2: Implement enqueue method
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    // Step 3: Implement dequeue method
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    // Step 4: Implement front method
    Queue.prototype.front = function () {
        return this.items[0];
    };
    // Step 5: Implement isEmpty and size methods
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    // Step 6: Implement print method
    Queue.prototype.print = function () {
        console.log(this.items.join(" <- "));
    };
    return Queue;
}());
var queue = new Queue(); // Create a queue that stores numbers
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: 10 <- 20 <- 30
console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
console.log(queue.size()); // 2
console.log(queue.isEmpty()); // false
