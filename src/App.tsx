import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Playground from "./pages/Playground";
import About from "./pages/About";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route index element={<Projects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
