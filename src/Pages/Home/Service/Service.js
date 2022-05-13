import React from "react";

const Service = ({ service }) => {
  const { img, title, description } = service;
  return (
    <div className="card  bg-base-100 shadow-xl mx-auto md:mx-0 hover:bg-primary duration-500">
      <figure className="px-10 pt-10">
        <img src={img} alt="Service" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center text-gray-500">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
