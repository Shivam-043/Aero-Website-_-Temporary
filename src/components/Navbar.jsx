import { useEffect, useState } from "react";
import { close, aeroLogo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import useUser from "../context/userContext";
import { axiosApi } from "../utils/fetchApi";
const Navbar = (props) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { user, setUser } = useUser();


  async function logout() {
    var date = new Date();
    document.cookie = 'user' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    await axiosApi("/api/users/logout").then((res)=>{
      console.log(res);
    }).catch((err)=>console.log(err));
    setUser("");
    navigate("/login", { replace: true });
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar gap-24">
      <div className="logo flex items-center ">
        <img
          src={aeroLogo}
          alt="AeroModelling Club"
          className="w-[100px] h-[100px]"
        />
        <h3 className="flex sm:hidden md:flex font-poppins font-semibold  ss:text-[30px] text-[30px] text-white ss:leading-[20px] leading-[20px]">
          Aero <span className="text-gradient hover:text-red-500">Modelling</span>{" "}
        </h3>
      </div>


      <ul className="list-none sm:flex hidden gap-8 items-center justify-end">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`navvalues font-poppins font-normal cursor-pointer text-[25px]  ${active === nav.title ? "text-white" : "text-dimWhite"
              // } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              } `}
            onClick={() => {
              setActive(nav.title);
            }}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}

        <li
          key={!user.id ? "login" : "logout"}
          className={`navvalues font-poppins font-normal cursor-pointer text-[25px]  ${(active === "Login" || active === "Logout") ? "text-white" : "text-dimWhite"
            // } ${index == 7 ? "mr-0" : "mr-10"}`}
            } "mr-0"`}
          onClick={() => {
            if (!user.id) setActive("Login");
            else logout();
          }}
        >
          {(!user.id) ? <Link to={`login`}>{"Login"}</Link> : "Logout"}
        </li>
        {(user.role == 'admin') ? (
          <li
            key={"admin"}
            className={`navvalues font-poppins font-normal cursor-pointer text-[25px]  ${active === "Admin" ? "text-white" : "text-dimWhite"
              // } ${index == 7 ? "mr-0" : "mr-10"}`}
              } "mr-0"`}
            onClick={() => {
              setActive("Admin");
            }}
          >
            <Link to={`admin`}>{"Admin"}</Link>
          </li>
        ) : <></>}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]  object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
        >
          <ul className="list-none flex justify-end items-start flex-1 gap-4 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} `}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(!toggle);
                }}
              >
                <Link to={`/${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
            <li
              key={!user.id ? "login" : "logout"}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${(active === "Login" || active === "Logout") ? "text-white" : "text-dimWhite"}`}
              onClick={() => {
                if (!user.id) setActive("Login");
                else logout();
                setToggle(!toggle);
              }}
            >
              {(!user.id) ? <Link to={`/login`}>{"Login"}</Link> : "Logout"}
            </li>
            {(user.role=='admin')&&(
              <li
              key={"admin"}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${(active === "Admin") ? "text-white" : "text-dimWhite"}`}
              onClick={() => {
                setActive("Admin");
                setToggle(!toggle);
              }}
            >
              <Link to={`/admin`}>{"Admin"}</Link>
            </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
