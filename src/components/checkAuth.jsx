import React, { Component } from "react";
import Auth from "../auth/auth";
import Signup from "./registerForm/Signup";

export default class Checkauth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 1,
    };
    this.checkCookie = this.checkCookie.bind(this); // Bind the checkCookie method to the component instance
  }

  checkCookie() {
    const { val } = this.state;
    var user = accessCookie("user");
    if (user !== "") {
      this.setState({ val: 0 });
    } else {
      this.setState({ val: 1 }); // Update val to a different value when the cookie does not exist
    }
    //delete cookie 
    // document.cookie = "user=''; expires=Thu, 18 Dec 2013 12:00:00 UTC";
  }

  render() {
    const { val } = this.state;
    if (val === 1) {
      return <Auth handleState={this.checkCookie} />;
    } else {
      return <Signup />;
    }
  }
}

function accessCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
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
