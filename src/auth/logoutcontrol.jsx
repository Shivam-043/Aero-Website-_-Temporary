import React from "react";
import { useNavigate } from "react-router-dom";


const Logoutcontrol = (props) => {
  const navigate = useNavigate();
      logout();

    
  function logout() {
    // console.log(isLogin);
    var date = new Date();
    // date.setTime(date.getTime() - 30 * 24 * 60 * 60 * 1000);
    // document.cookie = `user=""; expires=` + date.toGMTString();
    document.cookie = 'user' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'user' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/techspardha;';
    console.log("Logout Control run");
    props.setLogin();
    props.setisAdmin(false);
    navigate("/login",{replace:true});
  }
  return <div>Logout control component here.</div>;
};

export default Logoutcontrol;
