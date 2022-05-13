import React from "react";
import Service from "./Service";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import SectionTitle from "../../Shared/SectionTitle";

const Services = () => {
  const services = [
    {
      _id: 1,
      img: fluoride,
      title: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam voluptas accusantium",
    },
    {
      _id: 2,
      img: cavity,
      title: "Cavity Filling",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam voluptas accusantium",
    },
    {
      _id: 3,
      img: whitening,
      title: "Teeth Whitening",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam voluptas accusantium",
    },
  ];
  return (
    <section className="my-32">
      <SectionTitle className="text-center">Our Services</SectionTitle>
      <h1 className="text-4xl text-center text-primary my-2">
        Services We Provide
      </h1>
      <div className="parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </section>
  );
};

export default Services;
