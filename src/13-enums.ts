// Numeric enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// String enum
enum ResponseStatus {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

// Const enum (more performant)
const enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

function handleResponse(status: HttpStatus): void {
  if (status === HttpStatus.OK) {
    console.log("Success!");
  }
}
