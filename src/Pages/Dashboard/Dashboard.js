import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return (
      <div className="parent mt-20">
          <h1 className="text-4xl text-center text-accent mb-6">Dashboard</h1>
      <ul className="flex justify-center">
        <li>
          <Link
            to="/dashboard"
            className={`mx-2 rounded-full btn btn-sm ${
              location.pathname === "/dashboard" ? "btn-primary" : "btn-outline"
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
                : "btn-outline"
            }`}
          >
            My Review
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Dashboard;
