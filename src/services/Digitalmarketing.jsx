import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link, Outlet } from "react-router-dom";
import digitalImg from "./assets/digital.png";
import ScrollToTop from "../Components/ScrollToTop";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import "../index.css";
function Digitalmarketing() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={digitalImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Digital Marketing</h1>
          </div>

          <p className="heroDescription">
            KLobTech offers comprehensive digital marketing services designed to
            elevate your e-commerce business. Our team leverages the latest
            strategies, tools, and platforms to enhance your online presence,
            drive targeted traffic, and maximize conversions. From SEO and
            pay-per-click advertising to social media management and email
            campaigns, we tailor our solutions to meet your unique business
            goals.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for Digital Marketing Services?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>SEO Optimization</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Enhance your online visibility and drive organic traffic with
                our SEO services. We implement effective on-page and off-page
                strategies to ensure your business ranks higher on search engine
                results.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>PPC Advertising</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Boost your reach and ROI with targeted pay-per-click campaigns.
                Our PPC experts create customized ads across platforms like
                Google Ads and social media to drive qualified leads to your
                business.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Social Media Marketing</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Engage and grow your audience through strategic social media
                marketing. We manage and optimize your presence on platforms
                like Facebook, Instagram, LinkedIn, and Twitter to increase
                brand awareness and customer loyalty.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Content Marketing</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Elevate your brand with valuable, engaging content. From blog
                posts to videos, we create content that speaks to your audience,
                enhances brand authority, and drives conversions.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Email Marketing</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Build strong relationships with your customers using targeted
                email marketing campaigns. Our services include personalized
                email content, automation, and performance tracking to increase
                engagement and sales.
              </p>
            </div>
          </div>
          {!isMobile && (
            <div className="appService">
              <div className="appServiceTitleArea">
                <p>Conversion Rate Optimization</p>
              </div>
              <div className="appServiceDescriptionArea">
                <p className="appServiceDescription">
                  Maximize your website's effectiveness with conversion rate
                  optimization. We analyze user behavior, test strategies, and
                  make data-driven improvements.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {isMobile && <Mobilefooter></Mobilefooter>}
      {!isMobile && <Footer></Footer>}
    </>
  );
}

export default Digitalmarketing;
