import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";
import { toast } from "react-hot-toast";

const Modal = ({ date, treatment, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, title, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const booking = {
      date: format(date, "PP"),
      treatmentId: _id,
      treatmentName: title,
      slot: e.target.slot.value,
      patientName: e.target.name.value,
      patientEmail: e.target.email.value,
      patientId: user.uid,
    };

    fetch("https://caring-doctors-portal.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Booking Confirmed for ${data.booking.treatmentName}`);
        } else {
          toast.error(`Already has an appointment on ${data.booking.date}`);
        }
        refetch();
      });

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
            <input
              className="input block w-full my-3 font-medium text-lg border-2 border-gray-300 focus:border-secondary focus:outline-none"
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={user?.displayName}
              disabled
              required
            />
            <input
              className="input block w-full my-3 font-medium text-lg border-2 border-gray-300 focus:border-secondary focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={user?.email}
              disabled={user.email}
              required
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
