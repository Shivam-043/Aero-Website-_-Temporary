import React from "react";
// import './teams.css';
import SeniorCard from "../components/seniorCard";
import { team } from "../constants/index";
import Footer from "../components/Footer";

const Teams = () => {
  return (
    <>
      <div className="bg-primary justify-content-center flex-col  align-center m-0 p-0  ">
        {team.map((team) => (
          <div key={team.teamName} className={`flex-col ss:my-0 my-4`}>
            <div className="container flex justify-center mx-auto pt-16">
              <div>
                <p className="text-white text-[40px] text-center font-normal pb-3">
                  {team.teamName}
                </p>
                <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                  The Talented People Behind the Scenes of the Society
                </h1>
              </div>
            </div>

            <div className="w-full px-10 pt-10">
              <div className="container mx-auto">
                <div className="lg:flex md:flex sm:flex items-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around">
                  {team.memberDetail.map((detail, index) => (
                    <SeniorCard {...detail} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="px-5">
          <SeniorCard />
        </div>
        <div className="px-5">
          <SeniorCard />
        </div>
        <div className="px-5">
          <SeniorCard />
        </div> */}
      </div>
      <Footer/>
    </>
  );
};

export default Teams;
