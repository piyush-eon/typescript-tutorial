// Object type annotation
let user: { name: string; age: number } = {
  name: "Piyush",
  age: 26,
};

// Interface
interface User {
  name: string;
  age: number;
  email?: string; // optional property
  readonly id: number; // readonly property
}

let newUser: User = {
  id: 1,
  name: "Piyush",
  age: 25,
};

// newUser.id = 2; // Error: Cannot assign to 'id' because it is read-only

// Interface with methods
interface Product {
  name: string;
  price: number;
  getDiscount(percentage: number): number;
}

let laptop: Product = {
  name: "MacBook Pro",
  price: 2000,
  getDiscount(percentage: number): number {
    return this.price * (percentage / 100);
  },
};
