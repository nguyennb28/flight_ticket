import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("post/:postId", "routes/post.tsx"),
  route("blog/", "blog/Blog.tsx"),

  // Nested route
  route("dashboard", "routes/dashboard.tsx", [
    route("finances", "routes/finances.tsx"),
    route("personal-info", "routes/personal-info.tsx"),
  ]),
] satisfies RouteConfig;
