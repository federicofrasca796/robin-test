// TODO: Possibly move to env file for env domain detection
const API_BASE_URL = "http://localhost:3000/api" as const;

export const API_ROUTES = {
  posts: `${API_BASE_URL}/posts/`,
} as const;
