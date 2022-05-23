import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import toast from "react-hot-toast";

const ManageDoctors = () => {
  const { data, isLoading, refetch } = useQuery("doctors", () =>
    fetch(`http://localhost:5000/doctors`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  //   Handle Delete
  const handleDelete = (id, name) => {
    const confirmation = window.confirm("Are yo sure, you want to delete?");
    if (confirmation) {
      fetch(`http://localhost:5000/doctors/${id}`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success(`Doctor ${name} has been deleted`);
          refetch();
        });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-6">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((doctor, index) => (
              <tr key={doctor?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img src={doctor?.img} alt="Avatar" />
                    </div>
                  </div>
                </td>
                <td>{doctor?.name}</td>
                <td>{doctor?.category}</td>
                <td>
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => handleDelete(doctor._id, doctor.name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
