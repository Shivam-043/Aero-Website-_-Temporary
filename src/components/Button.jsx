import React from "react";

const Button = (props) => (
  <button type="button" className={`${props.py} ${props.px} font-poppins font-medium text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none`} onClick={props.onClick}>
    {props.title}
  </button>
);

export default Button;
