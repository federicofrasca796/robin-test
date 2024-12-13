import { BlogPost } from "@/types/posts";
import IconArrowUpLeft from "./icons/IconArrowUpLeft";
import Image from "next/image";

export default function PostList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <PostList.Card key={post.id} post={post} />
      ))}
    </div>
  );
}
PostList.displayName = "PostList";

PostList.Card = function Post({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/post/${post.id}`}
      className="relative border rounded-lg border-gray-500 dark:border-gray-300 flex flex-col md:flex-row gap-5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors overflow-hidden"
    >
      <div className="relative w-full h-72 md:w-72 md:h-52">
        <Image
          src={post.image}
          alt={post.excerpt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="max-md:relative max-md:pt-0 p-5 md:p-5">
        <h2 className="font-bold text-xl md:text-2xl mb-2">{post.title}</h2>
        <p>{post.excerpt}</p>
        <IconArrowUpLeft className="absolute top-0 right-5 md:top-2 md:right-2 w-6 h-6" />
      </div>
    </a>
  );
};
