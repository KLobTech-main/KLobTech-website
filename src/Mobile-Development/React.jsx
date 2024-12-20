import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import reactImg from "./assets/react.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
function React() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={reactImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">React Native Development</h1>
          </div>

          <p className="heroDescription">
            Empower your business with expertly crafted React Native apps
            tailored to your unique needs. Our team specializes in creating
            cross-platform mobile solutions for diverse industries, delivering
            user-friendly interfaces and dynamic experiences. Elevate your
            digital journey with next-gen mobile apps designed to enhance
            engagement and performance.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for React Native Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Strategic App Planning</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Lay a strong foundation for your app development with our expert
                consultation services. Using data-driven insights, we align your
                vision with a clear and actionable development strategy.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Personalized App Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Empower your business with custom-built React Native apps. Our
                team delivers unique solutions crafted to enhance productivity
                and drive efficiency, meeting your specific business objectives.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>End-to-End Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Experience the full spectrum of React Native development. From
                strategy and design to deployment and ongoing support, we
                deliver end-to-end solutions to ensure your app’s success.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Accelerated MVP Delivery</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Bring your ideas to life with our streamlined React Native MVP
                development. Perfect for startups and innovators, our approach
                helps you test market potential and engage users rapidly.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Cross-Platform Expertise</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Expand your digital footprint with powerful apps for both
                Android and iOS. Our React Native experts create seamless,
                interactive experiences to captivate users across platforms.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Seamless App Migration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Modernize your mobile solutions with our hassle-free migration
                and upgrade services. Transition to React Native effortlessly,
                improve app performance, and stay ahead with the latest
                features.
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

export default React;
