import React, { Component } from "react";
import Auth from "../auth/auth";
import Signup from "./registerForm/Signup";

export default class Checkauth extends Component {
  state = {
    step: 1
  };
  checkCookie() {
    const { step } = this.state;
    var user = accessCookie("user");
    if (user != "") {
        this.setState({step:2});
    } else {
      this.setState({ step: 1 });
    }
  }
  

  render() {
    const { val } = this.state;
    const values = {
      val,
    };
    if (val == 1) {
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
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }