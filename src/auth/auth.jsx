import React from "react";
import "./auth.css";
import axios from "axios";
import server from "./apple";

const Auth = ({handleState}) => {
  handleState();
  function ValidateName(inputText, id) {
    let doc = document.getElementById(id);
    if (inputText.length > 0) {
      doc.style.boxShadow = "none";

      return true;
    } else {
      //   alert("Name can't be blank"); //The pop up alert for an invalid email address
      doc.focus();
      doc.style.boxShadow = "0 0 5px red";
      return false;
    }
  }

  function ValidateEmail(inputText, id) {
    // var mailformat = /^\w+([\.-]?\w+)*@nitkkr.ac.in/;
    var mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   console.log(inputText);
    //   if (inputText.match(mailformat)) {
    let doc = document.getElementById(id);
    if (mailformat.test(inputText)) {
      doc.style.boxShadow = "none";
      return true;
    } else {
      //   alert("Email is incorrect format!"); //The pop up alert for an invalid email address
      doc.focus();
      doc.style.boxShadow = "0 0 5px red";
      return false;
    }
  }

  function validatePassword(inputText, id) {
    let doc = document.getElementById(id);
    if (inputText.length > 6) {
      doc.style.boxShadow = "none";
      return true;
    } else {
      //   alert("password should be more than 6 characters"); //The pop up alert for an invalid email address
      doc.focus();
      doc.style.boxShadow = "0 0 5px red";
      return false;
      return false;
    }
  }
  async function signup() {
    // Get input values from form fields and store them as variables
    let data = {
      name: document.getElementById("signName").value,
      email: document.getElementById("signEmail").value,
      password: document.getElementById("signPass").value,
    };
    if (
      ValidateName(data.name, "signName") &&
      ValidateEmail(data.email, "signEmail") &&
      validatePassword(data.password, "signPass")
    ) {

      let Server2 = server + "/signup";
      axios
        .post(Server2, data)
        .then((res) => {
          console.log(res.data);
          if (res.data == "sucess") {
            var userInfo = {
                id: data.email,
                name: data.name,
              };
            var date = new Date();
            date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
            document.cookie =
              `user=` +
              JSON.stringify(userInfo) +
              `; expires=` +
              date.toGMTString();
            alert("Account created successfully");
          } else {
            alert("User already exist ");
          }
        })
        .catch((err) => {
          alert(`Error creating account`);
          console.log(JSON.parse(res).message);
        });
    }

    // ***** this is a method to send data to server without axios *****//
    //     await fetch(server + "/signup", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ ...data }),
    //     }).then((response) => {
    //         console.log(response);
    //     }).then((responseData) => {
    //         console.log(responseData); // Process the response data
    //       })
    //       .catch((error) => {
    //         console.error(error); // Handle any errors that occur during the request
    //       });
  }

  async function login() {
    let data = {
      email: document.getElementById("logEmail").value,
      password: document.getElementById("logPass").value,
    };
    if (
      ValidateEmail(data.email, "logEmail") &&
      validatePassword(data.password, "logPass")
    ) {
      console.log(data);
      //   console.log(server);
      let Server2 = server + "/login";
      axios
        .post(Server2, data)
        .then((res) => {
          console.log(res.data);
          if (res.data.cat == "sucess") {
            var userInfo = {
                id: res.data.email,
                name: res.data.name,
              };
            var date = new Date();
            date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
            document.cookie =
              `user=` +
              JSON.stringify(userInfo) +
              `; expires=` +
              date.toGMTString();
              handleState();
            alert("Login Successfully");
          } else if (res.data.cat == "invalidpass") {
            alert("Wrong Password ");
          } else {
            alert("User does not exist");
          }
        })
        .catch((err) => {
          alert(`Error creating account`);
          console.log(JSON.parse(res).message);
        });
    }
  }
  return (
    <div>
      {/* This is the auth page. Please log in or sign up to access this content! */}

      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Log In</h4>
                          <div class="form-group">
                            <input
                              type="email"
                              name="logEmail"
                              class="form-style"
                              placeholder="Your Email"
                              id="logEmail"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="logPass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logPass"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" onClick={login} class="btn mt-4">
                            submit
                          </a>
                          <p class="mb-0 mt-4 text-center">
                            <a href="#0" class="link">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Sign Up</h4>
                          <div class="form-group">
                            <input
                              type="text"
                              name="signName"
                              class="form-style"
                              placeholder="Your Full Name"
                              id="signName"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-user"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="email"
                              name="signEmail"
                              class="form-style"
                              placeholder="Your Email"
                              id="signEmail"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="signPass"
                              class="form-style"
                              placeholder="Your Password"
                              id="signPass"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" onClick={signup} class="btn mt-4">
                            submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
