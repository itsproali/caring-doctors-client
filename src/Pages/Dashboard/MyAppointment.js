import React from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";
import Loading from "../Shared/Loading";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const patientId = user.uid;

  const { data, isLoading, isError, error } = useQuery(
    ["myAppointment", patientId],
    () =>
      fetch(`https://caring-doctors-portal.herokuapp.com/myappointment?patientId=${patientId}`).then(
        (res) => res.json()
      )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(data);
  return (
    <div>
          <h1 className="my-2 text-2xl text-accent">My Appointment : {data.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {data.map((treatment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{treatment.treatmentName}</td>
                <td>{treatment.date}</td>
                <td>{treatment.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
