import Footer from "../Components/Footer";
import Navbar from "../Nav/Navbar";
import { Link, Outlet } from "react-router-dom";
Outlet;
import reactImg from "./assets/react.png";
import aiImg from "./assets/ai.png";
import angularImg from "./assets/angular.png";
import phpImg from "./assets/php.png";
import pythonImg from "./assets/python.png";
import nodeImg from "./assets/node.png";
import webdevImg from "./assets/webdev.png";

import "./FullStackDevelopment.css";
function FullStackDevelopment() {
  return (
    <>
      <Navbar></Navbar>
      <div className="serviceHero">
        <div
        // style={{ height: "50rem", width: "50rem", backgroundColor: "red" }}
        >
          <img src={webdevImg} alt="" />
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
          <h1 style={{ fontSize: "4rem" }}>Full Stack Development</h1>
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
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>React</p>{" "}
            </div>
            <div className="serviceImage">
              <Link to="/fullStackDevelopment/react">
                <img src={reactImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="imageService">
            <div className="imageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>AI/ML</p>{" "}
            </div>
            <div className="serviceImage">
              <Link to="/fullStackDevelopment/aiml">
                <img src={aiImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="imageService">
            <div className="imageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>Node JS</p>{" "}
            </div>
            <div className="serviceImage">
              <Link to="/fullStackDevelopment/node">
                <img src={nodeImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="imageService">
            <div className="imageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Angular Development
              </p>{" "}
            </div>
            <div className="serviceImage">
              <Link to="/fullStackDevelopment/angular">
                <img src={angularImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="imageService">
            <div className="imageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Python Development
              </p>{" "}
            </div>
            <div className="serviceImage">
              <Link to="/fullStackDevelopment/python">
                <img src={pythonImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="imageService">
            <div className="imageTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                PHP Development
              </p>{" "}
            </div>
            <div className="serviceImage">
              <Link to="/fullStackDevelopment/php">
                <img src={phpImg} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default FullStackDevelopment;