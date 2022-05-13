import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      _id: 1,
      name: "Winson Herry",
      city: "Dhaka",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex id officia ipsam aliquam non quos impedit labore porro ullam?",
      img: people1,
    },
    {
      _id: 2,
      name: "Camila",
      city: "Chicago",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex id officia ipsam aliquam non quos impedit labore porro ullam?",
      img: people2,
    },
    {
      _id: 3,
      name: "Nova",
      city: "California",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex id officia ipsam aliquam non quos impedit labore porro ullam?",
      img: people3,
    },
  ];
  return (
    <section className="parent my-16">
      <h2 className="text-accent font-semibold">Testimonial</h2>
      <h1 className="text-3xl text-primary my-2">What Our Patients Says</h1>
      <div className="my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
