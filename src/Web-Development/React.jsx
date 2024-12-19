import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import reactImg from "./Assets/react.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
function React() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img style={{ height: "40rem" }} src={reactImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">React JS Development</h1>
          </div>

          <p className="heroDescription">
            Discover exceptional React.js web development services at KLobTech,
            a leading company in the industry. We provide tailored solutions for
            building robust and scalable web applications using React.js. Our
            skilled team of React.js developers delivers high-quality, efficient
            development services, trusted by both startups and enterprises. With
            a focus on performance and innovation, we ensure your project stands
            out in the digital space. Ready to take your web development to the
            next level? Partner with KLobTech for impactful, future-proof
            solutions.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for React JS Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Mobile App Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Develop high-quality, cross-platform mobile apps for iOS and
                Android with our expert React.js development. We utilize React’s
                efficient components to build seamless applications, ensuring
                exceptional user experiences.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Web App Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Create scalable, high-performance, and SEO-friendly web
                applications with our React.js expertise. We design solutions
                tailored to your business requirements, delivering enhanced
                functionality and future growth.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Effortless App Migration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Smoothly transition your business to the React.js framework. Our
                team follows industry best practices to ensure a seamless
                migration, improving performance and maintaining service
                continuity.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Seamless App Integration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Unlock the full potential of React.js through seamless
                integration. We enhance your app's functionality by adding new
                features with minimal coding, improving overall performance and
                user experience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Custom Development Services</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We specialize in highly customized React.js development,
                ensuring seamless integration with third-party services and
                enhancing the capabilities of your existing applications for
                optimal performance.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Ongoing Maintenance Support</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We specialize in creating business-centric web portals,
                including B2B, B2C, and enterprise solutions. Designed to
                streamline operations and drive growth collaboration.
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
