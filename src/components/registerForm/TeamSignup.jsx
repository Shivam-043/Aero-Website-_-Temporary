import React from "react";
import Button from "../Button";

const TeamSignup = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    if (validateform()) {
      nextStep();
    }
  };
  function validateform() {
    if (
      validateTeamName() &&
      validateTeamLeaderName() &&
      validatemobileNumber() &&
      validateEmail() &&
      validateamSize()
    ) {
      return true;
    } else return false;
  }
  function validateTeamName() {
    var doc = document.getElementById("teamName");
    let teamName = doc.value.trim();
    if (teamName.length > 0) {
      var regex = /^[a-zA-Z][a-zA-Z0-9 ]+$/; //regex to
      // console.log(regex.test(teamName));
      if (regex.test(teamName)) {
        doc.style.borderColor = "";
        return true;
      }
    }
    doc.focus();
    doc.style.borderColor = "red";
    return false;
  }
  function validateTeamLeaderName() {
    var doc = document.getElementById("leaderName");
    let teamName = doc.value.trim();
    if (teamName.length > 0) {
      var regex = /^[a-zA-Z][a-zA-Z0-9 ]+$/; //regex to
      // console.log(regex.test(teamName));
      if (regex.test(teamName)) {
        doc.style.borderColor = "";
        return true;
      }
    }
    doc.focus();
    doc.style.borderColor = "red";
    return false;
  }
  function validatemobileNumber() {
    var doc = document.getElementById("mobileNum");
    let teamName = doc.value.trim();
    if (teamName.length > 0) {
      var regex = /^[0-9]{10}$/; //regex to
      // console.log(regex.test(teamName));
      if (regex.test(teamName)) {
        doc.style.borderColor = "";
        return true;
      }
    }
    doc.focus();
    doc.style.borderColor = "red";
    return false;
  }
  function validateEmail() {
    var doc = document.getElementById("email");
    let teamName = doc.value.trim();
    if (teamName.length > 0) {
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex to
      // console.log(regex.test(teamName));
      if (regex.test(teamName)) {
        doc.style.borderColor = "";
        return true;
      }
    }
    doc.focus();
    doc.style.borderColor = "red";
    return false;
  }
  function validateamSize() {
    var doc = document.getElementById("teamSize");
    let teamName = doc.value.trim();
    if (teamName.length > 0) {
      var regex = /^[0-9]$/; //regex to
      // console.log(regex.test(teamName));
      if (regex.test(teamName)) {
        doc.style.borderColor = "";
        return true;
      }
    }
    doc.focus();
    doc.style.borderColor = "red";
    return false;
  }

  return (
    <div className="">
      <h1 className="text-white justify-center text-2xl poppins m-2px p-2px">
        Register Team:
      </h1>
      <div className="w-auto flex flex-col ">
        <label className="input ">
          <input
            className="input__field "
            type="text"
            id="teamName"
            placeholder="Team Name"
            value={values.team.team_name}
            onChange={handleChange("team_name")}
            required
          />
          <span className="input__label ">Team Name</span>
        </label>
        <label className="input">
          <input
            className="input__field"
            type="text"
            id="leaderName"
            placeholder="Team Leader Name"
            value={values.team.team_leader_name}
            onChange={handleChange("team_leader_name")}
            required
          />
          <span className="input__label">Team Leader Name</span>
        </label>
        <label className="input">
          <input
            className="input__field"
            type="tel"
            id="mobileNum"
            placeholder="Team Mobile Number"
            value={values.team.team_mob}
            onChange={handleChange("team_mob")}
            required
          />
          <span className="input__label">Team Mobile Number</span>
        </label>
        <label className="input">
          <input
            className="input__field"
            type="email"
            id="email"
            placeholder="Team Email"
            value={values.team.team_email}
            onChange={handleChange("team_email")}
            required
          />
          <span className="input__label">Team Email</span>
        </label>
        <label className="input">
          <input
            className="input__field"
            type="number"
            min="1"
            id="teamSize"
            placeholder="Team Size"
            value={values.team.team_size}
            onChange={handleChange("team_size")}
            required
          />
          <span className="input__label">Team Size</span>
        </label>
        <label className="input">
          <textarea
            className="input__field h-auto"
            type="text"
            id="about"
            placeholder="About Your Team"
            value={values.team.team_about}
            onChange={handleChange("team_about")}
            rows="2"
          ></textarea>
          <span className="input__label">About Your Team</span>
        </label>
      </div>

      <div>
        <div className="absolute right-10 bottom-10">
          <Button title={"Next"} py="py-3" px="px-5" onClick={Continue} />
        </div>
      </div>
    </div>
  );
};

export default TeamSignup;
