import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AptBanner = ({ date, setDate }) => {
  const css = `
  .selected, selected:active {
    background-color: #19D3AE;
    font-weight: bold;
  }
  .today { 
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }`;

  return (
    <section className="parent hero min-h-screen bg-bannerImage bg-cover bg-center bg-no-repeat">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w md:max-w-xl rounded-lg shadow-2xl"
          alt="Chair"
        />
        <div className="lg:px-6">
          <style>{css}</style>
          <DayPicker
            styles={{
              caption: { color: "#19D3AE" },
            }}
            className="bg-white border shadow-2xl rounded-2xl p-4 mb-3"
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiersClassNames={{
              selected: "selected",
              today: "today",
            }}
          />
          {date ? (
            <p className="text-accent">
              You have selected: {format(date, "PP")}.
            </p>
          ) : (
            <p className="text-red-600">Please Select a date !!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AptBanner;
