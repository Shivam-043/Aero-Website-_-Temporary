import React from "react";
import { techspardhabg2 } from "../assets";
import styles from "../style";
import { Link} from 'react-router-dom';

const PostCard = ({ _id , content, name, title, image ,asperts}) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card" >
      <img
        src={image}
        alt="double_quotes"
        className="rounded-lg w-[100vw] h-[20vh]"

      />
      <h1 className={`text-3xl text-white font-semibold font-poppins content-center justify-center`}>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: asperts }} className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-5 xs1:w-[80vw]">
        
      </p>

      <div className="flex flex-row justify-stretch justify-around">
        <div className="flex flex-row"> 
          <img
            src={image}
            alt={name}
            className="w-[48px] h-[48px] rounded-full"
          />
          <div className="flex flex-col ml-4">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              {name}
            </h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              {title}
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-poppins font-semibold text-[15px] leading-[32px] text-white">Time</h1>
          <Link to={`/api/blogposts/${_id}`}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
