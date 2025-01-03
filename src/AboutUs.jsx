import React from "react";
import "./AboutUs.css";
import Navbar from "./Nav/Navbar";
import Footer from "./Components/Footer";

const KlobTech = () => {
  const stats = [
    { number: "3450", label: "FOLLOWERS" },
    { number: "1000+", label: "PRODUCT" },
    { number: "560", label: "SALES" },
    { number: "850", label: "JOB EVENT" },
  ];

  const services = [
    {
      title: "WEB DEVELOPMENT",
      icon: "💻",
      description:
        "We specialize in delivering high-quality, secure, and cost-effective web development services, ensuring user-friendly solutions for businesses worldwide.",
    },
    {
      title: "MOBILE APP",
      icon: "📱",
      description:
        "KLobTech is a top mobile app development company, dedicated to delivering high-quality, customer-focused solutions on time and within budget.",
    },
    {
      title: "CMS",
      icon: "🛍️",
      description:
        "At KLobtech, we provide a range of e-commerce development services tailored to meet all the requirements of the e-commerce sector.",
    },
  ];

  const technologies = [
    "PYTHON",
    "UI / UX DESIGNER",
    "GRAPHIC DESIGNING",
    "FLUTTER APP",
    "ANDROID APP",
    "IOS APP",
    "REACT NATIVE",
    "JAVA SCRIPT",
    "PHP",
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="klobtech">
        {/* Hero Section */}
        <section className="klobtech__hero">
          <div className="klobtech__container">
            <h1 className="klobtech__hero-title">WELCOME TO KLOBTECH</h1>
            <p className="klobtech__hero-text">
              Unleashing the power of the latest web and mobile technologies, we
              passionately build, foster, and fortify your business, ensuring a
              dynamic and resilient online presence.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="klobtech__stats">
          <div className="klobtech__container">
            <div className="klobtech__stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="klobtech__stats-item">
                  <h3 className="klobtech__stats-number">{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="klobtech__about">
          <div className="klobtech__container">
            <div className="klobtech__about-grid">
              <div>
                <h2 className="klobtech__section-title">ABOUT US</h2>
                <p>
                  KLobTech, Your top-tier Mobile and Web App Development Company
                  in India. We excel in technological expertise, customizing
                  solutions for your brand's online dominance. Innovation meets
                  proficiency, making us your key to a standout digital
                  identity.
                </p>
              </div>
              <div>
                <h2 className="klobtech__section-title">VISION & MISSION</h2>
                <p>
                  KLobTech envisions being your key to success, providing
                  top-notch software and web services with a focus on quality
                  and efficiency.
                </p>
                <br />
                <p>
                  Our mission is to consistently exceed your expectations,
                  empowering our team to deliver superior performance and
                  accelerate your business's pace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="klobtech__services">
          <div className="klobtech__container">
            <h2 className="klobtech__section-title">OUR SERVICES</h2>
            <div className="klobtech__services-grid">
              {services.map((service, index) => (
                <div key={index} className="klobtech__service-card">
                  <div className="klobtech__service-icon">{service.icon}</div>
                  <h3 className="klobtech__service-title">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="klobtech__tech">
          <div className="klobtech__container">
            <h2 className="klobtech__section-title">
              TECHNOLOGIES WE WORK WITH
            </h2>
            <div className="klobtech__tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="klobtech__tech-item">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default KlobTech;
