import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import styles from "./style";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import TechSpardha from "./components/TechSpardha";
import Drone from "./components/AboutUs";
import BlogPost from "./Blog/BlogPost";
import BlogTemp from "./Blog/BlogTemp";
import Auth from "./auth/auth";
import Logoutcontrol from "./auth/logoutcontrol";
import { useState, useEffect } from "react";
import AboutUs from "./components/AboutUs";
import Admin from "./components/Admin";

const HomePage = () => {
  const [islogin, setisLogin] = useState(0);
  const [isadmin,setisAdmin] =useState(false);
  const [user,setUser] = useState("");
  // var user="jay ";
  // checkCookie();
  function setStateisLogin(val) {
    setisLogin(val);
  }
  
  useEffect(() => {
    checkCookie();
  }, []);

  useEffect(() => {
    return () => {
      if(user.role=='admin'){
        setisAdmin(true);
      }
    };
  }, [user]);

  async function checkCookie () {
    console.log("check cookie runnig");
    var usr=await accessCookie("user");
    if (usr !== "") {
      setUser ( JSON.parse(usr));
      console.log("cookie found");
      setisLogin(1);
    } else {
      console.log("Not Found");
      setisLogin(0);
    }
  }
  

  async function accessCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    // console.log(decodedCookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  return (
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar isLogin={islogin} isadmin={isadmin}/>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/techspardha" element={<TechSpardha />} />
          <Route path="/admin" element={<Admin user={user}/>}/>
          {/* <Route path='/logout' element={<Drone />}/>
          <Route path='/login' element={<Auth isLogin={islogin} setLogin={checkCookie} />}/> */}

          <Route
            path="/drone"
            element={
              islogin ? (
                <Drone />
              ) : (
                <Auth isLogin={islogin} setLogin={checkCookie} />
              )
            }
          />
          {/* <Route path="/drone" element={<Auth  />} /> */}
          <Route path="/login" element={<Auth isLogin={islogin} setLogin={checkCookie} />}/>
          <Route path="/logout" element={<Logoutcontrol setLogin={checkCookie} isLogin={islogin} setisAdmin={setisAdmin} />}/>
          
          {/* <Route
            path="/authenticate"
            element={
              !islogin ? (
                <Auth isLogin={islogin} setLogin={checkCookie} />
              ) : (
                <Logoutcontrol setLogin={checkCookie} />
              )
            }
          /> */}
          <Route path="/api/blogposts/:id" element={<BlogPost />} />
          {/* <Route path='/suggestions' element={<Suggestion />}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default HomePage;
