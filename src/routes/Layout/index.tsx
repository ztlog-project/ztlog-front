import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Script from "../../Script";

export default function Layout() {
  return (
    <>
      {/* <Script /> */}
      <Header />
      <div className="container px-3 px-lg-3 main-section">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <SideBar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
