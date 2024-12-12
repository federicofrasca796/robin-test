export default function Post({ params }: { params: { post: string } }) {
  return (
    <div>
      <h1>Post: {params.post}</h1>
    </div>
  );
}
