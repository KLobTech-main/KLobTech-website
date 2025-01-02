import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link, Outlet } from "react-router-dom";
import herocmsImg from "./assets/cms.png";
import shopifyImg from "./assets/shopify.png";
import wordpressImg from "./assets/wordpress.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import ScrollToTop from "../Components/ScrollToTop";
import Logo from "../Components/logo";

import "../index.css";
function Cms() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {!isMobile && <Logo></Logo>}
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img style={{ height: "40rem" }} src={herocmsImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">CMS Services</h1>
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
          <p className="serviceTitle">Why Choose KLobTech for CMS Services?</p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Strategic App Planning</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Lay a strong foundation for your app development with our expert
                consultation services. Using data-driven insights, we align your
                vision with a clear and actionable development strategy.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Personalized App Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Empower your business with custom-built React Native apps. Our
                team delivers unique solutions crafted to enhance productivity
                and drive efficiency, meeting your specific business objectives.
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
                strategy and design to deployment and ongoing support, we
                deliver end-to-end solutions to ensure your app’s success.
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
                development. Perfect for startups and innovators, our approach
                helps you test market potential and engage users rapidly.
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
                Android and iOS. Our React Native experts create seamless,
                interactive experiences to captivate users across platforms.
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
                and upgrade services. Transition to React Native effortlessly,
                improve app performance, and stay ahead with the latest
                features.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileImageGridContainer">
        <div className="gridTitleArea">
          <p className="mobileGridTitle">
            We Specialize in the Following Technologies
          </p>
        </div>
        <div className="mobileGridArea">
          <Link to="/cms/shopify">
            <div className="mobileImageService">
              <div className="mobileImageTitleArea">
                <p style={{ fontSize: "3rem", fontWeight: "500" }}>Shopify</p>{" "}
              </div>
              <div className="mobileServiceImage">
                <Link to="/cms/shopify">
                  <img src={shopifyImg} alt="" />
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/cms/wordpress">
            <div className="mobileImageService">
              <div className="mobileImageTitleArea">
                <p style={{ fontSize: "3rem", fontWeight: "500" }}>Wordpress</p>{" "}
              </div>
              <div className="mobileServiceImage">
                <Link to="/cms/wordpress">
                  <img src={wordpressImg} alt="" />
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {isMobile && <Mobilefooter></Mobilefooter>}
      {!isMobile && <Footer></Footer>}
    </>
  );
}

export default Cms;
