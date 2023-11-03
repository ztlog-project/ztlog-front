import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Contents from "./Contents";
import NoMatch from "./NoMatch";
import Tags from "./Tags";
import About from "./About";

export default function RouteSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/about" element={<About />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
