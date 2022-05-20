import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebase-init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="parent mt-20">
      <h1 className="text-4xl text-center text-accent mb-6">Dashboard</h1>
      <ul className="flex justify-center flex-wrap">
        <li>
          <Link
            to="/dashboard"
            className={`mx-2 rounded-full btn btn-sm ${
              location.pathname === "/dashboard" ? "btn-primary" : "btn-outline btn-primary"
            }`}
          >
            My Appointment
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/myreview"
            className={`mx-2 rounded-full btn btn-sm ${
              location.pathname === "/dashboard/myreview"
                ? "btn-primary"
                : "btn-outline btn-primary"
            }`}
          >
            My Review
          </Link>
        </li>
        {admin && (
          <>
          <li>
            <Link
              to="/dashboard/users"
              className={`mx-2 rounded-full btn btn-sm ${
                location.pathname === "/dashboard/users"
                  ? "btn-primary"
                  : "btn-outline btn-primary"
              }`}
            >
              All Users
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/add-doctor"
              className={`mx-2 rounded-full btn btn-sm ${
                location.pathname === "/dashboard/add-doctor"
                  ? "btn-primary"
                  : "btn-outline btn-primary"
              }`}
            >
              Add Doctor
            </Link>
          </li>
          </>
        )}
      </ul>
      <Outlet />
    </div>
  );
};

export default Dashboard;
