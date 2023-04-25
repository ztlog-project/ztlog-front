import { Outlet } from "react-router-dom";
import ContentsSection from "./ContentsSection";

export default function Contents() {
  return (
    <>
      <Outlet />
      <ContentsSection />
    </>
  );
}
