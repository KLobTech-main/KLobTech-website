import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import educationImg from "./assets/education.png";
import ScrollToTop from "../Components/ScrollToTop";
import { useMediaQuery } from "react-responsive";
import Mobilefooter from "../Mobilefooter";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";
import "./Services.css";

function Education() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const features = [
    {
      title: "Hands-On Learning",
      description:
        "Our internship programs provide real-world projects where you can apply your skills and gain practical experience.",
    },
    {
      title: "Industry Mentorship",
      description:
        "Interns benefit from mentorship by experienced professionals who guide them through real-world challenges.",
    },
    {
      title: "Comprehensive Education",
      description:
        "We bridge the gap between academic knowledge and industry requirements by offering education that is both relevant and practical.",
    },
    {
      title: "Cutting-Edge Technologies",
      description:
        "Gain exposure to the latest technologies used in the IT industry, ensuring you stay ahead in your career.",
    },
    {
      title: "Confidence in Career",
      description:
        "Our programs are designed to boost your confidence and prepare you for the competitive world of IT.",
    },
    {
      title: "Skill Development",
      description:
        "Develop the skills necessary to thrive in the IT industry, from technical abilities to professional competencies.",
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

          <div className="serviceHero">
            <div>
              <img
                src={educationImg}
                alt="Education Services"
                className="serviceHeroImg"
              />
            </div>
            <div className="heroInfo">
              <div className="heroTitleArea">
                <h1 className="heroTitle">Education Services</h1>
              </div>

              <p className="heroDescription">
                At KLobTech, we believe in nurturing future talent by providing
                hands-on learning experiences through our internship programs.
                Our comprehensive education initiatives are designed to bridge
                the gap between academic knowledge and industry requirements.
                Interns gain exposure to real-world projects, cutting-edge
                technologies, and mentorship from experienced professionals. We
                aim to empower aspiring IT professionals with practical skills,
                industry insights, and the confidence to excel in their careers.
                Join us to kickstart your journey in the dynamic world of IT and
                innovation.
              </p>
            </div>
          </div>

          <div className="mobileServiceGridContainer">
            <div className="serviceGridTitleContainer">
              <p className="serviceTitle">
                Why Choose KLobTech for Education Services?
              </p>
            </div>
            <div className="gridArea">
              {features.map((feature, index) => (
                <div className="appService" key={index}>
                  <div className="appServiceTitleArea">
                    <p>{feature.title}</p>
                  </div>
                  <div className="appServiceDescriptionArea">
                    <p className="appServiceDescription">
                      {feature.description}
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
                  src={educationImg}
                  alt="Education Mobile"
                  className="mobileHeroImg"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-[#333333]">Education Services</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-600 max-w-3xl mx-auto leading-normal text-justify px-10">
                  At KLobTech, we believe in nurturing future talent by
                  providing hands-on learning experiences through our internship
                  programs. Our comprehensive education initiatives are designed
                  to bridge the gap between academic knowledge and industry
                  requirements. Interns gain exposure to real-world projects,
                  cutting-edge technologies, and mentorship from experienced
                  professionals. We aim to empower aspiring IT professionals
                  with practical skills, industry insights, and the confidence
                  to excel in their careers. Join us to kickstart your journey
                  in the dynamic world of IT and innovation.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-12 px-4 bg-white">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
              Why Choose <span className="text-teal-500">KLobTech</span> for
              Education Services?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[85%] mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-teal-500 mb-4 border-b-4 border-teal-500 inline-block pb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xl md:text-xl text-gray-600 leading-relaxed text-justify">
                    {feature.description}
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

export default Education;
