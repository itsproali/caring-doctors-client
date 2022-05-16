import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { img, title, description } = service;
  const navigate = useNavigate();
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className="card  bg-base-100 shadow-xl mx-auto md:mx-0 hover:bg-primary duration-500 cursor-pointer"
      onClick={() => navigate("/appointments")}
    >
      <figure className="px-10 pt-10">
        <img src={img} alt="Service" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center text-neutral">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
