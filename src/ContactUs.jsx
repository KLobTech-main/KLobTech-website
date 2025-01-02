import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import Navbar from "./Nav/Navbar";
import Footer from "./Components/Footer";
import { address } from "framer-motion/client";
import FAQContact from "./Components/FAQContactQuestion";
import ScrollToTop from "./Components/ScrollToTop";
import BackToTopButton from "./BackToTopButton";

function ContactUs() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      content: "info@klobtech.com",
      subtext: "We'll respond within 24 hours",
      address:
        "mailto:info@klobtech.com?subject=Inquiry&body=Hello, I would like to know more about your work...",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      content: "+919024790200",
      subtext: "Monday to Friday, 9AM-6PM",
      address: "tel:+919024790200",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Our HQ",
      content:
        "H-248c, Riico Ind. Area, Road No. 2. Mansarovar, Jaipur, Rajasthan, India",
      subtext: "Get directions on Google Maps",
      address: "https://maps.app.goo.gl/hm96Fzcc7Cm3ByBZ8",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Our Office",
      content:
        "5th Floor, Jaipur Electronic Market, Near Riddhi Siddhi Circle, Gopalpura Bypass Road,\nJaipur, Rajasthan, India 302018",
      subtext: "Get directions on Google Maps",
      address: "https://maps.app.goo.gl/sxv4K81vq5x3jCBr9",
    },
  ];
  return (
    <>
      <BackToTopButton></BackToTopButton>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-20 lg:p-48">
        <main className="max-w-[120rem] mx-auto">
          <div className="flex flex-col items-center justify-center text-center mb-28">
            <h1 className="text-7xl lg:text-9xl font-bold text-gray-900 mb-10">
              Get in <span className="text-[#25ccb6]">Touch</span>
            </h1>
            <p className="text-4xl text-gray-600 max-w-5xl">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {contactMethods.map((method, index) => (
              <a href={method.address} target="_blank">
                <div
                  key={index}
                  className="group p-14 rounded-3xl bg-white/80 backdrop-blur-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-blue-50 rounded-2xl p-7 w-fit mb-12 text-[#25ccb6] group-hover:bg-blue-100 transition-colors duration-300">
                    {method.icon}
                  </div>
                  <h2 className="text-4xl font-semibold text-gray-900 mb-5">
                    {method.title}
                  </h2>
                  <a href={method.address} target="_blank">
                    <p className="text-3xl text-gray-800 font-medium mb-5 whitespace-pre-line hover:text-[#25ccb6]">
                      {method.content}
                    </p>
                  </a>
                  <p className="text-xl text-gray-500">{method.subtext}</p>
                </div>
              </a>
            ))}
          </div>
        </main>
      </div>

      {/* <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-16 lg:p-40">
        <main className="max-w-[100rem] mx-auto">
          <div className="flex flex-col items-center justify-center text-center mb-24">
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-8">
              Get in <span className="text-[#25ccb6]">Touch</span>
            </h1>
            <p className="text-3xl text-gray-600 max-w-4xl">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group p-12 rounded-3xl bg-white/80 backdrop-blur-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-50 rounded-2xl p-6 w-fit mb-10 text-[#25ccb6] group-hover:bg-blue-100 transition-colors duration-300">
                  {method.icon}
                </div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  {method.title}
                </h2>
                <a href={method.address} target="_blank">
                  <p className="text-2xl text-gray-800 font-medium mb-4 whitespace-pre-line hover:text-[#25ccb6]">
                    {method.content}
                  </p>
                </a>

                <p className="text-lg text-gray-500">{method.subtext}</p>
              </div>
            ))}
          </div>
        </main>
      </div> */}
      <FAQContact></FAQContact>
    </>
  );
}

export default ContactUs;
