import { BlogPost } from "@/types/posts";
import { API_ROUTES } from "./routes";

export const getPosts = async (limit?: number): Promise<BlogPost[] | Error> => {
  return fetch(API_ROUTES.posts(limit))
    .then((res) => res.json())
    .catch((error: Error) => {
      throw new Error(error.message, { cause: error });
    });
};

export const getPostById = async (
  id: string | number
): Promise<BlogPost | Error> => {
  return fetch(API_ROUTES.postById(id))
    .then((res) => res.json())
    .catch((error: Error) => {
      throw new Error(error.message, { cause: error });
    });
};
