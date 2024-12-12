import { BlogPost } from "@/app/types";
import { API_ROUTES } from "./routes";

export const getPosts = (): Promise<BlogPost[] | Error> => {
  return fetch(API_ROUTES.posts)
    .then((res) => res.json())
    .catch((error: Error) => {
      throw new Error(error.message, { cause: error });
    });
};
