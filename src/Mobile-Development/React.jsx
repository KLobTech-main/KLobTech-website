import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import reactImg from "./assets/react.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function React() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <BackToTopButton></BackToTopButton>
      {!isMobile && <Logo></Logo>}
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={reactImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">React Native Development</h1>
          </div>

          <p className="heroDescription">
            Empower your business with expertly crafted React Native apps
            tailored to your unique needs. Our team specializes in creating
            cross-platform mobile solutions for diverse industries, delivering
            user-friendly interfaces and dynamic experiences. Elevate your
            digital journey with next-gen mobile apps designed to enhance
            engagement and performance.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for React Native Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Strategic App Planning</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Lay a strong foundation for your app development with our expert
                consultation services. We align your vision with an actionable
                development strategy.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Personalized App Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Empower your business with React Native apps. Our team delivers
                unique solutions crafted to enhance productivity and meeting
                your specific business objectives.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>End-to-End Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Experience the full spectrum of React Native development. From
                strategy and design to deployment, we deliver end-to-end
                solutions to ensure your app’s success.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Accelerated MVP Delivery</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Bring your ideas to life with our streamlined React Native MVP
                development. Perfect for startups, our approach helps you test
                market potential and engage users rapidly.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Cross-Platform Expertise</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Expand your digital footprint with powerful apps for both
                Android and iOS. Our React Native experts create interactive
                experiences to captivate users across platforms.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Seamless App Migration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Modernize your mobile solutions with our hassle-free migration
                and upgrade services. Transition to React Native effortlessly
                and stay ahead with the latest features.
              </p>
            </div>
          </div>
        </div>
      </div>

      {isMobile && <Mobilefooter></Mobilefooter>}
      {!isMobile && <Footer></Footer>}
    </>
  );
}

export default React;
