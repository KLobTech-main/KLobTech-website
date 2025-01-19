import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import aimlImg from "./Assets/ai.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function Aiml() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const services = [
    {
      title: "Predictive Data Analytics",
      description:
        "Leverage data to predict trends and make informed decisions. Our algorithms optimize processes, forecast sales, and manage risks, keeping you ahead in a competitive landscape.",
    },
    {
      title: "NLP Services",
      description:
        "Revolutionize user interaction with NLP. We enable chatbots and sentiment analysis, allowing machines to understand and respond to human language for smarter engagement.",
    },
    {
      title: "Visual Data Recognition",
      description:
        "Enhance applications with AI-driven image and video recognition. Our solutions automate visual data processing, transforming industries like security, healthcare, and retail.",
    },
    {
      title: "Conversational AI Solutions",
      description:
        "Improve customer interactions with AI-powered chatbots and virtual assistants. Automate tasks, offer personalized support, and provide 24/7 service to enhance engagement and efficiency.",
    },
    {
      title: "Machine Learning Solutions",
      description:
        "Unlock the power of your data with tailored machine learning solutions. From deep learning to clustering, we design intelligent systems that drive decision-making and automate processes.",
    },
    {
      title: "Fraud Detection Systems",
      description:
        "Strengthen security with AI-powered fraud detection. We use advanced algorithms to detect anomalies and safeguard sensitive data, ensuring your business stays protected.",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      {!isMobile && (
        <>
          <Logo />
          <BackToTopButton />
          <Scrolltotop />
          <Navbar />

          <div className="serviceHero">
            <div>
              <img
                src={aimlImg}
                alt="AI/ML Development"
                className="serviceHeroImg"
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">AI/ML Development</h1>
              </div>

              <p className="heroDescription">
                At KLobTech, we harness the power of Artificial Intelligence and
                Machine Learning (AI/ML) to deliver transformative solutions
                that drive business innovation. Our expert team specializes in
                building intelligent systems that learn from data, automate
                processes, and provide actionable insights. From predictive
                analytics and natural language processing (NLP) to image
                recognition and fraud detection, we develop AI-driven
                applications that enhance user experience.
              </p>
            </div>
          </div>

          <div className="mobileServiceGridContainer">
            <div className="serviceGridTitleContainer">
              <p className="serviceTitle">
                Why Choose KLobTech for AI/ML Development?
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
              <div className="w-40 h-40">
                <img
                  src={aimlImg}
                  alt="Mobile App Icon"
                  className="mobileHeroImg"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">AI/ML Development</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  At KLobTech, we harness the power of Artificial Intelligence
                  and Machine Learning (AI/ML) to deliver transformative
                  solutions that drive business innovation. Our expert team
                  specializes in building intelligent systems that learn from
                  data, automate processes, and provide actionable insights.
                  From predictive analytics and natural language processing
                  (NLP) to image recognition and fraud detection, we develop
                  AI-driven applications that enhance user experience.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-12 px-4 bg-white">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
              Why Choose <span className="text-teal-500">KLobTech</span> for
              AI/ML Development?
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

export default Aiml;
