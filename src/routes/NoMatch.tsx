import { Outlet } from "react-router-dom";

export default function NoMatch() {
  return (
    <>
      <Outlet />
      <div className="col-md-10 col-lg-8 col-xl-7">
        <p className="text-xl text-center p-4 alert alert-error">
          No Pages Found!
        </p>
      </div>
    </>
  );
}
