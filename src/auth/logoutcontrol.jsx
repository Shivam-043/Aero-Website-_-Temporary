import React from "react";
import { useNavigate } from "react-router-dom";


const Logoutcontrol = (props) => {
  const navigate = useNavigate();
    logout();
  function logout() {
    // console.log(isLogin);
    var date = new Date();
    date.setTime(date.getTime() - 30 * 24 * 60 * 60 * 1000);
    document.cookie = `user="";SameSite=None; expires=` + date.toGMTString();
    props.setLogin();
  }
  return <div>Logout control component here.</div>;
};

export default Logoutcontrol;
