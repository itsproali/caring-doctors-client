import React, { useState } from "react";
// import Loading from "../Shared/Loading";

const Users = () => {
  const [users, setUsers] = useState([]);

  fetch("https://caring-doctors-portal.herokuapp.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
  return (
    <div className="my-8">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr className="hover:active" key={index}>
                <th>{index}</th>
                <td>{user?.user?.displayName}</td>
                <td>{user?.user?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
