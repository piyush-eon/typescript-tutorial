// Union types (OR)
type Status = "pending" | "approved" | "rejected";

function setStatus(status: Status): void {
  console.log(`Status set to: ${status}`);
}

setStatus("approved");
// setStatus("completed"); // Error!

type StringOrNumber = string | number;

function printId(id: StringOrNumber): void {
  if (typeof id === "string") {
    console.log(`ID (string): ${id.toUpperCase()}`);
  } else {
    console.log(`ID (number): ${id}`);
  }
}

// Intersection types (AND)
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

let myCircle: ColorfulCircle = {
  color: "red",
  radius: 10,
};
