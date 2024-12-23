import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link, Outlet } from "react-router-dom";
import recruitmentImg from "./assets/recruitment.png";
import ScrollToTop from "../Components/ScrollToTop";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import "./Services.css";
function Rs() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={recruitmentImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Recruitment Services</h1>
          </div>

          <p className="heroDescription">
            At KLobTech, we offer comprehensive recruitment services to help
            businesses find the right talent for their needs. Our experienced
            team specializes in sourcing, screening, and placing skilled
            professionals across various industries. Whether you're looking for
            temporary, permanent, or contract staffing solutions, we tailor our
            approach to ensure a perfect match between candidates and your
            business culture. With a focus on quality and efficiency, we help
            you build strong, capable teams that drive success and growth.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for Recruitment Services?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Permanent Talent Acquisition</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our approach identifies candidates who align with your needs and
                long-term vision, helping you secure talent that drives growth
                and success.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Project Staffing</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We focus on finding the right fit for both short-term and
                long-term projects, ensuring compatibility and the ideal match
                for your team.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Consultant Advisory</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We specialize in matching our clients with experienced and
                dedicated long-term consultants who seamlessly integrate into
                your organization. Our rigorous selection process ensures that
                you receive not just a consultant, but a true partner committed
                to your project's success.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Temporary Staffing Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We provide skilled professionals for short-term needs, ensuring
                immediate productivity and seamless transitions to keep your
                projects on track.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Executive Search</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                For leadership roles and critical positions, our executive
                search services focus on finding top-tier talent with the
                expertise and vision to drive your company forward. We use a
                targeted approach to connect you with senior-level candidates
                who can make a lasting impact on your business.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Talent Pool Management</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We build and maintain a talent pool aligned with your business
                needs, giving you quick access to top candidates when the time
                comes.
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

export default Rs;
