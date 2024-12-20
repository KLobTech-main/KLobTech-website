import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link, Outlet } from "react-router-dom";
Outlet;
import reactImg from "./Assets/react.png";
import aiImg from "./Assets/ai.png";
import angularImg from "./Assets/angular.png";
import phpImg from "./Assets/php.png";
import pythonImg from "./Assets/python.png";
import nodeImg from "./Assets/node.png";
import webdevImg from "./Assets/webdev.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";

import "../index.css";
function FullStackDevelopment() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={webdevImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Full Stack Development</h1>
          </div>

          <p className="heroDescription">
            At KLobTech, we deliver high-quality web applications tailored to
            your business needs. Specializing in optimized and user-friendly web
            development, we provide secure and cost-effective solutions for
            businesses worldwide. Trust KLobTech as your reliable partner for
            exceptional web and app development services.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for Full Stack Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>eCommerce Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Looking to launch an online store? At KLobTech, we design and
                build eCommerce websites tailored to diverse business domains,
                ensuring they meet market demands and deliver exceptional user
                experiences.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Frontend Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our experts craft visually stunning, intuitive user interfaces,
                ensuring seamless functionality and a captivating user
                experience that sets your platform apart.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Backend Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We leverage the power of RDBMS, Big Data, and cloud platforms
                like Azure and AWS to create robust, scalable web applications
                that meet the highest standards of performance and reliability.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Content Management</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Delivering value is our priority. We customize CMS solutions to
                perfectly align with your business goals, streamlining content
                creation and management with ease.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Custom Web Applications</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Have a unique vision for your web app? Our team specializes in
                bringing your ideas to life with fully customized solutions.
                Hire KLobTech to turn your vision into reality.
              </p>
            </div>
          </div>
          {!isMobile && (
            <div className="appService">
              <div className="appServiceTitleArea">
                <p>Corporate Websites</p>
              </div>
              <div className="appServiceDescriptionArea">
                <p className="appServiceDescription">
                  Elevate your business with a professional corporate website.
                  At KLobTech, we provide comprehensive development services to
                  establish a strong and impactful online presence.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="webImageGridContainer">
        <div className="gridTitleArea">
          <p className="mobileGridTitle">
            We Specialize in the Following Technologies
          </p>
        </div>
        <div className="extraMobileGridArea">
          <div className="mobileImageService">
            <div className="mobileImageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>React JS</p>{" "}
            </div>
            <div className="mobileServiceImage">
              <Link to="/fullStackDevelopment/react">
                <img src={reactImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="mobileImageService">
            <div className="mobileImageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>AI/ML</p>{" "}
            </div>
            <div className="mobileServiceImage">
              <Link to="/fullStackDevelopment/aiml">
                <img src={aiImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="mobileImageService">
            <div className="mobileImageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>Node JS</p>{" "}
            </div>
            <div className="mobileServiceImage">
              <Link to="/fullStackDevelopment/node">
                <img src={nodeImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="mobileImageService">
            <div className="mobileImageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>Angular JS</p>{" "}
            </div>
            <div className="mobileServiceImage">
              <Link to="/fullStackDevelopment/angular">
                <img src={angularImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="mobileImageService">
            <div className="mobileImageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>Python</p>{" "}
            </div>
            <div className="mobileServiceImage">
              <Link to="/fullStackDevelopment/python">
                <img src={pythonImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="mobileImageService">
            <div className="mobileImageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>PHP</p>{" "}
            </div>
            <div className="mobileServiceImage">
              <Link to="/fullStackDevelopment/php">
                <img src={phpImg} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isMobile && <Mobilefooter></Mobilefooter>}
      {!isMobile && <Footer></Footer>}
    </>
  );
}

export default FullStackDevelopment;
