import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_TRACKING_ID = "G-RVFSE9EYDZ"; // ✅ Your GA ID

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Pageview on first load
    if (!window.gtag) {
      // inject GA script if not already
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
      `;
      document.head.appendChild(script2);
    } else {
      // On route change
      window.gtag("config", GA_TRACKING_ID, { page_path: location.pathname });
    }
  }, [location]);
};

export default useAnalytics;
