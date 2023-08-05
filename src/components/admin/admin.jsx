import React from "react";
import FormData from "./formData";

const Admin = (props) => {
   const uid=props.user.role;
   console.log("uid : "+uid);
  return <div><FormData user={props.user}/></div>;
};


export default Admin;
