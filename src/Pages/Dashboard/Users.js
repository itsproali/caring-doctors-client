import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase-init";
// import Loading from "../Shared/Loading";

const Users = () => {
  const [user] = useAuthState(auth);
  const requesterUid = user?.uid;
  const [users, setUsers] = useState([]);

  fetch("https://caring-doctors-portal.herokuapp.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));

  const handleAdmin = (uid) => {
    console.log(uid);
    fetch(`http://localhost:5000/user/admin/${uid}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ requesterUid, role: "admin" }),
    })
      .then((res) => {
        if (res.status === 401) {
          toast.error("You are not an Admin");
          return;
        }
        return res.json();
      })
      .then((data) => console.log(data));
  };
  return (
    <div className="my-8">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user?.user?.displayName}</td>
                <td>{user?.user?.email}</td>
                <td>
                  {user?.role !== "admin" ? (
                    <button
                      className="btn btn-xs btn-primary"
                      onClick={() => handleAdmin(user?.uid)}
                    >
                      Make Admin
                    </button>
                  ) : (
                    <p className="text-xs">Already an admin</p>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-primary">
                    Delete User
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

export default Users;
