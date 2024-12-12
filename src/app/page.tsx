import PostList from "@/components/PostList";
import { getPosts } from "@/services/posts";

export default async function Home() {
  const posts = await getPosts();
  console.log({ posts });
  if (posts instanceof Error) throw posts;

  return <PostList posts={posts} />;
}
