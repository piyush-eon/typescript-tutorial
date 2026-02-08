import { User, Post, ApiResponse } from "./types";

class ApiClient {
  constructor(private baseUrl: string) {}

  private async request<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      if (!response.ok) {
        return {
          success: false,
          error: `HTTP error! status: ${response.status}`,
        };
      }
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async getUsers(): Promise<ApiResponse<User[]>> {
    return this.request<User[]>("/users");
  }

  async getUser(id: number): Promise<ApiResponse<User>> {
    return this.request<User>(`/users/${id}`);
  }

  async getPosts(): Promise<ApiResponse<Post[]>> {
    return this.request<Post[]>("/posts");
  }

  async getUserPosts(userId: number): Promise<ApiResponse<Post[]>> {
    return this.request<Post[]>(`/posts?userId=${userId}`);
  }
}

// Usage
const api = new ApiClient("https://jsonplaceholder.typicode.com");

async function main() {
  console.log("Fetching Piyush's data...");

  const usersResponse = await api.getUsers();

  if (usersResponse.success) {
    const piyush = usersResponse.data.find((u) => u.name === "Piyush");
    if (piyush) {
      console.log("User:", piyush);

      const postsResponse = await api.getUserPosts(piyush.id);
      if (postsResponse.success) {
        console.log(`Piyush has ${postsResponse.data.length} posts`);
      }
    }
  } else {
    console.error("Error:", usersResponse.error);
  }
}

main();
