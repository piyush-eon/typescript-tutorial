// Primitives
let userName: string = "Piyush";
let age: number = 26;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Piyush", "RoadsideCoder", "AlgoAgarwal"];

// Tuples
let person: [string, number] = ["Piyush", 26];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let favoriteColor: Color = Color.Blue;

// Any (avoid when possible)
let randomValue: any = 10;
randomValue = "string";
randomValue = true;

// Unknown (safer than any)
let userInput: unknown;
userInput = 5;
userInput = "text";

// Void (for functions that don't return)
function logMessage(message: string): void {
  console.log(message);
}

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
