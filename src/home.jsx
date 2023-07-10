import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import styles from "./style";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import TechSpardha from "./components/TechSpardha";
import Drone from "./components/Drone";
import BlogPost from "./Blog/BlogPost";
import BlogTemp from "./Blog/BlogTemp";
import Auth from "./auth/auth";

const HomePage = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blogs" element={<BlogTemp />} />
          <Route path="/events" element={<Events />} />
          <Route path="/techspardha" element={<TechSpardha />} />
          {/* <Route path='/drone' element={<BlogTemp />}/> */}
          <Route path="/drone" element={<Drone   />} />
          {/* <Route path="/drone" element={<Auth  />} /> */}
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* <Route path='/hover' element={<HoverCanvas/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default HomePage;
