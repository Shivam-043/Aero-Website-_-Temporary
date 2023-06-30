import React, { Component } from 'react'
import Member1 from './Member1';
import Member2 from './Member2';
import Member3 from './Member3';
import Member4 from './Member4';
import Member5 from './Member5';
import Success from './Success';
import TeamSignup from './TeamSignup';


export default class Signup extends Component {
  state = {
    step: 1,
    team_name: "",
    team_leader_name: "",
    team_mob: "",
    team_email: "",
    team_size: "",
    team_about: "",

    member1_name: "",
    member1_roll_number: "",
    member1_mob: "",
    member1_gender: "",
    member1_email: "",
    member1_age: "",
    member1_college_name: "",
    member1_address: "",

    member2_name: "",
    member2_roll_number: "",
    member2_mob: "",
    member2_gender: "",
    member2_email: "",
    member2_age: "",
    member2_college_name: "",
    member2_address: "",

    member3_name: "",
    member3_roll_number: "",
    member3_mob: "",
    member3_gender: "",
    member3_email: "",
    member3_age: "",
    member3_college_name: "",
    member3_address: "",

    member4_name: "",
    member4_roll_number: "",
    member4_mob: "",
    member4_gender: "",
    member4_email: "",
    member4_age: "",
    member4_college_name: "",
    member4_address: "",

    member5_name: "",
    member5_roll_number: "",
    member5_mob: "",
    member5_gender: "",
    member5_email: "",
    member5_age: "",
    member5_college_name: "",
    member5_address: ""

  }
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { team_name, team_leader_name, team_mob, team_email, team_size, team_about,
      member1_name,
      member1_roll_number,
      member1_mob,
      member1_gender,
      member1_email,
      member1_age,
      member1_college_name,
      member1_address,
      member2_name,
      member2_roll_number,
      member2_mob,
      member2_gender,
      member2_email,
      member2_age,
      member2_college_name,
      member2_address,
      member3_name,
      member3_roll_number,
      member3_mob,
      member3_gender,
      member3_email,
      member3_age,
      member3_college_name,
      member3_address,
      member4_name,
      member4_roll_number,
      member4_mob,
      member4_gender,
      member4_email,
      member4_age,
      member4_college_name,
      member4_address,
      member5_name,
      member5_roll_number,
      member5_mob,
      member5_gender,
      member5_email,
      member5_age,
      member5_college_name,
      member5_address
    } = this.state;
    const values = {
      team_name, team_leader_name, team_mob, team_email, team_size, team_about,
      member1_name,
      member1_roll_number,
      member1_mob, member1_gender,
      member1_email,
      member1_age,
      member1_college_name,
      member1_address,
      member2_name,
      member2_roll_number,
      member2_mob,
      member2_gender,
      member2_email,
      member2_age,
      member2_college_name,
      member2_address,
      member3_name,
      member3_roll_number,
      member3_mob,
      member3_gender,
      member3_email,
      member3_age,
      member3_college_name,
      member3_address,
      member4_name,
      member4_roll_number,
      member4_mob,
      member4_gender,
      member4_email,
      member4_age,
      member4_college_name,
      member4_address,
      member5_name,
      member5_roll_number,
      member5_mob,
      member5_gender,
      member5_email,
      member5_age,
      member5_college_name,
      member5_address
    }

    switch (step) {
      case 1:
        return (
          <TeamSignup nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        )
      case 2:
        return (
          <Member1 prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        )
      case 3:
        return (
          <Member2 prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        )
      case 4:
        return (
          <Member3 prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />)
      case 5:
        return (
          <Member4 prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />)
      case 6:
        return (
          <Member5 prevStep={this.prevStep} nextStep={this.nextStep} values={values} />)
      case 7:
        return (
          <Success />)
      // never forget the default case, otherwise VS code would be mad!
      default:
      // do nothing
    }
    return (
      <div>
        Register
      </div>
    )

  }
}


