import { motion } from "framer-motion";
import "./Services.css";
import { Link } from "react-router-dom";
import cmsImg from "./CMSService/assets/cms.png";
import webdevImg from "./Web-Development/Assets/webdev.png";
import mobileImg from "./Mobile-Development/assets/mobile.png";
import btbsImg from "./services/assets/b2b.png";
import recruitImg from "./services/assets/recruitment.png";
import ecommerceImg from "./services/assets/ecommerce.png";
import educationImg from "./services/assets/education.png";

function Services() {
  return (
    <>
      <div id="service" className="serviceContainer">
        <div className="titleContainer">
          <span className="mainTitle">
            Our <span style={{ color: "var(--accent-color)" }}>Services</span>{" "}
            Include
          </span>
          <span className="secondaryTitle">But are not limited to</span>
        </div>
        <div className="serviceArea">
          <Link to="/mad">
            <div className="service service1">
              <div style={{ opacity: "0" }} className="iconArea">
                <img src="coding.png" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">
                  Mobile App Development
                </p>
                <div className="iconArea">
                  <img src={mobileImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/mad"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/fullStackDevelopment">
            <div className="service service2">
              <div style={{ opacity: "0" }} className="iconArea">
                <img src="web.png" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">
                  Full Stack Development
                </p>
                <div className="iconArea">
                  <img src={webdevImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/fullStackDevelopment"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/digitalmarketing">
            <div className="service service3">
              <div style={{ opacity: "0" }} className="iconArea">
                <img src="coding.png" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle unevenCardTitles">
                  Digital Marketing
                </p>
                <div className="iconArea">
                  <img src="digital.png" alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/digitalmarketing"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/cms">
            <div className="service service4">
              <div style={{ opacity: "0" }} className="iconArea">
                <img src="coding.png" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">CMS Services</p>
                <div className="iconArea">
                  <img src={cmsImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/cms"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/btbs">
            <div className="service service5">
              <div style={{ opacity: "0" }} className="iconArea">
                <img src="coding.png" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">B2B Services</p>
                <div className="iconArea">
                  <img src={btbsImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/btbs"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/recruitment">
            <div className="service service6">
              <div style={{ opacity: "0" }} className="iconArea">
                <img src="coding.png" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">
                  Recruitment Services
                </p>
                <div className="iconArea">
                  <img src={recruitImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/recruitment"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/ecommerce">
            <div className="service service7">
              <div style={{ opacity: "0" }} className="iconArea">
                <img src="coding.png" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">Ecommerce</p>
                <div className="iconArea">
                  <img src={ecommerceImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/ecommerce"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/education">
            <div className="service service8">
              <div style={{ opacity: "0" }} className="iconArea">
                <img src="coding.png" alt="" />
              </div>
              <div className="nameArea">
                <p className="serviceCardTitle cardTitle">Education</p>
                <div className="iconArea">
                  <img src={educationImg} alt="" />
                </div>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "2rem",
                    border: "none",
                  }}
                  to="/education"
                  className="learnService"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Link>

          {/* <div className="service service2">
            <div className="iconArea">
              <img src="web.png" alt="" />
            </div>
            <div className="nameArea">
              <p className="cardTitle">Full Stack Development</p>
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "var(--accent-color)",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "2rem",
                  border: "none",
                }}
                href="./services/Fsd"
                className="learnService"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="service service3">
            <div className="iconArea">
              <img src="aiml.png" alt="" />
            </div>
            <div className="nameArea">
              <p className="cardTitle">AI/ML Development</p>
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "var(--accent-color)",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "2rem",
                  border: "none",
                }}
                href="./services/Amd"
                className="learnService"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="service service4">
            <div className="iconArea">
              <img src="b2b.png" alt="" />
            </div>
            <div className="nameArea">
              <p className="cardTitle">B2B Services</p>
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "var(--accent-color)",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "2rem",
                  border: "none",
                }}
                href="./services/Btbs"
                className="learnService"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="service service5">
            <div className="iconArea">
              <img src="recruit.png" alt="" />
            </div>
            <div className="nameArea">
              <p className="cardTitle title5">Recruitment Services</p>
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "var(--accent-color)",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "2rem",
                  border: "none",
                }}
                href="./services/Lgsa"
                className="learnService"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="service service6">
            <div className="iconArea">
              <img src="online.png" alt="" />
            </div>
            <div className="nameArea">
              <p className="cardTitle">Ecommerce</p>
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "var(--accent-color)",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "2rem",
                  border: "none",
                }}
                href="./services/Mce"
                className="learnService"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="service service7">
            <div className="iconArea">
              <img src="edu.png" alt="" />
            </div>
            <div className="nameArea">
              <p className="cardTitle">
                <p>Education</p>
              </p>
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "var(--accent-color)",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "2rem",
                  border: "none",
                }}
                href="./services/Rs"
                className="learnService"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="service service8">
            <div className="iconArea">
              <img src="web.png" alt="" />
            </div>
            <div className="nameArea">
              <p className="cardTitle">Service 8</p>
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "var(--accent-color)",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "2rem",
                  border: "none",
                }}
                href="./services/Ps"
                className="learnService"
              >
                Learn More
              </a>
            </div>
          </div> */}
        </div>
        <div className="contactHeading">
          Have something else in your mind? Reach out to us.
          <a
            href="mailto:info@klobtech.com?subject=Inquiry&body=Hello, I would like to know more about..."
            className="contactButton"
          >
            Click Me
          </a>
        </div>
      </div>
    </>
  );
}

export default Services;
