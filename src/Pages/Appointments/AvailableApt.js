import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import SectionTitle from "../Shared/SectionTitle";
import Modal from "./Modal";
import Service from "./Service";

const AvailableApt = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const load = async () => {
    const response = await fetch("https://caring-doctors-portal.herokuapp.com/services");
    return response.json();
  };
  
  const { data, status } = useQuery("services", load);
  useEffect(() => {
    if (status === "success") {
      setServices(data);
    }
  }, [status, data]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <p className="text-4xl text-red-500">Error ....</p>;
  }

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
