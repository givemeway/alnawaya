import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ContactPage } from "./Contact";
import { AboutUsPage } from "./About";
import { CategoryProductPage } from "./ProductsPage";
import { ProductPage } from "./ProductPage";
import { JewelleryCarePage } from "./Jewellerycare";
import { TermsPage } from "./Terms";
import { PrivacyPage } from "./Privacy";
import { ReturnPage } from "./Return";
import { ShippingPage } from "./Shipping";
import { ExchangePage } from "./Exchange";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/product-category/*" element={<CategoryProductPage />} />
      <Route path="/product/*" element={<ProductPage />} />
      <Route path="/jewelry-care" element={<JewelleryCarePage />} />
      <Route path="/terms-conditions" element={<TermsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
      <Route path="/refund-return" element={<ReturnPage />} />
      <Route path="/shipping-handeling" element={<ShippingPage />} />
      <Route path="/request-form" element={<ExchangePage />} />
    </Routes>
  );
}

export default App;
