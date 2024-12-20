import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import nativeImg from "./assets/android.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";

function Native() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={nativeImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Native Android Development</h1>
          </div>

          <p className="heroDescription">
            Unlock the potential of your business with KLobTech’s premier
            Android app development services. We deliver tailored,
            high-performance solutions that align with your goals. Whether
            you're a startup aiming to make an impact or an established
            enterprise seeking growth, our expert team is here to transform your
            vision into reality. Join our valued clients who trust us to elevate
            their brand. Ready to create an innovative Android app that drives
            success? Your journey starts with KLobTech!
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for Native Android Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>App Strategy Consultation</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Kickstart your app journey with expert guidance. We develop a
                clear, actionable plan that aligns with your business objectives
                and market opportunities, ensuring your success from day one.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Custom App Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Transform your ideas into reality with bespoke Android app
                development. Our solutions are designed to provide seamless
                performance, innovative features, and a superior user
                experience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Engaging UI/UX Design</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Create stunning, intuitive designs that captivate users. We
                focus on user-centric interfaces that offer both style and
                functionality, ensuring your app stands out in a competitive
                market.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>App Enhancement Services</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Boost your app’s performance with our upgrade and extension
                services. We add new features and improve functionality to
                ensure your app evolves with market trends and user needs.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Seamless App Integration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Automate processes and improve efficiency by integrating
                AI-powered features into your Android app. Our seamless
                integrations enhance functionality and streamline operations
                effortlessly.
              </p>
            </div>
          </div>

          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Reliable Support Services</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                At KLobTech, we go beyond development by offering dedicated
                maintenance and support. Keep your Flutter app running smoothly
                with regular updates, feature enhancements, and expert
                assistance.
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
export default Native;
