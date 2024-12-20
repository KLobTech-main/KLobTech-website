import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import appleImg from "./assets/apple.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
function Ios() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={appleImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Native Android Development</h1>
          </div>

          <p className="heroDescription">
            Choose KLobTech for top-tier iOS app development services. We
            specialize in building apps for iPhone, iPad, Apple TV, and Apple
            Watch. With our expertise, we deliver high-performance, user-centric
            iOS applications designed to make an impact across various Apple
            devices. Ready to elevate your business with custom Apple app
            development solutions? Let’s make it happen together!
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for iOS Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Custom iOS Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                KLobTech understands that your business is unique, and so are
                your app needs. Our expert iOS developers create personalized
                solutions designed to connect with your audience and achieve
                your specific goals.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Advanced iOS Integration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Integrate the latest technologies into your app. Our developers
                bring in AI, AR/VR, and other modern features to elevate your
                iOS app’s functionality, making it more engaging and
                future-ready.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>iPhone App Support</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our iOS app support services ensure your app remains
                top-performing. KLobTech provides reliable maintenance, updates,
                and continuous optimization to keep your app running smoothly
                across all devices.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>iOS Solutions for Enterprises</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Unlock powerful, custom iOS solutions for your enterprise.
                KLobTech offers apps that integrate machine learning and
                cutting-edge technology to improve data analysis and streamline
                business operations.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>App Upgrade & Extension</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Stay up-to-date with every new iOS update. KLobTech offers
                seamless upgrade and extension services that enhance your app’s
                capabilities and ensure it delivers the latest features.
              </p>
            </div>
          </div>

          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Effortless App Integration</p>
            </div>

            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Maximize your app’s impact by seamlessly integrating it with
                your existing business systems. KLobTech ensures a smooth iOS
                app integration for faster growth, better functionality, and a
                broader reach.
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

export default Ios;
