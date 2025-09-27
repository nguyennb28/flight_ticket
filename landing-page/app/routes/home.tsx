import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lịch trình bay của sân bay Cát Bi" },
    { name: "description", content: "Welcome to our website!" },
  ];
}

export default function Home() {
  // return <Blog />;
  return <>Heyyy</>;
}
