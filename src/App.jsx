import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Services from "./pages/Services";
import About from "./pages/About";
import Offscreen from "./pages/Offscreen";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<Project />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="off-screen" element={<Offscreen />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
