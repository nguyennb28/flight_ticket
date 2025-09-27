import { Form, redirect } from "react-router";
import type { Route } from "../+types/root";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const postId = params.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return await res.json();
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const id = formData.get("id");
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });

  console.table(res);
  if (res.status == 200) {
    alert("DELETE SUCCESSFULL");
  }

  return redirect(`/post/${id}`);
}

const Post = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div>
      <p>
        <span className="font-bold text-amber-700/70">Title: </span>
        {loaderData.title}
      </p>

      <Form method="delete">
        <input type="text" name="id" className="border-1" />
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
};

export default Post;
