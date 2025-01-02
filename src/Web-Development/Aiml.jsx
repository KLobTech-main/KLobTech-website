import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import aimlImg from "./Assets/ai.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";
import BackToTopButton from "../BackToTopButton";

function Aiml() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <BackToTopButton></BackToTopButton>
      {!isMobile && <Logo></Logo>}
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={aimlImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">AI/ML Development</h1>
          </div>

          <p className="heroDescription">
            At KLobTech, we harness the power of Artificial Intelligence and
            Machine Learning (AI/ML) to deliver transformative solutions that
            drive business innovation. Our expert team specializes in building
            intelligent systems that learn from data, automate processes, and
            provide actionable insights. From predictive analytics and natural
            language processing (NLP) to image recognition and fraud detection,
            we develop AI-driven applications that enhance user experience.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for AI/ML Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Predictive Data Analytics</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Leverage data to predict trends and make informed decisions. Our
                algorithms optimize processes, forecast sales, and manage risks,
                keeping you ahead in a competitive landscape.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>NLP Services</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Revolutionize user interaction with NLP. We enable chatbots and
                sentiment analysis, allowing machines to understand and respond
                to human language for smarter engagement.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Visual Data Recognition</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Enhance applications with AI-driven image and video recognition.
                Our solutions automate visual data processing, transforming
                industries like security, healthcare, and retail.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Conversational AI Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Improve customer interactions with AI-powered chatbots and
                virtual assistants. Automate tasks, offer personalized support,
                and provide 24/7 service to enhance engagement and efficiency.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Machine Learning Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Unlock the power of your data with tailored machine learning
                solutions. From deep learning to clustering, we design
                intelligent systems that drive decision-making and automate
                processes.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Fraud Detection Systems</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Strengthen security with AI-powered fraud detection. We use
                advanced algorithms to detect anomalies and safeguard sensitive
                data, ensuring your business stays protected.
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

export default Aiml;
