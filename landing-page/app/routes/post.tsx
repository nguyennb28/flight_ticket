import type { Route } from "../+types/root";

export async function loader({ params }: Route.LoaderArgs) {
  const postId = params.postId;
  return {
    postId,
  };
}

export async function action() {}

const Post = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div>
      <p>Post Id: {loaderData.postId}</p>
    </div>
  );
};

export default Post;
