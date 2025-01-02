import Navbar from "../Nav/Navbar";
import Footer from "../Components/Footer";
import shopifyImg from "./assets/shopify.png";
import ScrollToTop from "../Components/ScrollToTop";
import Mobilefooter from "../Mobilefooter";
import { useMediaQuery } from "react-responsive";
import Logo from "../Components/logo";

function Shopify() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {!isMobile && <Logo></Logo>}
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div>
          <img style={{ height: "40rem" }} src={shopifyImg} alt="" />
        </div>
        <div className="heroInfo">
          <div className="heroTitleArea">
            <h1 className="heroTitle">Shopify Services</h1>
          </div>

          <p className="heroDescription">
            Choose KLobTech for top-tier Shopify development services. Our
            expertise lies in building personalized, high-performance Shopify
            stores that enhance user experience and drive conversions. As a
            leading Shopify development company, we offer seamless app
            integrations and optimization strategies to help your business
            succeed in the competitive e-commerce space.
          </p>
        </div>
      </div>

      <div className="mobileServiceGridContainer">
        <div className="serviceGridTitleContainer">
          <p className="serviceTitle">
            Why Choose KLobTech for Shopify Development?
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Custom Shopify Store </p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                KLobTech specializes in building fully customized Shopify stores
                designed to reflect your unique brand, engage your audience, and
                meet your business goals for an exceptional shopping experience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Shopify Theme Design</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our skilled designers create or customize Shopify themes that
                highlight your brand identity, ensuring a visually stunning,
                user-friendly, and mobile-optimized design.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Shopify App Integration</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We enhance your Shopify store's functionality by integrating
                essential apps, including payment gateways, marketing tools, CRM
                solutions, and more, to elevate sales and customer engagement.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Shopify SEO Services</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Our Shopify SEO services optimize your store to improve search
                engine rankings, driving organic traffic and increasing
                visibility to help your business reach a wider audience.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Shopify Migration Services</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                Looking to migrate to Shopify? KLobTech offers seamless
                migration services that ensure a smooth transition with no data
                loss, minimal downtime, and preserved SEO performance.
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p>Shopify Support</p>
            </div>
            <div className="appServiceDescriptionArea">
              <p className="appServiceDescription">
                We provide ongoing maintenance and support to ensure your
                Shopify store runs smoothly. Our services include security
                updates, performance optimization, and troubleshooting to keep
                your store at its best.
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

export default Shopify;
