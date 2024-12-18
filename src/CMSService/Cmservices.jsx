import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link, Outlet } from "react-router-dom";
import herocmsImg from "./assets/cms.png";
import shopifyImg from "./assets/shopify.png";
import wordpressImg from "./assets/wordpress.png";

import "./Cmservices.css";
function Cms() {
  return (
    <>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div
        // style={{ height: "50rem", width: "50rem", backgroundColor: "red" }}
        >
          <img src={herocmsImg} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            height: "50rem",
            width: "70rem",
            // backgroundColor: "red",
            flexDirection: "column",
            gap: "3rem",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "4rem" }}>CMS Services</h1>
          <p style={{ fontSize: "2.5rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum id
            provident, eligendi repudiandae veritatis harum qui inventore magnam
            velit blanditiis soluta asperiores repellat praesentium voluptatum
            ipsam iure natus doloremque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit, inventore nesciunt, vero incidunt eum
            ipsum similique autem ut dolorem magnam ad veritatis rerum ullam sed
            porro laudantium quis. Perferendis, excepturi?
          </p>
        </div>
      </div>

      <div className="serviceGridContainer">
        <div className="gridTitle">
          <p style={{ fontSize: "5rem", fontWeight: "600" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Lorem ipsum dolor
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt voluptatem esse ipsum sequi, veniam saepe asperiores
                praesentium quibusdam nobis culpa, qui minima excepturi. Dolor
                incidunt quas labore amet fugiat?
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Lorem ipsum dolor
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt voluptatem esse ipsum sequi, veniam saepe asperiores
                praesentium quibusdam nobis culpa, qui minima excepturi. Dolor
                incidunt quas labore amet fugiat?
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Lorem ipsum dolor
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt voluptatem esse ipsum sequi, veniam saepe asperiores
                praesentium quibusdam nobis culpa, qui minima excepturi. Dolor
                incidunt quas labore amet fugiat?
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Lorem ipsum dolor
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt voluptatem esse ipsum sequi, veniam saepe asperiores
                praesentium quibusdam nobis culpa, qui minima excepturi. Dolor
                incidunt quas labore amet fugiat?
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Lorem ipsum dolor
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt voluptatem esse ipsum sequi, veniam saepe asperiores
                praesentium quibusdam nobis culpa, qui minima excepturi. Dolor
                incidunt quas labore amet fugiat?
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Lorem ipsum dolor
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt voluptatem esse ipsum sequi, veniam saepe asperiores
                praesentium quibusdam nobis culpa, qui minima excepturi. Dolor
                incidunt quas labore amet fugiat?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="imageGridContainer">
        <div className="gridTitle">
          <p style={{ fontSize: "5rem", fontWeight: "600" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="gridArea">
          <div className="imageService">
            <div className="imageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>Shopify</p>{" "}
            </div>
            <div className="serviceImage">
              <Link to="/cms/shopify">
                <img src={shopifyImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="imageService">
            <div className="imageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>Wordpress</p>{" "}
            </div>
            <div className="serviceImage">
              <Link to="/cms/wordpress">
                <img src={wordpressImg} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Cms;
