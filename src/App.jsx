import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ✅ Add this line
import useAnalytics from "./useAnalytics";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import "./pages/AboutPage.css";
import Amazon from "./pages/Amazon";
import Ebay from "./pages/Ebay";
import Shopify from "./pages/Shopify";
import TikTokShop from "./pages/TiktokShop";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Scrolltotop"; // ✅ matches file name
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  useAnalytics(); // ✅ Google Analytics tracker

  return (
    <HelmetProvider> {/* ✅ Wrap entire app */}
      <ScrollToTop /> {/* ✅ Scroll restore */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/amazon" element={<Amazon />} />
        <Route path="/ebay" element={<Ebay />} />
        <Route path="/shopify" element={<Shopify />} />
        <Route path="/tiktokshop" element={<TikTokShop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </HelmetProvider>
  );
};

export default App;
