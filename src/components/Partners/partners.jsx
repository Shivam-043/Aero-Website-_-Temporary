import React from "react";
import Footer from "../Footer";
import PComponent from "./partnerComponent";

const Partners = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center content-between align-middle m-10 ">
        <h1 className=" text-[40px] py-5 ">Our Partners</h1>
        <div className="flex flex-row xs1:flex-col justify-center">
          <PComponent
            img={
              "https://1000logos.net/wp-content/uploads/2020/08/SolidWorks-Logo.png"
            }
          />
          <PComponent
            img={
              "https://www.emworks.com/portal/img/logo.png"
            }
          />
        </div>
      </div>
      <div className="m-5">
          <Footer />
      </div>

    </>
  );
};

export default Partners;
