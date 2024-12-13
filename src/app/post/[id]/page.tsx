import { getPostById } from "@/services/posts";
import Image from "next/image";

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPostById(id);

  // Shows error boundary and narrows type
  if (post instanceof Error) throw new Error(`Post id n.${id} not found`);

  return (
    <>
      <main>
        <header className="p-4 h-[calc(50dvh)] relative from-black to-transparent bg-gradient-to-b mb-8">
          <h1 className="text-4xl font-bold text-white">{post.title}</h1>
          <figure className="h-full">
            <Image
              className="object-cover object-top -z-10 rounded-b-3xl"
              src={post.image}
              alt={post.excerpt}
              fill
            />
          </figure>
        </header>

        <article className="container max-md:px-4 lg:max-w-screen-lg min-h-[calc(50dvh-88px)]">
          <div className="mb-10">
            <h2 className="font-bold text-2xl">{post.excerpt}</h2>
            <time className="italic text-gray-700 dark:text-gray-500">
              Pubblicato il{" "}
              {new Date(post.publishDate).toLocaleDateString("it-IT", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <p>{post.text}</p>
        </article>
      </main>
    </>
  );
}
