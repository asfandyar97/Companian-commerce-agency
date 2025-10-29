import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const steps = document.querySelectorAll(".step");
    const handleTouchStart = (e) => e.currentTarget.classList.add("hover");
    const handleTouchEnd = (e) => e.currentTarget.classList.remove("hover");

    steps.forEach((step) => {
      step.addEventListener("touchstart", handleTouchStart);
      step.addEventListener("touchend", handleTouchEnd);
    });

    const counters = document.querySelectorAll(".counter");

    const animateCounter = (el) => {
      const target = +el.getAttribute("data-target");
      let count = 0;
      const duration = 2000;
      const step = target / (duration / 30);

      const update = () => {
        count += step;
        if (count >= target) {
          el.innerText = target.toLocaleString() + "+";
        } else {
          el.innerText = Math.ceil(count).toLocaleString() + "+";
          requestAnimationFrame(update);
        }
      };

      update();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
            animateCounter(entry.target);
            entry.target.classList.add("counted");
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));

    return () => {
      steps.forEach((step) => {
        step.removeEventListener("touchstart", handleTouchStart);
        step.removeEventListener("touchend", handleTouchEnd);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-wrapper">
      <Helmet>
        <title>Home | Companian Commerce Agency</title>
        <meta
          name="description"
          content="Your trusted eCommerce partner for Amazon, Shopify & TikTok Shop growth."
        />
        <meta property="og:title" content="Companian Commerce Agency" />
        <meta
          property="og:description"
          content="Grow your brand with expert eCommerce services across Amazon, Shopify, eBay, and TikTok Shop."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="hero-section">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src="/night-bridge-3.mp4" type="video/mp4" />
        </video>

        <div className="overlay-content" data-aos="fade-right">
          <h1>
            We Grow Agencies &<br />
            Brands Faster on{" "}
            <span className="highlight">
              Amazon, Ebay, Shopify, Tiktok Shop
            </span>
            <br /> & More
          </h1>
          <p>
            Looking to accelerate growth for your brand or agency?{" "}
            <strong>Companian Commerce</strong> offers flexible, contract-free
            services designed to help you thrive on platforms like Amazon,
            Ebay, Shopify, TikTok Shop. Choose full-service management we're
            here to help you scale faster and smarter.
          </p>

          <div
            className="service-boxes"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div
              className="service-box amazon"
              onClick={() => navigate("/amazon")}
            >
              <img src="/amazon-logo.png" alt="Amazon" />
              <span>Amazon</span>
            </div>
            <div
              className="service-box ebay"
              onClick={() => navigate("/ebay")}
            >
              <img src="/ebay-logo.png" alt="eBay" />
              <span>eBay</span>
            </div>
            <div
              className="service-box shopify"
              onClick={() => navigate("/shopify")}
            >
              <img src="/shopify-logo.png" alt="Shopify" />
              <span>Shopify</span>
            </div>
            <div
              className="service-box tiktok"
              onClick={() => navigate("/tiktok-shop")}
            >
              <img src="/tiktok-logo.png" alt="TikTok Shop" />
              <span>TikTok Shop</span>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image" data-aos="fade-right">
            <img src="lfs-image1.png" alt="Team at Work" />
          </div>
          <div className="about-content" data-aos="fade-left">
            <h2>About Companian Commerce</h2>
            <p>
              At Companian Commerce, we help eCommerce brands launch, grow, and scale across platforms like Amazon, Shopify, TikTok Shop, and eBay. Whether you’re just starting out or managing a growing online store, our expert team provides tailored services from product listings and storefront setup to advertising, SEO, and order management.
            </p>
            <p className="about-highlight">
              Your growth is our mission — we don’t just work with sellers, we build lasting success stories.
            </p>
            <a href="/about" className="read-more-btn" data-aos="zoom-in">Read More</a>
          </div>
        </div>
      </section>

      {/* about section end  */}
      {/* White Section */}
      <div className="white-background">
        {/* Amazon Section */}
        <div className="amazon-section">
          <div className="amazon-text" data-aos="fade-right">
            <p className="small-title">Power up your eCommerce Journey</p>
            <h2>Best Amazon Account Management Services Agency</h2>
            <p className="description">
              We specialize in comprehensive Amazon Seller Account Management,
              offering a range of services. Let us assist you in optimizing your
              Amazon presence and driving your business to new heights.
            </p>
          </div>
          <div className="amazon-image" data-aos="fade-left">
            <img src="a-1.png" alt="Amazon" />
          </div>
        </div>

        <div className="amazon-end-section">
          <div className="amazon-end-text" data-aos="fade-right">
            <h2>End to end Amazon Account Management Service</h2>
            <p className="description">
              Along with ensuring that your brand story is consistent across your
              Amazon Product Listings, we protect your brand with end-to-end
              compliance and customer satisfaction.
            </p>
            <ul className="amazon-features">
              <li>Storefront Setup</li>
              <li>Strategic Guidance</li>
              <li>Promotional Approaches</li>
              <li>Storefront Monitoring</li>
              <li>Returns & Refunds Management & More</li>
            </ul>
          </div>
          <div className="amazon-end-image" data-aos="fade-left">
            <img src="a-2.png" alt="Amazon Management" />
          </div>
        </div>

        <div className="amazon-brand-section">
          <div className="amazon-brand-text" data-aos="fade-right">
            <h2>Amazon Brand Advertising</h2>
            <p className="description">
              Our team utilizes a mix of advertising strategies across different
              Amazon ad types to drive more traffic to your listings and maximize
              your ROI.
            </p>
            <ul className="amazon-features">
              <li>Paid Advertising Management</li>
              <li>Sponsored Brands Ads</li>
              <li>Sponsored TV Ads</li>
              <li>Sponsored Product Ads</li>
              <li>Sponsored Display Ads</li>
            </ul>
          </div>
          <div className="amazon-brand-image" data-aos="fade-left">
            <img src="a-3.png" alt="Amazon Brand Advertising" />
          </div>
        </div>

        <section className="amazon-brand">
          <h2>Amazon Brand Advertising</h2>
          <p>
            Showcase your brand with Sponsored Brands & VCPM video ads to dominate
            the Amazon search results.
          </p>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="why-choose-us">
          <div className="container">
            <h2 className="section-title">Why Choose Us</h2>

            {/* Animated Counter Section */}
            <div className="counter-section">
              <div className="counter-grid">
                <div className="counter-box">
                  <div>
                    <div className="counter" data-target="2000">0</div>
                  </div>
                  <div className="counter-text">Satisfied Clients Worldwide</div>
                </div>
                <div className="counter-box">
                  <div>
                    <div className="counter" data-target="400">0</div>
                  </div>
                  <div className="counter-text">eCommerce Stores Setup</div>
                </div>
                <div className="counter-box">
                  <div>
                    <div className="counter" data-target="13">0</div>
                  </div>
                  <div className="counter-text">Years of Industry Experience</div>
                </div>
              </div>
            </div>

            <section className="free-audit-section" data-aos="fade-up">
              <div className="free-audit-container">
                <div className="free-audit-left">
                  <h2>We Provide Free Audit</h2>
                  <p>
                    Get a detailed analysis of your store, ads, and competitor strategy from our expert team.
                    We’ll help you identify growth gaps and unlock your brand’s full potential.
                  </p>
                  <ul>
                    <li><span>✔</span> In-depth Store & Ad Review</li>
                    <li><span>✔</span> Competitor Analysis</li>
                    <li><span>✔</span> Actionable Growth Suggestions</li>
                    <li><span>✔</span> Delivered Within 48 Hours</li>
                  </ul>
                  <div className="free-audit-btn-wrapper">
                    <a href="/contact" className="free-audit-btn">Request Free Audit</a>
                  </div>
                </div>
                <div className="free-audit-right">
                  <img src="free-audit.png" alt="Free Audit Image" />
                </div>
              </div>
            </section>

            {/* Features Grid */}
            <div className="features-grid">
              <div className="feature-box">
                <div className="icon"><i className="fas fa-bolt"></i></div>
                <h3>Fast Execution</h3>
                <p>We deliver results quickly while maintaining top quality and efficiency.</p>
              </div>
              <div className="feature-box">
                <div className="icon"><i className="fas fa-brain"></i></div>
                <h3>Expert Strategy</h3>
                <p>Our experienced team builds custom strategies based on your unique goals.</p>
              </div>
              <div className="feature-box">
                <div className="icon"><i className="fas fa-handshake"></i></div>
                <h3>Transparent Communication</h3>
                <p>We keep you updated at every step with clarity and honesty.</p>
              </div>
              <div className="feature-box">
                <div className="icon"><i className="fas fa-chart-line"></i></div>
                <h3>Proven Results</h3>
                <p>Our clients have seen real growth — some reaching 6-7 figures monthly.</p>
              </div>
            </div>
          </div>
        </section>


        <section className="companioncommerce-testimonials">
          <div className="container">
            <h2 className="section-heading">What Our Clients Say</h2>

            <Slider
              dots={true}
              arrows={true}
              infinite={true}
              autoplay={true}
              autoplaySpeed={3000}
              speed={700}
              slidesToShow={2}
              slidesToScroll={1}
              fade={false}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
              className="testimonial-slider orbit-style"
            >
              <div className="testimonial-slide">
                <div className="testimonial-content">
                  <img src="client1.jpg" alt="Elissa" className="profile-pic" />
                  <div className="testimonial-text">
                    <p className="quotation">
                      “Companian Commerce scaled us from $0 to $100K/month,fast, reliable, and focused on results.”
                    </p>
                    <p className="testimonial-author">
                      Elissa A., <span className="client-title">Private Label Seller (UK)</span>
                    </p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-slide">
                <div className="testimonial-content">
                  <img src="cliant2.jpg" alt="katon" className="profile-pic" />
                  <div className="testimonial-text">
                    <p className="quotation">
                      “Companian Commerce helped us crush it with TikTok ads. We 5x’d our ROAS in just 6 weeks.”
                    </p>
                    <p className="testimonial-author">
                      katon R., <span className="client-title">Tiktok Brand Owner (US)</span>
                    </p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-slide">
                <div className="testimonial-content">
                  <img src="cliant3.jpg" alt="janson k" className="profile-pic" />
                  <div className="testimonial-text">
                    <p className="quotation">
                      “I didn’t expect these results. Their Shopify Design & Branding and ad campaigns are truly next-level.”
                    </p>
                    <p className="testimonial-author">
                      janson K., <span className="client-title">Shopify Brand Founder (UAE)</span>
                    </p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-slide">
                <div className="testimonial-content">
                  <img src="cliant5.jpg" alt="Fellion" className="profile-pic" />
                  <div className="testimonial-text">
                    <p className="quotation">
                      “Their team is proactive and responsive. Our eBay store is now performing better than ever.”
                    </p>
                    <p className="testimonial-author">
                      Fellion k., <span className="client-title">ebay Product Listing (US)</span>
                    </p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-slide">
                <div className="testimonial-content">
                  <img src="cliant4.jpg" alt="ronny" className="profile-pic" />
                  <div className="testimonial-text">
                    <p className="quotation">
                      “From branding to ads, Companian Commerce helped us build a 6-figure Shopify business.”
                    </p>
                    <p className="testimonial-author">
                      ronny B., <span className="client-title">Shopify Lifestyle Brand CEO (UK)</span>
                    </p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>





        {/* OUR PROCESS */}
        <div className="our-process-section">
          <h2 className="section-title">
            Our <span className="highlight-gold">Process</span>
          </h2>
          <p className="section-subtitle">
            Transparency is our way of building relationships. So take some time
            and learn how we manage your ecom growth.
          </p>

          <div className="process-container">
            <div className="process-image" data-aos="fade-left">
              <img src="/process-image.png" alt="Our Process" />
            </div>
            <div className="process-steps">
              <div className="step step-yellow" data-aos="fade-right">
                <span>01</span>
                <p>WE'RE LISTENING</p>
              </div>
              <div className="step step-yellow" data-aos="fade-right">
                <span>02</span>
                <p>AUDIT ALL THE WAY IN!</p>
              </div>
              <div className="step step-yellow" data-aos="fade-right">
                <span>03</span>
                <p>BUSINESS PLAN</p>
              </div>
              <div className="step step-yellow" data-aos="fade-right">
                <span>04</span>
                <p>YIELD BENEFITS</p>
              </div>
            </div>
          </div>
        </div>

        {/* HOW WE WORK */}
        <div className="our-process-section">
          <h2 className="section-title">
            How <span className="highlight-gold">We Work</span>
          </h2>
          <p className="section-subtitle">
            Here’s how we help brands like yours grow on top marketplaces.
          </p>

          <div className="we-work-container">
            <div className="we-work-image" data-aos="fade-left">
              <img src="process-image1.png" alt="We Work" />
            </div>
            <div className="process-steps we-work-steps">
              <div className="step" data-aos="fade-left">
                <div className="step-number">1</div>
                <h3>DELIVER</h3>
                <p>Deliver on commitments to earn trust and reliability</p>
              </div>
              <div className="step" data-aos="fade-left" data-aos-delay="100">
                <div className="step-number">2</div>
                <h3>GROW</h3>
                <p>
                  Embrace change, innovate continuously, and unlock new
                  possibilities.
                </p>
              </div>
              <div className="step" data-aos="fade-left" data-aos-delay="200">
                <div className="step-number">3</div>
                <h3>SUCCEED</h3>
                <p>Reach your goals and turn vision into lasting success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
