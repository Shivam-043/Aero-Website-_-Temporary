import React from "react";
import Button from "../Button";

const TeamSignup = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    // if(validateform()){
      nextStep();
    // }
  };
  // function validateform() {

  // }

  return (
    <div>
      <h1 className="text-white justify-center text-2xl poppins m-2px p-2px">
        Register Team:
      </h1>
      <div className="w-auto flex flex-col ">
        <label className="input ">
          <input
            className="input__field "
            type="text"
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
