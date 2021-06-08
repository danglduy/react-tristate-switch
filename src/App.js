import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function Switch({ status, ...props }) {
  const containerVariants = {
    off: {
      backgroundColor: "#dddddd",
    },
    intermediate: {
      backgroundColor: "#87ebc3",
    },
    on: {
      backgroundColor: "#22cc88",
    },
  };

  const itemVariants = {
    off: {
      x: "0",
    },
    intermediate: {
      x: "44%",
    },
    on: {
      x: "90%",
    },
  };

  return (
    <motion.div
      animate={containerVariants[status]}
      className="switch"
      variants={containerVariants}
      {...props}
    >
      <motion.div animate={itemVariants[status]} variants={itemVariants} />
    </motion.div>
  );
}

export default function App() {
  const [status, setStatus] = useState("off");

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
