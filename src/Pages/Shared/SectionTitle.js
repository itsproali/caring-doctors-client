import React from "react";

const SectionTitle = ({ className, children }) => {
  return (
    <h2 className={`${className && className} text-accent font-semibold`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
