import React from "react";
import Navbar from "./Nav/Navbar";
import { useMediaQuery } from "react-responsive";
import Mobilefooter from "./Mobilefooter";
import Footer from "./Components/Footer";

const MobileAppDevelopment = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 font-sans">
        {/* Hero Section */}
        <section className="py-12 px-4 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-32 h-32">
              {/* Replace with your image */}
              <img src="path-to-your-image.svg" alt="Mobile App Icon" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                <span className="text-purple-600">Mobile App Development</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-loose">
                KLobTech is a trailblazer in mobile app development, offering
                innovative and customized solutions to meet the unique needs of
                our clients. Our expert team focuses on blending creativity with
                functionality to deliver apps that stand out in today’s
                competitive market. Client satisfaction is at the heart of
                everything we do, and we are dedicated to transforming ideas
                into seamless digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-4 bg-white">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Why Choose <span className="text-purple-600">KLobTech</span> for
            Mobile App Development?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[85%] mx-auto">
            {/* Feature Card */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center border-t-4 border-purple-600">
              <h3 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
                Custom Mobile App Development
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-loose">
                We create tailor-made mobile applications for both iOS and
                Android platforms, designed to meet your unique business needs
                and deliver exceptional user experiences.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center border-t-4 border-purple-600">
              <h3 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
                Cross-Platform App Development
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-loose">
                Our expertise in cross-platform development ensures your app
                works seamlessly across multiple devices, saving time and costs
                while reaching a wider audience.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center border-t-4 border-purple-600">
              <h3 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
                Mobile UI/UX Design
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-loose">
                We focus on creating intuitive and visually appealing user
                interfaces and experiences that engage users and ensure smooth
                navigation on both iOS and Android apps.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center border-t-4 border-purple-600">
              <h3 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
                Mobile App Integration
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-loose">
                We integrate third-party APIs and services to enhance your
                mobile app’s functionality, providing a seamless and
                feature-rich experience.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center border-t-4 border-purple-600">
              <h3 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
                App Maintenance & Support
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-loose">
                We provide ongoing support and maintenance for your mobile app,
                ensuring it remains up-to-date with the latest features,
                security updates, and bug fixes.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center border-t-4 border-purple-600">
              <h3 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
                Mobile App Testing & Quality Assurance
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-loose">
                We perform rigorous testing to ensure your mobile app is
                bug-free and optimized for performance across a variety of
                devices, ensuring a reliable experience for users.
              </p>
            </div>
          </div>
        </section>
      </div>
      {isMobile && <Mobilefooter />}
      {!isMobile && <Footer />}
    </>
  );
};

export default MobileAppDevelopment;
