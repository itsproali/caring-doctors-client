import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footerImage bg-cover bg-center bg-no-repeat">
      <div className="footer p-10 text-base-content">
        <div>
          <span className="footer-title">SERVICES</span>
          <Link to="/" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to="/" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="/" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="/" className="link link-hover">
            Teeth Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <p>Sarulia, Demra - 1361 Dhaka, Bangladesh </p>
        </div>
      </div>

      <div className="mx-auto my-8 text-center">
        <p>Copyright © 2022 - All right reserved by <a className="text-accent" href="https://www.linkedin.com/in/itsproali/" target="blank">Mohammad Ali</a></p>
      </div>
    </footer>
  );
};

export default Footer;
