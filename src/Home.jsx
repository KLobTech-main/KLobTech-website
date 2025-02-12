
import Navigation from "./Navigation";
import Hero from "./Hero";
import Circle from "./Circle";
import MainCircle from "./Orbit";
import Information from "./Information";
import Services from "./Services";
import ServicesTest from "./ServicesTest";
import BlurBox from "./BlurBox";
import CursorFollower from "./CursorFollower";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Footer from "./Components/Footer";
import FAQPage from "./Faq";
import Navbarr from "./Testnav";
import BackToTopButton from "./BackToTopButton";
import { useMediaQuery } from "react-responsive";
import Navbar from "./Nav/Navbar";
import Review from "./Review";
import ReviewCarousel from "./ReviewCarousel";
import Logo from "./Components/logo";
import Mobilefooter from "./Mobilefooter";
import ServicesShowcase from "./ServicesShowcase";
import Navvv from "./NewNav";
import ServiceList from "./Components/MobileServices/ServiceList";
import MobServices from "./MobServices";
import { motion } from "framer-motion";

function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {/* Logo Section */}
      {!isMobile && (
        <div
        >
          <Logo />
        </div>
      )}

      {/* Circle Animations */}
      {!isMobile && (
        <Circle
          top={"15rem"}
          left={"-10rem"}
          color={"#333"}
          scale={1}
        />
      )}

      {!isMobile && (
        <Circle
          top={"30rem"}
          left={"3rem"}
          color={"var(--accent-color)"}
          scale={0.3}
        />
      )}

      {!isMobile && (
        <Circle
          top={"80rem"}
          left={"20rem"}
          color={"#333"}
          scale={1}
        />
      )}

      {isMobile && (
        <Circle
          top={"52rem"}
          left={"20rem"}
          color={"#333"}
          scale={0.6}
        />
      )}

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Circle Animation */}
      {isMobile && (
        <MainCircle
          mainRadius={160}
          childRadius1={20}
          childRadius2={40}
          distance1={240}
          distance2={205}
          speed1={9}
          speed2={10}
          top={"10rem"}
          left={"-15rem"}
          color1={"#333"}
          color2={"var(--accent-color)"}
        />
      )}

      {!isMobile && (
        <MainCircle
          mainRadius={500}
          childRadius1={20}
          childRadius2={80}
          distance1={650}
          distance2={550}
          speed1={9}
          speed2={10}
          top={"20rem"}
          left={"140rem"}
          color1={"#333"}
          color2={"var(--accent-color)"}
        />
      )}

      {/* Information Section */}
      <Information />

      {/* Services Section */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Services />
        </motion.div>
      )}

      {isMobile && <MobServices />}

      {/* Review Carousel */}
      {isMobile && <ReviewCarousel />}

      {/* Testimonials Section */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Testimonials />
        </motion.div>
      )}

      {/* Footer Section */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Footer />
        </motion.div>
      )}

      {/* Back To Top Button */}
      <BackToTopButton />

      {/* Mobile Footer */}
      {isMobile && <Mobilefooter />}
    </>
  );
}

export default Home;