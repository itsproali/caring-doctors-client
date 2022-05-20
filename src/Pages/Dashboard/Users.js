import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase-init";
import useAdmin from "../../hooks/useAdmin";
// import Loading from "../Shared/Loading";

const Users = () => {
  const [user] = useAuthState(auth);
  const requesterUid = user?.uid;
  const [users, setUsers] = useState([]);
  const [admin] = useAdmin(user);
  if (admin) {
    fetch("https://caring-doctors-portal.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }

  const handleAdmin = (uid, role) => {
    fetch(`https://caring-doctors-portal.herokuapp.com/user/role/${uid}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ requesterUid, role }),
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
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user?.displayName}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex="0"
                      className="btn btn-circle btn-primary btn-sm avatar p-2"
                    >
                      <button className="">
                        <img
                          className="w-4 h-4"
                          src="https://i.ibb.co/jbB2JG0/option.png"
                          alt="option"
                        />
                      </button>
                    </label>
                    <ul
                      tabIndex="0"
                      className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
                    >
                      <li>
                        {user?.role !== "admin" ? (
                          <button
                            onClick={() => handleAdmin(user?.uid, "admin")}
                          >
                            Make Admin
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAdmin(user?.uid, "user")}
                          >
                            Remove Admin
                          </button>
                        )}
                      </li>
                      <li>
                        <button>Delete User</button>
                      </li>
                    </ul>
                  </div>
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
