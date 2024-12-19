import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import wordpressImg from "./assets/wordpress.png";
import ScrollToTop from "../Components/ScrollToTop";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
function Wordpress() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img style={{ height: "40rem" }} src={wordpressImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Wordpress Services</h1>
          </div>

          <p className="heroDescription">
            At KLobTech, we specialize in building custom WordPress websites,
            plugins, and themes tailored to meet your business's specific needs.
            With our extensive expertise, we create functional and impactful
            websites for a wide range of industries. Let us help you unlock your
            online potential with our bespoke WordPress development services.
            Contact us today to start your journey toward success!
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for Wordpress Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>WordPress Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                At KLobTech, we create custom WordPress solutions tailored to
                your unique business needs, helping you connect with your
                audience and achieve success.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Theme Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our developers specialize in designing and customizing WordPress
                themes that reflect your brand’s identity, providing a polished,
                user-friendly experience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Custom Plugin Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                KLobTech offers customized WordPress plugin development to
                enhance your website’s functionality, improve operations, and
                engage users more effectively.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>WooCommerce Development</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our WooCommerce development services focus on creating custom
                solutions that optimize your store’s features and improve
                customer engagement for better e-commerce performance.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Website Maintenance</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We provide ongoing maintenance and support for WordPress
                websites, ensuring your site stays secure, up-to-date, and fully
                functional. Our team is always available to address issues
                promptly and implement the latest updates for optimal
                performance.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>WordPress SEO Optimization</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Increase visibility and drive more traffic with KLobTech’s
                WordPress SEO services, designed to improve rankings and boost
                conversions.
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

export default Wordpress;
