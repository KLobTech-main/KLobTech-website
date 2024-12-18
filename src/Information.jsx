import "./Information.css";
import { motion } from "framer-motion";

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
            provides high-quality B2B market research, verified contact data,
            and actionable insights, while also offering full-stack and mobile
            Flutter development through our dedicated IT team. Additionally, our
            recruitment services help businesses find top talent, ensuring the
            right fit for their unique needs.
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
