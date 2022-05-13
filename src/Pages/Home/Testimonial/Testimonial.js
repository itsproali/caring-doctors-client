import React from "react";

const Testimonial = ({ testimonial }) => {
  const { img, name, city, description } = testimonial;
  return (
    <div class="card bg-base-100 shadow-xl p-6 border">
      <div className="mt-4 mb-8 text-center">
        <p className="">{description}</p>
      </div>
      <div className="flex items-center justify-start">
        <div class="avatar ml-2">
          <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="person" />
          </div>
        </div>
        <div class="ml-4">
          <h2 class="text-xl font-semibold text-primary">{name}</h2>
          <p>{city}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
