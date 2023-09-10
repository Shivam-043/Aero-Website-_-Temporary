import { useState } from "react";

import { close, aeroLogo, menu } from "../assets";
import { navLinks,navLinksAdmin } from "../constants";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  console.log("isadmin"+props.isadmin);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src={aeroLogo}
        alt="AeroModelling Club"
        className="w-[100px] h-[100px]"
      />
      <h3 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[30px] text-white ss:leading-[20px] leading-[20px]">
        Aero <span className="text-gradient hover:text-red-500">Modelling</span>{" "}
      </h3>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {(!props.isadmin)?navLinks.map((nav, index) => (
          <Link to={`/${nav.id}`}>
            <li
              key={nav.id}
              className={`navvalues font-poppins font-normal cursor-pointer text-[25px]  ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => {
                setActive(nav.title);
              }}
              

            >
              {nav.title}
            </li>
          </Link>
        )):
        navLinksAdmin.map((nav, index) => (
          <Link to={`/${nav.id}`}>
            <li
              key={nav.id}
              className={`navvalues font-poppins font-normal cursor-pointer text-[25px]  ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinksAdmin.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => {
                setActive(nav.title);
              }}
              

            >
              {nav.title}
            </li>
          </Link>
        ))
      }

        

        
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]  object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(!toggle);
                }}
              >
                <Link to={`/${nav.id}`}>
                  <li>{nav.title}</li>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
