import React from "react";
import Banner from "./Banner/Banner";
import Treatment from "./Treatment";
import Services from "./Service/Services";
import HomeApt from "./HomeApt";
import Testimonials from "./Testimonial/Testimonials";

const Home = () => {
  return (
    <section>
      <Banner />
      <Services />
      <Treatment />
      <HomeApt />
      <Testimonials/>
    </section>
  );
};

export default Home;
