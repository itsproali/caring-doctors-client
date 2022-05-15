import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";

const Modal = ({ date, treatment, setTreatment }) => {
  const [user] = useAuthState(auth);
  const { title, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    setTreatment(null);
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
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
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
              defaultValue={user?.displayName}
              required
            />
            <input
              className="input block w-full my-3 font-medium text-lg border-2 border-gray-300 focus:border-secondary focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              defaultValue={user?.email}
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
              type="submit"
              value="Submit"
              className="btn w-full btn-accent text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
