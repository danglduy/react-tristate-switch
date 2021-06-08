import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function Switch({ status, ...props }) {
  const className = `switch ${status}`;

  return (
    <motion.div animate className={className} {...props}>
      <motion.div
        animate
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
    </motion.div>
  );
}

export default function App() {
  const [status, setStatus] = useState("on");

  const handleStatusChange = (event) => {
    const divPosition = event.currentTarget.getBoundingClientRect();
    const divPositionLength = divPosition.right - divPosition.left;
    const clickPosition = event.pageX - divPosition.left;

    const positionPercentage = clickPosition / divPositionLength;

    switch (true) {
      case positionPercentage < 0.25: {
        setStatus("off");
        break;
      }
      case positionPercentage < 0.75: {
        setStatus("intermediate");
        break;
      }
      default:
        setStatus("on");
        break;
    }
  };

  return <Switch status={status} onClick={handleStatusChange} />;
}
