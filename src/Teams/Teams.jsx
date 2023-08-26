import React from "react";
import SeniorCard from "../components/seniorCard";
import { team } from "../constants/index";

const Teams = () => {
  return (
    <div className="bg-primary justify-items-center flex mx-10 flex-shrink-0">
      {/* {team.map((team) => {
        <div
          key={team.teamName}
          className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
        >
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            {team.teamName}
          </h4>

          <ul className="list-none mt-4">
            {team.memberDetail.map((detail , index) => (
              <li
                key={detail.name}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                  index !== detail.length - 1 ? "mb-4" : "mb-0"
                }`}
              >
              </li>
            ))}
          </ul>
        </div>;
      })} */}

      <div className="px-5">
        <SeniorCard />
      </div>
      <div className="px-5">
        <SeniorCard />
      </div>
      <div className="px-5">
        <SeniorCard />
      </div>
      <div className="px-5">
        <SeniorCard />
      </div>

      
    </div>
  );
};

export default Teams;
