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

      {/*  Modal */}
      {/* <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle bg-accent text-white absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{title}</h3>
          <form>
            <input
              className="input block w-full my-3 font-medium text-lg"
              type="text"
              name="date"
              id="date"
              value={format(date, "PP")}
              disabled
            />
            <select
              name="time"
              id="time"
              className="input w-full my-3 font-medium text-lg bg-gray-300 focus:outline-none"
            >
              <option value={slots[0]}>{slots[0]}</option>
              <option value={slots[1]}>{slots[1]}</option>
              <option value={slots[2]}>{slots[2]}</option>
              <option value={slots[3]}>{slots[3]}</option>
              <option value={slots[4]}>{slots[4]}</option>
            </select>
            <input
              className="input block w-full my-3 font-medium text-lg border-2 border-gray-300 focus:border-secondary focus:outline-none"
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              required
            />
            <input
              className="input block w-full my-3 font-medium text-lg border-2 border-gray-300 focus:border-secondary focus:outline-none"
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              required
            />
            <input
              className="input block w-full my-3 font-medium text-lg border-2 border-gray-300 focus:border-secondary focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <div className="modal-action">
              <label
                type="submit"
                htmlFor="booking-modal"
                className="btn w-full btn-accent text-white"
              >
                Submit
              </label>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default Service;
