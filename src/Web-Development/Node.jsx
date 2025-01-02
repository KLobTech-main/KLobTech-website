import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import nodeImg from "./Assets/node.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function Node() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <BackToTopButton></BackToTopButton>
      {!isMobile && <Logo></Logo>}
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={nodeImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Node JS Development</h1>
          </div>

          <p className="heroDescription">
            Upgrade your digital solutions with KLobTech, a leading Node.js
            development company. Our expert Node.js developers work closely with
            you to understand your business needs, delivering robust, scalable,
            and modern web and mobile applications. By partnering with our
            skilled team, you gain enhanced scalability, improved productivity,
            and long-term value for your web and app solutions. Choose KLobTech
            for tailored, high-quality development services that drive business
            success.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for Node JS Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Custom Node.js App Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Unlock the full potential of custom Node.js app development with
                KLobTech. Our skilled Node.js developers specialize in creating
                bespoke web and mobile applications that address your unique
                business requirements.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Node.js Web Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Enhance your online presence with our premium Node.js web
                development services. We integrate modern features and robust
                security standards, ensuring your digital footprint is secure
                and high-performing.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Real-Time Apps Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Create dynamic, real-time web applications with our Node.js
                expertise. Whether it's single-page applications (SPAs),
                collaboration tools, or chat apps, we deliver solutions tailored
                to your business needs.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>API Development and Integration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our experienced Node.js developers craft powerful, feature-rich
                APIs and provide seamless integration with other systems. We
                ensure your APIs are reliable and fit perfectly with your
                business processes.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Node.js Migration Services</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Planning to migrate your application or website to Node.js? We
                provide smooth and efficient migration services, ensuring a
                hassle-free transition with minimal disruption to your
                operations.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Node.js Plugin Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We develop custom, feature-rich Node.js plugins that integrate
                seamlessly with your web or mobile application, enhancing its
                functionality and performance for your business success.
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

export default Node;
