import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ContactPage } from "./Contact";
import { AboutUsPage } from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
