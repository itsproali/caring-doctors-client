import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import Modal from "./Modal";
import Service from "./Service";

const AvailableApt = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="parent my-16">
      {date && (
        <SectionTitle className="text-center">
          Available Services on {format(date, "PP")}.
        </SectionTitle>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            date={date}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <Modal date={date} treatment={treatment} setTreatment={setTreatment} />
      )}
    </section>
  );
};

export default AvailableApt;
