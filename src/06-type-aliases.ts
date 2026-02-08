// Type alias
type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };

// Type alias for primitives
type ID = string | number;

let userId: ID = "piyush123";
let productId: ID = 456;

// Type alias vs Interface
// Interfaces can be extended, type aliases cannot
// Interfaces can be declared multiple times and will merge
// Use interfaces for object shapes, type aliases for unions/intersections
