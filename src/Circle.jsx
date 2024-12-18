import { motion } from "motion/react";
function Circle({ top, left, color, scale }) {
  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
      dragElastic={0.2}
      style={{
        height: "20rem",
        width: "20rem",
        borderRadius: "50%",
        backgroundColor: color,
        position: "absolute",
        left: left,
        top: top,
        cursor: "pointer",
        scale: scale,
        border: "0px solid black",
        zIndex: "-1",
      }}
      className="circle"
    ></motion.div>
  );
}

export default Circle;
