import React from "react";
import Banner from "./Banner/Banner";
import Treatment from "./Treatment";
import Services from "./Service/Services";
import HomeApt from "./HomeApt";

const Home = () => {
  return (
    <section>
      <Banner />
      <Services />
      <Treatment />
      <HomeApt />
    </section>
  );
};

export default Home;
