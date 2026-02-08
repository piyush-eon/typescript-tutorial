// Basic function with types
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameters
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("Piyush")); // Hello, Piyush!
console.log(greet("Piyush", "Namaste")); // Namaste, Piyush!

// Default parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// Arrow functions
const divide = (a: number, b: number): number => a / b;

// Function types
let calculate: (x: number, y: number) => number;
calculate = add;
