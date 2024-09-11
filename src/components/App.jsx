import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ContactPage } from "./Contact";
import { AboutUsPage } from "./About";
import { CategoryProductPage, ProductsPage } from "./ProductsPage";
import { ProductPage } from "./ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/product-category/*" element={<CategoryProductPage />} />
      <Route path="/product/*" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
