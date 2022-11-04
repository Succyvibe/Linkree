import { Routes, Route } from "react-router-dom";

import Main from "./components/Main.js";

import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App  bg-white]">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
