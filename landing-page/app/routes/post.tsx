import { Form, Link, redirect, useFetcher, useNavigate } from "react-router";
import type { Route } from "../+types/root";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const postId = params.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return await res.json();
}

// export async function clientAction({ request }: Route.ClientActionArgs) {
//   try {
//     const formData = await request.formData();
//     const id = formData.get("id");
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//       {
//         method: "DELETE",
//       }
//     );
//     return {
//       isDeleted: true,
//     };
//   } catch (err) {
//     return {
//       isDeleted: false,
//     };
//   }
// }

export async function clientAction({ params }: Route.ClientActionArgs) {
  try {
    const postId = params.postId;
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    });
    return {
      isDeleted: true,
    };
  } catch (err) {
    return {
      isDeleted: false,
    };
  }
}

const Post = ({ loaderData }: Route.ComponentProps) => {
  const fetcher = useFetcher();

  const navigate = useNavigate();
  
  
  const isDelete = fetcher.data?.isDeleted;

  return (
    <div>
      {!isDelete && (
        <p>
          <span className="font-bold text-amber-700/70">Title: </span>
          {loaderData.title}
        </p>
      )}
      <Link to={"/about"}>About</Link>
      <br />
      <button onClick={() => navigate("/")}>Redirect</button>
      <fetcher.Form method="delete">
        <button type="submit">Delete</button>
      </fetcher.Form>
    </div>
  );
};

export default Post;
