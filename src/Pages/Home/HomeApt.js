import React from "react";
import { Link } from "react-router-dom";
import doctor from "../../assets/images/doctor.png";
import PrimaryButton from "../Shared/PrimaryButton";
import SectionTitle from "../Shared/SectionTitle";

const HomeApt = () => {
  return (
    <section className="parent bg-appointment mt-32">
      <div className="flex items-center py-6 lg:py-0">
        <div className="flex-1 hidden lg:block ">
          <img className="mt-[-150px]" src={doctor} alt="doctor" />
        </div>
        <div className="flex-1 px-2 lg:px-0">
          <SectionTitle>Appointment</SectionTitle>
          <h1 className="text-4xl text-white my-4 font-semibold">
            Make an appointment Today
          </h1>
          <p className="text-white mb-6">
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
    </section>
  );
};

export default HomeApt;
