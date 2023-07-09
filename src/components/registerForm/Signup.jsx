import React, { Component } from "react";
import Member1 from "./Member1";
import Member2 from "./Member2";
import Member3 from "./Member3";
import Member4 from "./Member4";
import Member5 from "./Member5";
import Success from "./Success";
import TeamSignup from "./TeamSignup";

export default class Signup extends Component {
  state = {
    step: 1,
    team: new Team(),
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const len=this.state.team.team_member.length+1;
    const { step } = this.state;
    if(step<len){
      this.setState({ step: step + 1 });
    }
    else if(step===len){
      var temp=this.state.team;
      let val =temp.team_size+1;
      if(step<=temp.team_size){
        temp.team_member[step-1]=new Member();
        this.setState({team:temp});
        this.setState({ step: step + 1 });
      }
      else{
        console.log(temp);
        alert("Team Created Successfully");
      }
    }
  };

  handleChange = (input) => (e) => {
    // console.log(input.value);
    let abc=this.state.team;
    abc[input]=e.target.value;
    this.setState({team:abc});
    // this.setState({ [input]: e.target.value });
  };
  handleChangeMember = (input) => (e) => {
    // console.log(input.value);
    const { step } = this.state;
    let abc=this.state.team;
    abc.team_member[step-2][input]=e.target.value;
    this.setState({team:abc});
    // this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      team,
    } = this.state;
    const values = {
      team,
    };

    if(step==1){
      return (
        <TeamSignup
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      );
    }
    else{
      return (
        <Member1
            memberNumber={step-1}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChangeMember}
            values={values}
          />
      );
    }
  }
}

class Team {
  constructor() {
    this.team_name = "";
    this.team_leader_name = "";
    this.team_mob = "";
    this.team_email = "";
    this.team_size = 1;
    this.team_about = "";
    this.team_member = [];
  }
}

class Member {
  constructor() {
    this.member_name = "";
    this.member_roll_number = "";
    this.member_mob = "";
    this.member_gender = "";
    this.member_email = "";
    this.member_age = "";
    this.member_college = "";
    this.member_address = "";
  }
}
