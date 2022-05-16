import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import SectionTitle from "../Shared/SectionTitle";
import Modal from "./Modal";
import Service from "./Service";
import { toast } from "react-hot-toast";

const AvailableApt = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const {
    data: services,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["available", date], () =>
    fetch(
      `https://caring-doctors-portal.herokuapp.com//available?date=${format(
        date,
        "PP"
      )}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return toast.error(`${error?.message}`);
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
        <Modal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableApt;
