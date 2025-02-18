// BE SURE TO IMPORT YOUR QUEUE CLASS

import { Queue } from "./1-queue";

// ==============================
// 1️⃣ Implement a Recent Calls Counter
// ==============================
// Write a function that counts the number of requests received in the past 3000 milliseconds.
// Use a queue to efficiently track the timestamps of requests.

export class RecentCounter {
  private queue: Queue<number>;

  constructor() {
    this.queue = new Queue<number>();
  }

  ping(t: number): number {
    this.queue.enqueue(t);

    // Remove timestamps that are older than 3000 milliseconds from the current request
    while (!this.queue.isEmpty() && this.queue.front()! < t - 3000) {
      this.queue.dequeue();
    }

    return this.queue.size();
  }
}

// Example Test Cases:
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1)); // returns 1
console.log(recentCounter.ping(100)); // returns 2
console.log(recentCounter.ping(3001)); // returns 3
console.log(recentCounter.ping(3002)); // returns 3

// ==============================
// 2️⃣ First Unique Character in a String
// ==============================
// Given a string `s`, find the **first unique character** and return its index.
// If no unique character exists, return `-1`. Use a queue to efficiently track character order.

// Example Test Cases:
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1

function firstUniqChar(s: string): number {
  const queue = new Queue<number>();
  const freqMap = new Map<string, number>();
  for (const char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (freqMap.get(s[i]) === 1) {
      queue.enqueue(i);
    }
  }
  return queue.isEmpty() ? -1 : queue.front()!;
}

// ==============================
// 3️⃣ Implement a Stack Using Queues
// ==============================
// Implement a stack using only two queues.
// The implemented stack should support `push`, `pop`, `top`, and `isEmpty` operations.

class MyStack<T> {
  private queue1: Queue<T>;
  private queue2: Queue<T>;

  constructor() {
    this.queue1 = new Queue<T>(); // Main queue holding elements
    this.queue2 = new Queue<T>(); // Temporary queue for reordering
  }

  push(x: T): void {
    // Step 1: Enqueue new element to queue2
    this.queue2.enqueue(x);

    // Step 2: Transfer all elements from queue1 to queue2
    while (!this.queue1.isEmpty()) {
      this.queue2.enqueue(this.queue1.dequeue()!);
    }

    // Step 3: Swap queue1 and queue2 to maintain order
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
  }

  pop(): T | undefined {
    return this.queue1.dequeue(); // Since the top element is always at the front
  }

  top(): T | undefined {
    return this.queue1.front();
  }

  isEmpty(): boolean {
    return this.queue1.isEmpty();
  }
}

// Example Test Cases:
const myStack = new MyStack<number>();
myStack.push(1);
myStack.push(2);
console.log(myStack.top()); // returns 2
console.log(myStack.pop()); // returns 2
console.log(myStack.isEmpty()); // returns false

// ==============================
// 4️⃣ Rotting Oranges
// ==============================
// Given a 2D grid where `0` is an empty cell, `1` is a fresh orange, and `2` is a rotten orange,
// determine the minimum number of minutes needed for all fresh oranges to rot. Use BFS with a queue.

// Example Test Cases:
console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
); // 4
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
); // -1
console.log(orangesRotting([[0, 2]])); // 0

function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue: Queue<[number, number, number]> = new Queue(); // Store (row, col, time)
  let freshOranges = 0;
  let minutes = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.enqueue([r, c, 0]);
      } else if (grid[r][c] === 1) {
        freshOranges++;
      }
    }
  }

  const directions = [
    [0, 1], // Right
    [0, -1], // Left
    [1, 0], // Down
    [-1, 0], // Up
  ];

  while (!queue.isEmpty()) {
    const [r, c, time] = queue.dequeue()!;
    minutes = time;
    for (const [dr, dc] of directions) {
      const newRow = r + dr;
      const newCol = c + dc;
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 1
      ) {
        grid[newRow][newCol] = 2;
        freshOranges--;
        queue.enqueue([newRow, newCol, time + 1]);
      }
    }
  }
  return freshOranges === 0 ? minutes : -1;
}

// ==============================
// 5️⃣ Sliding Window Maximum
// ==============================
// Given an array `nums` and an integer `k`, return the maximum values in every window of size `k`.
// Use a deque (double-ended queue) to efficiently track the max values.

// Example Test Cases:
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // [1]
console.log(maxSlidingWindow([9, 11], 2)); // [11]

// Function to find the maximum values in every window of size `k`
function maxSlidingWindow(nums: number[], k: number): number[] {
  if (nums.length === 0) return [];

  const queue = new Queue<number>(); 
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (!queue.isEmpty() && queue.front()! < i - k + 1) {
      queue.dequeue();
    }

    while (!queue.isEmpty() && nums[queue.getItems()[queue.size() - 1]] < nums[i]) {
      queue.dequeue();
    }

    queue.enqueue(i);

    if (i >= k - 1) {
      result.push(nums[queue.front()!]); 
    }
  }

  return result;
}
