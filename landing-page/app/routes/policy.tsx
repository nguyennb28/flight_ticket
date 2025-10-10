import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cài đặt & Quyền riêng tư" },
    { name: "Cài đặt & Quyền riêng tư", content: "Cài đặt & Quyền riêng tư" },
  ];
}

const Policy = () => {
  return (
    <>
      <h1>Policy</h1>
    </>
  );
};

export default Policy;
