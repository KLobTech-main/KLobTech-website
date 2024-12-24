import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link, Outlet } from "react-router-dom";
Outlet;
import reactImg from "./assets/react.png";
import flutterImg from "./assets/flutter.png";
import androidImg from "./assets/android.png";
import appleImg from "./assets/apple.png";
import mobileIMG from "./assets/mobile.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import "../webIndex.css";
function Mad() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={mobileIMG} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Mobile App Development</h1>
          </div>

          <p className="heroDescription">
            KLobTech is a trailblazer in mobile app development, offering
            innovative and customized solutions to meet the unique needs of our
            clients. Our expert team focuses on blending creativity with
            functionality to deliver apps that stand out in today’s competitive
            market. Client satisfaction is at the heart of everything we do, and
            we are dedicated to transforming ideas into seamless digital
            experiences.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for Mobile App Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Custom Mobile App Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We create tailor-made mobile applications for both iOS and
                Android platforms, designed to meet your unique business needs
                and deliver exceptional user experiences.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Cross-Platform App Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our expertise in cross-platform development ensures your app
                works seamlessly across multiple devices, saving time and costs
                while reaching a wider audience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Mobile UI/UX Design</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We focus on creating intuitive and visually appealing user
                interfaces and experiences that engage users and ensure smooth
                navigation on both iOS and Android apps.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Mobile App Integration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We integrate third-party APIs and services to enhance your
                mobile app’s functionality, providing a seamless and
                feature-rich experience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>App Maintenance & Support</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We provide ongoing support and maintenance for your mobile app,
                ensuring it remains up-to-date with the latest features,
                security updates, and bug fixes.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Mobile App Testing & Quality Assurance</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We perform rigorous testing to ensure your mobile app is
                bug-free and optimized for performance across a variety of
                devices, reliable experience for users.
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
      <div className="mobileImageGridContainer">
        <div className="gridTitleArea">
          <p className="mobileGridTitle">
            We Specialize in the Following Technologies
          </p>
        </div>
        <div className="mobileGridArea">
          <Link to="/mad/react">
            <div className="mobileImageService">
              <div className="mobileImageTitleArea">
                <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                  React Native
                </p>{" "}
              </div>
              <div className="mobileServiceImage">
                <Link to="/mad/react">
                  <img src={reactImg} alt="" />
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/mad/flutter">
            <div className="mobileImageService">
              <div className="mobileImageTitleArea">
                <p style={{ fontSize: "3rem", fontWeight: "500" }}>Flutter</p>{" "}
              </div>
              <div className="mobileServiceImage">
                <Link to="/mad/flutter">
                  <img src={flutterImg} alt="" />
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/mad/android">
            <div className="mobileImageService">
              <div className="mobileImageTitleArea">
                <p style={{ fontSize: "3rem", fontWeight: "500" }}>Android</p>{" "}
              </div>
              <div className="mobileServiceImage">
                <Link to="/mad/android">
                  <img src={androidImg} alt="" />
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/mad/ios">
            <div className="mobileImageService">
              <div className="mobileImageTitleArea">
                <p style={{ fontSize: "3rem", fontWeight: "500" }}>iOS</p>{" "}
              </div>
              <div className="mobileServiceImage">
                <Link to="/mad/ios">
                  <img src={appleImg} alt="" />
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {isMobile && <Mobilefooter></Mobilefooter>}
      {!isMobile && <Footer></Footer>}
    </>
  );
}

export default Mad;
