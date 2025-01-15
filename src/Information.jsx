import "./Information.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Information() {
  return (
    <>
      <div id="information" className="infoContainer">
        <div className="infoTextArea">
          {/* <h1 className="infoText">
            <p>
              Your{" "}
              <span style={{ color: "var(--accent-color)" }}>business</span>.
              Your <span style={{ color: "var(--accent-color)" }}>users</span>.
              Our{" "}
              <span style={{ color: "var(--accent-color)" }}>expertise</span>
            </p>
            Creating technology that aligns with your goals
          </h1> */}
          <h1>
            <span style={{ color: "var(--accent-color)" }}>KLob</span>Tech
            stands at the forefront of technological innovation, driven by a
            highly skilled and dedicated IT team. We specialize in full-stack
            development and mobile app solutions to craft seamless,
            high-performance applications. Our commitment to cutting-edge
            technology and precision ensures transformative digital solutions
            tailored to your unique needs. In addition, we provide high-quality
            B2B market research, verified contact data, and actionable insights,
          </h1>
          <h1
            style={{
              display: "inline-block",
              // whiteSpace: "nowrap",
              overflow: "hidden",
              // borderRight: "2px solid var(--accent-color)", // Cursor effect
              // fontFamily: "monospace", // Typing font style
            }}
          >
            <span style={{ color: "var(--accent-color)" }}>KLob</span>Tech is
            not just a platform, it's your partner in revenue GROWTH
          </h1>
        </div>
      </div>
    </>
  );
}

export default Information;
