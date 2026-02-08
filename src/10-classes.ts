class Person {
  // Properties
  private name: string;
  protected age: number;
  public email: string;

  // Constructor
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // Methods
  public introduce(): string {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }

  // Getter
  public getName(): string {
    return this.name;
  }

  // Setter
  public setName(name: string): void {
    this.name = name;
  }
}

// Shorter syntax with parameter properties
class Employee {
  constructor(
    private id: number,
    public name: string,
    protected department: string
  ) {}

  getDetails(): string {
    return `${this.name} works in ${this.department}`;
  }
}

let piyush = new Employee(101, "Piyush", "Engineering");
console.log(piyush.getDetails()); // Piyush works in Engineering

// Inheritance
class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    department: string,
    private teamSize: number
  ) {
    super(id, name, department);
  }

  getTeamInfo(): string {
    return `${this.name} manages ${this.teamSize} people`;
  }
}

// Abstract classes
abstract class Shape {
  constructor(public color: string) {}

  abstract getArea(): number;

  displayColor(): void {
    console.log(`This shape is ${this.color}`);
  }
}

class Rectangle extends Shape {
  constructor(color: string, private width: number, private height: number) {
    super(color);
  }

  getArea(): number {
    return this.width * this.height;
  }
}
