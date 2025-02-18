// BE SURE TO IMPORT YOUR STACK CLASS

import { Stack } from "./2-stack";

// ==============================
// 1️⃣ Reverse a String Using a Stack
// ==============================
// Write a function that takes a string as input and returns the reversed string using a stack.
// You may only use stack operations (`push`, `pop`, `isEmpty`).

// Example Test Cases:
// console.log(reverseString("hello")) // "olleh"
// console.log(reverseString("world")) // "dlrow"
// console.log(reverseString("")) // ""
// console.log(reverseString("abcd")) // "dcba"
function reverseString(str: string) {
  const stack = new Stack<string>();
  for (let char of str) {
    stack.push(char);
  }
  let reversed = "";
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}
// ==============================
// 2️⃣ Check for Balanced Parentheses
// ==============================
// Given a string containing only the characters `()`, `{}`, and `[]`,
// write a function to determine if the string is valid.
// A string is valid if brackets are closed in the correct order. Use a stack to track open brackets.

// Example Test Cases:
// console.log(isValidParentheses("({[]})")) // true
// console.log(isValidParentheses("({[)]}")) // false
// console.log(isValidParentheses("()")) // true
// console.log(isValidParentheses("{[()]}")) // true
// console.log(isValidParentheses("(((")) // false
function isValidParentheses(s: string) {
  const stack = new Stack<string>();

  // can also use a map to pair open and closed brackets
  const openBrackets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];

  for (let char of s) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      if (stack.isEmpty()) {
        return false;
      }
      const openBracket = stack.pop();
      const openIndex = openBrackets.indexOf(openBracket!);
      const closeIndex = closeBrackets.indexOf(char);
      if (openIndex !== closeIndex) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

// ==============================
// 3️⃣ Evaluate a Postfix Expression
// ==============================
// Write a function that evaluates a mathematical expression in **postfix notation** (Reverse Polish Notation).
// The function should use a stack to process numbers and operators.
// Assume the input is a space-separated string of numbers and `+`, `-`, `*`, or `/` operators.

// Example Test Cases:
// console.log(evaluatePostfix("3 4 +")) // 7
// console.log(evaluatePostfix("5 1 2 + 4 * + 3 -")) // 14
// console.log(evaluatePostfix("10 2 8 * + 3 -")) // 23
// console.log(evaluatePostfix("6 2 /")) // 3
// console.log(evaluatePostfix("4 5 * 2 /")) // 10
function evaluatePostfix(s: string) {
  const stack = new Stack<number>();
  const tokens = s.split(" ");
  for (let token of tokens) {
    if (!isNaN(Number(token))) {
      stack.push(Number(token));
    } else {
      const b = stack.pop() || 0;
      const a = stack.pop() || 0;
      if (token === "+") {
        stack.push(a + b);
      } else if (token === "-") {
        stack.push(a - b);
      } else if (token === "*") {
        stack.push(a * b);
      } else if (token === "/") {
        stack.push(a / b);
      }
    }
  }
  return stack.pop();
}

// ==============================
// 4️⃣ Next Greater Element
// ==============================
// Given an array of integers, find the **next greater element** for each element.
// The next greater element of an element **x** is the first element to the right that is greater than **x**.
// If none exists, return `-1` for that element. Use a stack for efficiency.

// Example Test Cases:
console.log(nextGreaterElement([4, 5, 2, 10, 8])) // [5, 10, 10, -1, -1]
console.log(nextGreaterElement([3, 2, 1])) // [-1, -1, -1]
console.log(nextGreaterElement([1, 3, 2, 4])) // [3, 4, 4, -1]
function nextGreaterElement(nums: number[]): number[] {
  const stack = new Stack<number>();
  const result: number[] = new Array(nums.length).fill(-1); 
  for (let i = nums.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && (stack.peek() as number) <= nums[i]) {
      stack.pop();
    }
    if (!stack.isEmpty()) {
      result[i] = stack.peek() as number;
    }
    stack.push(nums[i]); 
  }
  return result;
}

// ==============================
// 5️⃣ Daily Temperatures
// ==============================
// Given an array `temperatures` where `temperatures[i]` is the temperature on day `i`,
// return an array **answer** where `answer[i]` is the number of days you have to wait after the `i-th` day
// to get a warmer temperature. If there is no future day with a warmer temperature, return `0`.

// Example Test Cases:
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
// console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
// console.log(dailyTemperatures([30, 20, 10])); // [0, 0, 0]
function dailyTemperatures(temperatures: number[]): number[] {
  const stack = new Stack<number>(); 
  const result: number[] = new Array(temperatures.length).fill(0); 
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && temperatures[i] >= temperatures[stack.peek() as number]) {
      stack.pop();
    }
    if (!stack.isEmpty()) {
      result[i] = (stack.peek() as number) - i;
    }
    stack.push(i); 
  }
  return result;
}
