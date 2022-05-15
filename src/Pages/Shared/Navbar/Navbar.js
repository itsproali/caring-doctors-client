import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase-init";
import "../Shared.css";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const [user] = useAuthState(auth);
  const navItem = (
    <>
      <li>
        <NavLink className="btn-md" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="btn-md" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="btn-md" to="/appointments">
          Appointments
        </NavLink>
      </li>
      <li>
        <NavLink className="btn-md" to="/reviews">
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink className="btn-md" to="/contact">
          Contact Us
        </NavLink>
      </li>
      <li>
        {user ? (
          <button
            onClick={() => signOut(auth)}
            className="btn btn-md btn-accent text-white"
          >
            LogOut
          </button>
        ) : (
          <NavLink className="btn-md" to="/login">
            Login
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <div className="">
      <div className={`parent navbar bg-base-100 visible ${show && "hidden"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Caring Doctors
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
