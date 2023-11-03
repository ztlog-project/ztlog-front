import { Outlet } from "react-router-dom";
import TagList from "./TagsList";

export default function Tags() {
    return (
        <>
        <Outlet />
        <TagList />
        </>
    )}