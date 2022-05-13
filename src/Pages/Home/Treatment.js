import React from "react";
import { Link } from "react-router-dom";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Treatment = () => {
  return (
    <div className="parent hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <img
          className="max-w-sm w-full mx-auto rounded-lg shadow-2xl"
          src={treatment}
          alt="Treatment"
        />
        <div className="md:w-1/2 text-primary">
          <h1 className="text-4xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link to="/appointments">
            <PrimaryButton>Get Started</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
