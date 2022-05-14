import { format } from "date-fns";
import React from "react";

const Modal = ({ date, treatment, setTreatment }) => {
  const { title, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    setTreatment(null)
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle bg-accent text-white absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{title}</h3>
          <form onSubmit={handleBooking}>
            <input
              className="input block w-full my-3 font-medium text-lg"
              type="text"
              name="date"
              id="date"
              value={format(date, "PP")}
              disabled
            />
            <select
              name="slot"
              id="slot"
              className="select w-full font-medium text-lg my-2 border-2 border-gray-300 focus:border-secondary focus:outline-none"
            >
              {slots.map((slot) => (
                <option value={slot} key={slot}>
                  {slot}
                </option>
              ))}
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
            <input
              type="submit"
              value="Submit"
              className="btn w-full btn-accent text-white"
            />
            {/* <div className="modal-action">
              <label
                type="submit"
                htmlFor="booking-modal"
                className="btn w-full btn-accent text-white"
              >
                Submit
              </label>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
