import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div>
      <div className="hero parent min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="w-full rounded-lg shadow-2xl" alt="Chair" />
          <div>
            <h1 className="text-5xl font-semibold text-primary">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-gradient font-semibold outline-none">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
