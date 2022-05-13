import React from "react";
import Banner from "./Banner/Banner";
import Treatment from "./Treatment";
import Services from "./Service/Services";
import HomeApt from "./HomeApt";
import Testimonials from "./Testimonial/Testimonials";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <section>
      <Banner />
      <Services />
      <Treatment />
      <HomeApt />
      <Testimonials/>
      <Contact/>
    </section>
  );
};

export default Home;
