import React, { useRef, useEffect } from "react";
import logo from "../assets/mt-logo.jpg";
import { Link, useLocation } from "react-router-dom";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const active = headerNav.findIndex((e) => e.path === pathname);
  const headerRef = useRef();
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("md:h-16");
        headerRef.current.classList.add("h-16");
        headerRef.current.classList.add("bg-black");
        headerRef.current.classList.remove("md:h-24");
        headerRef.current.classList.remove("h-24");
      } else {
        headerRef.current.classList.remove("md:h-16");
        headerRef.current.classList.remove("h-16");
        headerRef.current.classList.remove("bg-black");
        headerRef.current.classList.add("md:h-24");
        headerRef.current.classList.add("h-24");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <div
      ref={headerRef}
      className="flex w-full md:justify-between flex-col fixed z-10 top-0 left-0  items-center h-24 md:flex-row md:h-24 md:px-5 "
    >
      <div className="flex  items-center justify-center h-full w-full md:w-max">
        <img
          src={logo}
          alt=""
          className="rounded-full h-12 w-12 object-cover mr-2.5"
        />
        <Link to="/" className="text-4xl font-semibold">
          Movies
        </Link>
      </div>
      <ul className="flex fixed md:relative bottom-0 bg-black left-0 text-2xl font-bold h-20 w-full items-center justify-between px-5 md:w-auto md:gap-8 md:px-0 md:bg-transparent">
        {headerNav.map((e, i) => (
          <li
            key={i}
            className={`py-1 w-max relative before:content-['']  before:absolute before:top-10 before:left-[50%] before:translate-x-[-50%] before:bg-primary before:h-[2px]  before:duration-300 hover:before:w-full ${
              i === active ? "before:w-full" : "before:w-0 "
            }`}
          >
            <Link to={e.path}>{e.display}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
