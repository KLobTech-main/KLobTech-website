import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link, Outlet } from "react-router-dom";
import btbImg from "./assets/b2b.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";

import "./Services.css";
function Btbs() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {!isMobile && <Logo></Logo>}
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={btbImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">B2B Services</h1>
          </div>

          <p className="heroDescription">
            At KLobTech, we specialize in providing comprehensive B2B services
            that empower businesses to optimize their operations and achieve
            sustainable growth. From market research and lead generation to data
            management and customized IT solutions, we deliver high-quality,
            actionable insights and strategies tailored to your business needs.
            Our expertise in full-stack development, mobile app solutions, and
            advanced analytics ensures that we can help you enhance efficiency,
            streamline processes, and unlock new opportunities for success.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">Why Choose KLobTech for B2B Servies?</p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Company Technography</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                KLobTech utilizes advanced technologies in full-stack
                development, mobile apps, cloud computing, and data management
                to deliver scalable IT solutions.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Company Firmography</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We provide customized IT solutions for startups to enterprises
                across industries like tech, e-commerce, and finance, focusing
                on web and mobile app development.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>End-to-End Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our research services provide actionable insights into market
                trends and customer behavior, helping businesses optimize
                strategies and make informed decisions.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Accelerated MVP Delivery</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We developed a custom mobile app for a retail client, improving
                user engagement by 30% through seamless integration with
                inventory and payments.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Cross-Platform Expertise</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                KLobTech creates data-driven marketing strategies focused on
                ROI, using performance marketing, content, and SEO to boost
                brand visibility and drive conversions.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Seamless App Migration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We help B2B advertisers reach decision-makers with targeted
                campaigns, maximizing ad spend and delivering measurable
                business results.
              </p>
            </div>
          </div>

          {/* <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Skilled Development Team
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Our team comprises skilled professionals with extensive
                experience in mobile app development. From strategy to
                execution, we use the latest technologies and best practices to
                deliver cutting-edge applications.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Customer-Centric Approach
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Your satisfaction is our priority. We work closely with you at
                every step, incorporating your feedback to create apps that not
                only meet but exceed expectations.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Scalable and Robust Solutions
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                We specialize in building mobile apps that grow with your
                business. Whether it’s for startups or large enterprises, our
                scalable solutions ensure seamless performance as your user base
                expands.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                On-Time, Budget Delivery
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                With a strong track record of timely and cost-efficient project
                deliveries, KLobTech ensures you get the best value for your
                investment without compromising on quality.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                End-to-End Support
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                From conceptualization to launch and beyond, we provide
                comprehensive support. Whether it’s updates, maintenance, or new
                features, we ensure your app stays ahead in the competitive
                landscape.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {isMobile && <Mobilefooter></Mobilefooter>}
      {!isMobile && <Footer></Footer>}
    </>
  );
}

export default Btbs;
