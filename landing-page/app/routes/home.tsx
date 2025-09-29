import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import SectionOne from "~/components/SectionOne";
import Tracker from "~/components/Tracker";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lịch trình bay của sân bay Cát Bi" },
    { name: "description", content: "Welcome to our website!" },
  ];
}

export default function Home() {
  // return <Blog />;
  return (
    <>
      <SectionOne />
      <Tracker />
    </>
  );
}
