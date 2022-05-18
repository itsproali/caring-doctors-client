// import { format } from "date-fns";
import React from "react";

const Service = ({ service, date, setTreatment }) => {
  const { title, available } = service;
  return (
    <div className="bg-white shadow-lg rounded-xl  p-10 text-center">
      <h1 className="font-semibold text-secondary mb-3">{title}</h1>
      <p>{available[0]}</p>
      <p className="uppercase my-3 font-light text-sm">
        {available.length} {available.length > 1 ? "spaces" : "space"} available
      </p>

      {/* Modal Button */}
      <label
        htmlFor="booking-modal"
        className="btn modal-button bg-gradient-to-r from-accent to-secondary hover:bg-gradient-to-l text-white border-none font-semibold outline-none duration-500"
        disabled={available.length === 0}
        onClick={() => setTreatment(service)}
      >
        BOOK APPOINTMENT
      </label>
    </div>
  );
};

export default Service;
