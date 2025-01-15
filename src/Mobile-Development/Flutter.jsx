import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import flutterImg from "./assets/flutter.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function Flutter() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {!isMobile && <Logo></Logo>}
      <BackToTopButton></BackToTopButton>
      {!isMobile && <Logo></Logo>}
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={flutterImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Flutter Development</h1>
          </div>

          <p className="heroDescription">
            At KLobTech, we are proud to be a trusted name in Flutter app
            development. Our skilled in-house Flutter development team
            specializes in turning your ideas into powerful, feature-rich
            applications. Whether you need custom app solutions or seamless
            cross-platform development, we deliver top-quality results at
            competitive prices. Searching for a reliable partner to bring your
            vision to life? Look no further! With KLobTech, your journey to
            exceptional app development begins today. Let’s build something
            extraordinary together!
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for Flutter Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Ideation and Strategy</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Leverage Flutter’s potential with expert guidance from our team.
                We delve into your business goals, analyze market trends, and
                craft a strategic Flutter development plan to ensure your app’s
                success.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Tailored App Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We design customized Flutter applications to meet your unique
                business needs. From streamlining operations to improving user
                engagement, our bespoke solutions are crafted to drive growth
                and mobility.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Cross-Platform Excellence</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Save time and resources with our Flutter cross-platform app
                development services. Delivering top-quality apps for Android
                and iOS, we ensure visually appealing designs and faster time to
                market.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Modern UX/UI Design</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                With Flutter, we create sleek and intuitive designs that
                captivate users. Our focus on modern UX/UI enhances user
                experiences, fosters engagement, and strengthens customer
                retention.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Seamless App Migration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Switch to Flutter effortlessly with our expert migration and
                upgrade services. We enhance your app’s performance and provide
                advanced features for improved control and scalability.
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

export default Flutter;
