import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link, Outlet } from "react-router-dom";
import digitalImg from "./assets/digital.png";
import ScrollToTop from "../Components/ScrollToTop";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import "../index.css";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function Digitalmarketing() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const services = [
    {
      title: "SEO Optimization",
      description:
        "Enhance your online visibility and drive organic traffic with our SEO services. We implement effective on-page and off-page strategies to ensure your business ranks higher on search engine results.",
    },
    {
      title: "PPC Advertising",
      description:
        "Boost your reach and ROI with targeted pay-per-click campaigns. Our PPC experts create customized ads across platforms like Google Ads and social media to drive qualified leads to your business.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Engage and grow your audience through strategic social media marketing. We manage and optimize your presence on platforms like Facebook, Instagram, LinkedIn, and Twitter to increase brand awareness and customer loyalty.",
    },
    {
      title: "Content Marketing",
      description:
        "Elevate your brand with valuable, engaging content. From blog posts to videos, we create content that speaks to your audience, enhances brand authority, and drives conversions.",
    },
    {
      title: "Email Marketing",
      description:
        "Build strong relationships with your customers using targeted email marketing campaigns. Our services include personalized email content, automation, and performance tracking to increase engagement and sales.",
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "Maximize your website's effectiveness with conversion rate optimization. We analyze user behavior, test strategies, and make data-driven improvements.",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      {!isMobile && (
        <>
          <Logo />
          <BackToTopButton />
          <ScrollToTop />
          <Navbar />

          {/* Hero Section */}
          <div className="serviceHero">
            <div>
              <img
                src={digitalImg}
                alt="Digital Marketing"
                className="w-[100%] max-w-[700px] h-auto" // Increased image size
              />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">Digital Marketing</h1>
              </div>
              <p className="heroDescription">
                KLobTech offers comprehensive digital marketing services
                designed to elevate your e-commerce business. Our team leverages
                the latest strategies, tools, and platforms to enhance your
                online presence, drive targeted traffic, and maximize
                conversions. From SEO and pay-per-click advertising to social
                media management and email campaigns, we tailor our solutions to
                meet your unique business goals.
              </p>
            </div>
          </div>

          {/* Service Features */}
          <div className="mobileServiceGridContainer">
            <div className="serviceGridTitleContainer">
              <p className="serviceTitle">
                Why Choose KLobTech for Digital Marketing Services?
              </p>
            </div>
            <div className="gridArea">
              {services.map((service, index) => (
                <div className="appService" key={index}>
                  <div className="appServiceTitleArea">
                    <p>{service.title}</p>
                  </div>
                  <div className="appServiceDescriptionArea">
                    <p className="appServiceDescription">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Footer />
        </>
      )}

      {/* Mobile View */}
      {isMobile && (
        <div className="font-sans">
          {/* Mobile Navbar */}
          <Navbar />

          {/* Hero Section */}
          <section className="py-12 px-4 text-center bg-[#f3f3f3] rounded-3xl mx-8">
            <div className="flex flex-col items-center gap-6">
              <div className="w-48 h-48">
                <img
                  src={digitalImg}
                  alt="Digital Marketing"
                  className="w-full h-full object-cover" // Increased image size
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">Digital Marketing</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  KLobTech offers comprehensive digital marketing services
                  designed to elevate your e-commerce business. Our team
                  leverages the latest strategies, tools, and platforms to
                  enhance your online presence, drive targeted traffic, and
                  maximize conversions. From SEO and pay-per-click advertising
                  to social media management and email campaigns, we tailor our
                  solutions to meet your unique business goals.
                </p>
              </div>
            </div>
          </section>

          {/* Service Features */}
          <section className="py-12 px-4 bg-white">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
              Why Choose <span className="text-teal-500">KLobTech</span> for
              Digital Marketing?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[85%] mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-teal-500 mb-4 border-b-4 border-teal-500 inline-block pb-2">
                    {service.title}
                  </h3>
                  <p className="text-xl md:text-xl text-gray-600 leading-relaxed text-justify">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Mobilefooter />
        </div>
      )}
    </>
  );
}

export default Digitalmarketing;
