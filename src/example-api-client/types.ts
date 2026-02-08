export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type ApiResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };
