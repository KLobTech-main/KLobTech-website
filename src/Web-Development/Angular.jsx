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
  return (
    <>
      <BackToTopButton></BackToTopButton>
      <BackToTopButton></BackToTopButton>
      {!isMobile && <Logo></Logo>}
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={angularImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Angular Development</h1>
          </div>

          <p className="heroDescription">
            Experience exceptional web development with KLobTech, your trusted
            AngularJS experts. We specialize in delivering custom,
            user-friendly, and scalable AngularJS solutions tailored to your
            business needs. As a leading Angular web development company, we
            provide lightweight, high-performance AngularJS enterprise solutions
            designed to optimize your operations. Our certified Angular
            developers have a proven track record of transforming businesses,
            offering reliable and innovative solutions.
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
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>AngularJS Mobile App Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Develop powerful mobile apps using AngularJS, integrated with
                frameworks like NativeScript, React Native, and Ionic for
                seamless, high-performance solutions across platforms.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>AngularJS Web App Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Build custom AngularJS web applications optimized for speed,
                functionality, and visual appeal, ensuring a smooth, engaging
                experience across devices. Our solutions are tailored to meet
                your business needs while providing seamless performance and
                scalability.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>AngularJS Hybrid App Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Create secure, high-performing hybrid apps that seamlessly work
                across multiple devices, delivering a consistent and great user
                experience. Our team leverages the latest frameworks to ensure
                smooth functionality and fast performance.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Custom AngularJS Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our AngularJS development team provides tailored solutions that
                align with your specific business needs, offering scalable and
                flexible applications for optimal growth.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>AngularJS to Angular Migration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Easily upgrade your AngularJS application to the latest Angular
                versions with our smooth migration services, ensuring no
                disruptions to performance or functionality.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>AngularJS API Integration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Enhance your AngularJS apps with seamless API integrations,
                connecting your application to third-party services to improve
                functionality and provide additional features.
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

export default Angular;
