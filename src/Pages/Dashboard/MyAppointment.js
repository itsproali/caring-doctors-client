import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";
import Loading from "../Shared/Loading";
import { toast } from "react-hot-toast";
import { signOut } from "firebase/auth";

const MyAppointment = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const patientId = user.uid;

  const { data, isLoading, isError, error } = useQuery(
    ["myAppointment", patientId],
    () =>
      fetch(`http://localhost:5000/myappointment?patientId=${patientId}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => {
        if (res.status === 401 || res.status === 403) {
          toast.error(`${res.statusText} Access. Please LogIn Again`);
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        } else {
          return res.json();
        }
      })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    toast.error(`${error.message}`);
  }

  console.log(data.status);
  return (
    <div>
      <h1 className="my-2 text-2xl text-accent">
        My Appointment : {data?.length}
      </h1>
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
            {data?.map((treatment, index) => (
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
