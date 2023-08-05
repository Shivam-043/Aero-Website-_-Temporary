import React, { useState } from "react";
const RegisterCard = ({data , onHandleClick}) => {
  return (
    // <div className='flex flex-row item-center justify-center m'>
    <div className="w-[90%] flex-row items-center m-8 xs1:m-5 xs1:w-[98%]">
      <div className="row items-center h-[60vh] xs1:h-[60vh]">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card">
            <div className="cover item-a">
              <h1>{data.title}</h1>
              <span className="price">$79</span>
              <div className="card-back">
                <a className="link" href="#popup" onClick={() => onHandleClick(data)}> 
                  Register
                </a>
                <a href="#">View detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Popup title= {props.title}/> */}
    </div>
  );
};


export default RegisterCard;
