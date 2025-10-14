import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 👇 Apna GA Measurement ID baad me yahan replace karo
const GA_TRACKING_ID = "G-XXXXXXX";  

export default function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // sirf tabhi chalega jab GA script loaded ho aur ID set ho
    if (window.gtag && GA_TRACKING_ID !== "G-XXXXXXX") {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}
