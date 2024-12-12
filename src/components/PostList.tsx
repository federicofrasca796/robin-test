import { BlogPost } from "@/app/types";

export default function PostList({ posts }: { posts: BlogPost[] }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="mb-4">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
