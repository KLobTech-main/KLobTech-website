import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import pythonImg from "./Assets/python.png";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Scrolltotop from "../Components/ScrollToTop";
import Logo from "../Components/logo";

function Python() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {!isMobile && <Logo></Logo>}
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img src={pythonImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Python Development</h1>
          </div>

          <p className="heroDescription">
            KLobTech is your trusted partner for Python web development. Our
            expert team creates tailored Python solutions, delivering powerful
            web applications that align with your business needs. Specializing
            in Django web development, we provide top-quality services that
            enhance scalability and efficiency. Whether you're a startup or an
            enterprise, our experienced Python developers are dedicated to
            ensuring your success. If you're considering outsourcing Django
            development, you're in the right place.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for Python Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Custom Python Solutions</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                KLobTech specializes in crafting tailored Python applications
                using core language features and open-source models. Our
                dynamic, flexible solutions are designed to meet the diverse
                needs of both web and mobile development.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Python Web Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Explore our range of Python web development services, where we
                create customized websites, cloud applications, and
                data-intensive solutions. We specialize in building highly
                functional content management systems and more.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Tailored Python Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Leveraging Python's extensive community library, we deliver
                custom application development solutions that align with your
                unique business needs and goals.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>CMS Development Services</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We create user-friendly and highly functional content management
                systems using advanced Python frameworks like Django, Flask, and
                Wagtail.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Python Hybrid Programming</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our team integrates Python with other languages like Java,
                C/C++, and C# for advanced customizations, enhancing
                functionality and enabling seamless hybrid programming.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Upgrades & Migration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our expert team ensures smooth migration to Python, utilizing
                frameworks like Django, and helps with upgrading Python
                applications from version 2 to version 3, ensuring scalability
                and performance.
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

export default Python;
