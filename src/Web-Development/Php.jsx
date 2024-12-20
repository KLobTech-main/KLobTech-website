import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import phpImg from "./Assets/php.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
function Php() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={phpImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">PHP Development</h1>
          </div>

          <p className="heroDescription">
            Welcome to KLobTech, your trusted partner for exceptional PHP
            development services! Our team excels in creating smart,
            feature-rich PHP solutions tailored to meet the needs of businesses
            worldwide. With a focus on scalability and speed, we build
            high-performance PHP applications that drive success. Count on our
            expert PHP developers to deliver fully customizable solutions using
            the latest technologies.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for PHP Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Custom PHP Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Create dynamic PHP web applications tailored to your business
                needs. Our experts use frameworks like CakePHP, CodeIgniter,
                Yii, Zend, Symfony, and Laravel to deliver high-quality,
                enterprise-grade solutions.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>E-commerce Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Build scalable and feature-rich e-commerce platforms with PHP.
                We offer customized solutions that enhance user experience and
                align perfectly with your business objectives.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>CMS Development Services</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Specializing in WordPress, Joomla, Magento, and Drupal, we
                deliver highly customized CMS websites for seamless content
                management. Our team ensures the final product aligns with your
                business goals and provides ease of use.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Social Networking Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Develop engaging social networking apps with modern PHP
                technologies. We create collaborative platforms that keep users
                connected while implementing the latest trends for optimal
                performance.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>API Integration Services</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Seamlessly integrate third-party APIs into your PHP systems. Our
                team ensures smooth API connections, enhancing the functionality
                and scalability of your web solutions.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Custom Web Portals</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We specialize in creating business-centric web portals,
                including B2B, B2C, and enterprise solutions. Designed to
                streamline operations and drive growth, our portals offer
                tailored solutions for improved customer engagement and
                collaboration.
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

export default Php;
