import { Outlet } from "react-router-dom";
import MyPage from "./MyPage";

export default function About() {
    return (
        <>
        <Outlet />
        <MyPage />
        </>
    )}