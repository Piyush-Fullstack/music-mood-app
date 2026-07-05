import React from "react";
import { motion } from "framer-motion";
import data from "../../data/data.json";

const Features = () => {
  return (
    <div className="features-container">
      {data.map((feature, index) => (
        <motion.div
          key={index}
          className="feature-card"
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95, rotate: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-desc">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;