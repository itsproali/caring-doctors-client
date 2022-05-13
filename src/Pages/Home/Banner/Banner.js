import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../assets/images/chair.png";
import marker from "../../../assets/icons/marker.svg";
import clock from "../../../assets/icons/clock.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Banner = () => {
  return (
    <div>
      <div className="hero parent min-h-screen bg-bannerImage bg-cover bg-center bg-no-repeat">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="w-full rounded-lg shadow-2xl"
            alt="Chair"
          />
          <div>
            <h1 className="text-5xl font-semibold text-primary">
              Your New Smile Starts Here
            </h1>
            <p className="py-6 text-primary">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/">
              <button className="btn bg-gradient-to-r from-accent to-secondary hover:bg-gradient-to-l text-white border-none font-semibold outline-none duration-500">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-3 md:mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InfoCard img={clock} title="Opening Hours" color="gradient" />
        <InfoCard img={marker} title="Visit Our Location" color="primary" />
        <InfoCard img={phone} title="Contact Us Now" color="gradient" />
      </div>
    </div>
  );
};

export default Banner;
