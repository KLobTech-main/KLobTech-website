import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link, Outlet } from "react-router-dom";
import educationImg from "./assets/education.png";
import ScrollToTop from "../Components/ScrollToTop";
import { useMediaQuery } from "react-responsive";
import Mobilefooter from "../Mobilefooter";

import "./Services.css";
function Education() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={educationImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Education Services</h1>
          </div>

          <p className="heroDescription">
            At KLobTech, we believe in nurturing future talent by providing
            hands-on learning experiences through our internship programs. Our
            comprehensive education initiatives are designed to bridge the gap
            between academic knowledge and industry requirements. Interns gain
            exposure to real-world projects, cutting-edge technologies, and
            mentorship from experienced professionals. We aim to empower
            aspiring IT professionals with practical skills, industry insights,
            and the confidence to excel in their careers. Join us to kickstart
            your journey in the dynamic world of IT and innovation.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for Ecommerce Services?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Product Listing</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Creating engaging, SEO-friendly product listings with compelling
                titles, detailed descriptions, and high-quality images to
                attract the right audience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Keyword Optimization</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Improving visibility with targeted keywords that rank your
                products higher and drive more traffic to your listings.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Listing Health Optimization</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Optimizing listing quality by addressing inventory, pricing, and
                compliance to ensure consistent visibility and performance.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Deep Data Analysis</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Leveraging advanced analytics to uncover actionable insights and
                trends. From customer behavior to sales metrics, we provide
                data-driven strategies to optimize your e-commerce performance.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>FBA Services</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Simplifying fulfillment with support for inventory, shipping,
                and returns, leveraging Amazon’s logistics for faster
                deliveries.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Performance Marketing</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Boosting your sales with targeted ad campaigns and ROI-driven
                marketing strategies. We help you maximize your advertising
                budget by reaching the right audience at the right time.
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

export default Education;
