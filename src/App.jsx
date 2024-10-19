import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import College from "./components/SingleBlog/College";
import Finances from "./components/SingleBlog/Finances";
import CyberSecurity from "./components/SingleBlog/CyberSecurity";
import DataScience from "./components/SingleBlog/DataScience";
import AboutPage from "./components/About/AboutPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/college" element={<College />} />
        <Route path="/blog/finances" element={<Finances />} />
        <Route path="/blog/cybersecurity" element={<CyberSecurity />} />
        <Route path="/blog/datascience" element={<DataScience />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
