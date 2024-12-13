import PostList from "@/components/PostList";
import { getPosts } from "@/services/posts";

export default async function Home() {
  const posts = await getPosts();

  // Shows error boundary and narrows type
  if (posts instanceof Error) throw posts;

  return (
    <>
      <header className="flex flex-col justify-center items-center gap-2 min-h-32 py-4 mb-20">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl text-nowrap">
          il Resto del Cagnolino
        </h1>
        <p>Ogni giorno una nuova notizia a quattro zampe</p>
      </header>
      <main className="container lg:max-w-screen-md max-md:px-4 mx-auto my-12">
        <PostList posts={posts} />
      </main>
    </>
  );
}
