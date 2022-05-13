import React from "react";
import Banner from "./Banner/Banner";
import Treatment from "./Treatment";
import Services from "./Service/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Treatment/>
    </div>
  );
};

export default Home;
