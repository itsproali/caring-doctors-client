import React from "react";

const InfoCard = ({ img, title, color }) => {
  return (
    <div
      data-aos="flip-up"
      data-aos-duration="1000"
      className={`${
        color === "gradient"
          ? "bg-gradient-to-r from-accent to-secondary"
          : "bg-primary"
      } card card-side shadow-xl`}
    >
      <figure className="pl-5 font-bold">
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{title}</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
