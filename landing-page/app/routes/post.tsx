import type { Route } from "../+types/root";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const postId = params.postId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  return await res.json()
}

export async function action() {}

const Post = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div>
      <p><span className="font-bold text-amber-700/70">Title: </span>{loaderData.title}</p>
    </div>
  );
};

export default Post;
