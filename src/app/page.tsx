import PostList from "@/components/post-list";
import { getPosts } from "@/services/posts";

export default async function Home() {
  const posts = await getPosts(10);

  // Shows error boundary and narrows type
  if (posts instanceof Error) throw posts;

  return (
    <>
      <main className="container lg:max-w-screen-md max-md:px-4 my-12">
        <PostList posts={posts} />
      </main>
    </>
  );
}
