interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  assignedTo: string;
}

// Partial - makes all properties optional
type PartialTodo = Partial<Todo>;
let updateTodo: PartialTodo = {
  completed: true,
};

// Required - makes all properties required
type RequiredTodo = Required<Todo>;

// Readonly - makes all properties readonly
type ReadonlyTodo = Readonly<Todo>;
let myTodo: ReadonlyTodo = {
  title: "Learn TypeScript",
  description: "Complete tutorial",
  completed: false,
  createdAt: new Date(),
  assignedTo: "Piyush",
};
// myTodo.completed = true; // Error!

// Pick - pick specific properties
type TodoPreview = Pick<Todo, "title" | "completed">;
let preview: TodoPreview = {
  title: "My Todo",
  completed: false,
};

// Omit - omit specific properties
type TodoWithoutDate = Omit<Todo, "createdAt">;

// Record - construct object type with specific keys and value type
type PageInfo = {
  title: string;
  url: string;
};

type Pages = "home" | "about" | "contact";
let pages: Record<Pages, PageInfo> = {
  home: { title: "Home", url: "/" },
  about: { title: "About", url: "/about" },
  contact: { title: "Contact", url: "/contact" },
};

// ReturnType - get return type of function
function createUser() {
  return {
    id: 1,
    name: "Piyush",
    email: "piyush@roadsidecoder.com",
  };
}

type UserType = ReturnType<typeof createUser>;
