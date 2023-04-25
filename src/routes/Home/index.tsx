import { Outlet } from "react-router-dom";
import ContentsList from "./ContentsList";

export default function Home() {
  return (
    <>
      <Outlet />
      <ContentsList />
    </>
  );
}
