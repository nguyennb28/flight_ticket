import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  // ...prefix("pat" , [

  route("about", "routes/about.tsx"),
  route("post/:postId", "routes/post.tsx"),
  route("blog/", "blog/Blog.tsx"),
  route("policy", "routes/policy.tsx"),

  // Nested route
  layout("routes/dashboard.tsx", [
    route("finances", "routes/finances.tsx"),
    route("personal-info", "routes/personal-info.tsx"),
  ]),
] satisfies RouteConfig;
