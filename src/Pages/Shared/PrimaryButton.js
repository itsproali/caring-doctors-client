import React from "react";

const PrimaryButton = ({ className, children }) => {
  return (
    <button
      className={`${
        className && className
      } btn bg-gradient-to-r from-accent to-secondary hover:bg-gradient-to-l text-white border-none font-semibold outline-none duration-500`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
