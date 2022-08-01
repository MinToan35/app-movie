import React from "react";
import logo from "../assets/mt-logo.jpg";
import bg from "../assets/footer-bg.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="px-8 py-24 bg-top bg-cover bg-no-repeat flex flex-col	items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-[1000px] w-full">
        <div className="flex  items-center justify-center w-full mb-12">
          <img
            src={logo}
            alt=""
            className="rounded-full h-12 w-12 object-cover mr-2.5"
          />
          <Link to="/" className="text-4xl font-semibold">
            Movies
          </Link>
        </div>
        <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col  text-2xl font-semibold gap-4">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="flex flex-col  text-2xl font-semibold gap-4">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="flex flex-col  text-2xl font-semibold gap-4">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
