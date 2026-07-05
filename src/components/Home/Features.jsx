import React from "react";
import data from "../../data/data.json";

const Features = () => {
  return (
    <div className="features-container">
      {data.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-desc">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;