import React from "react";

const PComponent = (props) => {
  return (
    <div className="w-[25vw] h-[40vh] xs1:w-[80vw] bg-white rounded-[30px] opacity-80 align-middle flex m-5 justify-center">
      <img src={props.img} alt="" />
    </div>
  );
};

export default PComponent;
