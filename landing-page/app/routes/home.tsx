import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import SectionOne from "~/components/SectionOne";
import Tracker from "~/components/Tracker";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lịch trình bay của sân bay Cát Bi" },
    { name: "description", content: "Welcome to our website!" },
  ];
}

export default function Home() {
  // return <Blog />;

  useEffect(() => {
    const userAgentString = navigator;
    console.log(userAgentString.userAgent);
  }, []);

  return (
    <>
      <SectionOne />
      <Tracker />
    </>
  );
}
