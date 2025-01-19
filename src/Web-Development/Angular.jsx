import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import angularImg from "./Assets/angular.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function Angular() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const services = [
    {
      title: "AngularJS Mobile App Development",
      description:
        "Develop powerful mobile apps using AngularJS, integrated with frameworks like NativeScript, React Native, and Ionic for seamless, high-performance solutions across platforms.",
    },
    {
      title: "AngularJS Web App Development",
      description:
        "Build custom AngularJS web applications optimized for speed, functionality, and visual appeal, ensuring a smooth, engaging experience across devices. Our solutions are tailored to meet your business needs while providing seamless performance and scalability.",
    },
    {
      title: "AngularJS Hybrid App Development",
      description:
        "Create secure, high-performing hybrid apps that seamlessly work across multiple devices, delivering a consistent and great user experience. Our team leverages the latest frameworks to ensure smooth functionality and fast performance.",
    },
    {
      title: "Custom AngularJS Development",
      description:
        "Our AngularJS development team provides tailored solutions that align with your specific business needs, offering scalable and flexible applications for optimal growth.",
    },
    {
      title: "AngularJS to Angular Migration",
      description:
        "Easily upgrade your AngularJS application to the latest Angular versions with our smooth migration services, ensuring no disruptions to performance or functionality.",
    },
    {
      title: "AngularJS API Integration",
      description:
        "Enhance your AngularJS apps with seamless API integrations, connecting your application to third-party services to improve functionality and provide additional features.",
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
                src={angularImg}
                alt="Angular Development"
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
                <h1 className="heroTitle">Angular Development</h1>
              </div>

              <p className="heroDescription">
                Experience exceptional web development with KLobTech, your
                trusted AngularJS experts. We specialize in delivering custom,
                user-friendly, and scalable AngularJS solutions tailored to your
                business needs. As a leading Angular web development company, we
                provide lightweight, high-performance AngularJS enterprise
                solutions designed to optimize your operations. Our certified
                Angular developers have a proven track record of transforming
                businesses, offering reliable and innovative solutions.
              </p>
            </div>
          </div>

          <div className="mobileServiceGridContainer">
            <div className="serviceGridTitleContainer">
              <p className="serviceTitle">
                Why Choose KLobTech for Angular JS Development?
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
                  src={angularImg}
                  alt="Angular Development"
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
                  <span className="text-[#333333]">Angular Development</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  Experience exceptional web development with KLobTech, your
                  trusted AngularJS experts. We specialize in delivering custom,
                  user-friendly, and scalable AngularJS solutions tailored to
                  your business needs. As a leading Angular web development
                  company, we provide lightweight, high-performance AngularJS
                  enterprise solutions designed to optimize your operations. Our
                  certified Angular developers have a proven track record of
                  transforming businesses, offering reliable and innovative
                  solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-12 px-4 bg-white">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
              Why Choose <span className="text-teal-500">KLobTech</span> for
              Angular JS Development?
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

export default Angular;
