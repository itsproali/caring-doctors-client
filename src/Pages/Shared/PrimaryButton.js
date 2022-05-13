import React from "react";

const PrimaryButton = (props) => {
  console.log(props);
  return (
    <button className="btn bg-gradient-to-r from-accent to-secondary hover:bg-gradient-to-l text-white border-none font-semibold outline-none duration-500">
      {props.children}
    </button>
  );
};

export default PrimaryButton;
