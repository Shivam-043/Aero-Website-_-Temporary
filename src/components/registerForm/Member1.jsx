import React from "react";
import Button from "../Button";

const member = ({ memberNumber, prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    if (validateform()) {
      nextStep();
    }
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  function validateform() {
    if (
      validateName() &&
      validatemobileNumber() &&
      validateAge() &&
      validateEmail() &&
      validateCollegeName() &&
      validateAddress()
    ) {
      return true;
    } else return false;
  }

  function validateName() {
    var doc = document.getElementById("name");
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
    var doc = document.getElementById("mobNum");
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
  function validateAge() {
    var doc = document.getElementById("age");
    let teamName = doc.value.trim();
    if (teamName.length > 0) {
      var regex = /^(?:1[6-9]|[2-9][0-9]|100)$/; //regex to
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
  function validateCollegeName() {
    var doc = document.getElementById("college");
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
  function validateAddress() {
    var doc = document.getElementById("address");
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

  return (
    <div>
      <h1 className="text-white justify-center text-2xl poppins m-2px p-2px">
        Team-Member {memberNumber}:
      </h1>
      <div className="w-auto flex flex-col ">
        <label className="input">
          <input
            className={`input__field`}
            type="text"
            id="name"
            placeholder="Full Name"
            value={values.team.team_member[memberNumber - 1].member_name}
            onChange={handleChange("member_name")}
            required
          />
          <span className="input__label ">Full Name</span>
        </label>
        <label className="input">
          <input
            className="input__field"
            id="mobNum"
            type="tel"
            placeholder="Contact Number"
            value={values.team.team_member[memberNumber - 1].member_mob}
            onChange={handleChange("member_mob")}
            required
          />
          <span className="input__label">Contact Number</span>
        </label>
        <label className="input">
          <input
            className="input__field"
            id="age"
            type="number"
            min={16}
            placeholder="Enter Age"
            value={values.team.team_member[memberNumber - 1].member_age}
            onChange={handleChange("member_age")}
            required
          />
          <span className="input__label">Enter Age</span>
        </label>
        <label className="input">
          <input
            className="input__field"
            id="email"
            type="email"
            placeholder="Member Email"
            value={values.team.team_member[memberNumber - 1].member_email}
            onChange={handleChange("member_email")}
            required
          />
          <span className="input__label">Member Email</span>
        </label>
        <label className="input">
          <input
            className="input__field"
            id="college"
            type="Text"
            placeholder="College Name"
            value={values.team.team_member[memberNumber - 1].member_college}
            onChange={handleChange("member_college")}
            required
          />
          <span className="input__label">College Name</span>
        </label>
        <label className="input">
          <textarea
            className="input__field"
            id="address"
            type="text"
            placeholder="Address"
            value={values.team.team_member[memberNumber - 1].member_address}
            onChange={handleChange("member_address")}
            rows="2"
          ></textarea>
          <span className="input__label">Address</span>
        </label>
      </div>

      <div>
        <div className="absolute left-10 bottom-10">
          <Button title={"Prev"} py="py-3" px="px-5" onClick={Previous} />
        </div>
        <div className="absolute right-10 bottom-10">
          <Button
            title={memberNumber < values.team.team_size ? "Next" : "submit"}
            py="py-3"
            px="px-5"
            onClick={Continue}
          />
        </div>
      </div>
    </div>
  );
};

export default member;
