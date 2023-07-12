import React, { useState } from "react";

const blogData = [
  {
    title: "",
    asperts: "",
    content: "",
    data: {
      type1: {
        type: "Introduction",
        content:
          "There is no doubt that people find out who they really are when their backs are against the wall. Such was the case for Sara Owen, a single mother who found herself without the ability to make ends meet and provide for her three children. says Sara, who even found herself having to hide from her landlord on occasion. But everything changed when Sara decided that she was going to take her destiny into her own hands. I was thinking about investing in stocks for several years, but I could never find the courage to do it. Little did I know that I would turn $200 into $2000 in only a matter of days.",
      },
      type2: {
        type: "Content",
        content:
          "There is no doubt that people find out who they really are when their backs are against the wall. Such was the case for Sara Owen, a single mother who found herself without the ability to make ends meet and provide for her three children. says Sara, who even found herself having to hide from her landlord on occasion. But everything changed when Sara decided that she was going to take her destiny into her own hands. I was thinking about investing in stocks for several years, but I could never find the courage to do it. Little did I know that I would turn $200 into $2000 in only a matter of days.",
      },
      type3: {
        type: "Conclusion",
        content:
          "There is no doubt that people find out who they really are when their backs are against the wall. Such was the case for Sara Owen, a single mother who found herself without the ability to make ends meet and provide for her three children. says Sara, who even found herself having to hide from her landlord on occasion. But everything changed when Sara decided that she was going to take her destiny into her own hands. I was thinking about investing in stocks for several years, but I could never find the courage to do it. Little did I know that I would turn $200 into $2000 in only a matter of days.",

      },
    },
  },
];

const BlogTemp = () => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleWishlistClick = () => {
    setIsInWishlist(!isInWishlist);
  };

  return (

    
    <div className="bg-primary relative">
      {blogData.map((data) => (
        <div key={data.data.type1.content}>
          <div className=" flex place-content-center">
        <div className="relative">
          <img
            src="https://cdn.osxdaily.com/wp-content/uploads/2014/03/cosmos-space-wallpaper-6.jpg"
            alt=""
            className="w-[80vw] h-[80vh] rounded-xl xs1:w-[90vw] xs1:h-[60vh]"
          />
          <div className="relative">
            <h1 className="absolute text-white bottom-[10vh] left-5 text-[40px] font-poppins font-semibold xs1:text-[30px]">
              Cosmos Detail
            </h1>
            <div className="flex absolute bottom-[6vh] left-5 ">
              <h3 className=" text-white font-poppins text-[20px] mr-5 xs1:mr-3 xs1:text-[15px]">
                25 Jun 2021
              </h3>
              <h3 className=" text-white font-poppins text-[20px] xs1:text-[15px]">
                {" "}
                Cosmos
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Introduction flex ">
          <p className="w-1/6 blog-section-text xs1:pt-[10vh] pt-[5vh] md1:blog-section-text-lg text-[20px] font-bold align-center">
            {data.data.type1.type}
          </p>
          <p className={`w-3/4 first-word-uppercase-p pt-[5vh] pb-[5vh] text-white font-poppins xs1:my-3 font-normal text-[15px] xs1:mx-5`}>
            {data.data.type1.content}
          </p>
        </div>
        <div className="Introduction flex">
          <p className="w-1/6 blog-section-text xs1:pt-[10vh]  text-[20px] font-bold">
          {data.data.type2.type}
          </p>
          <p class=" w-3/4  text-white font-poppins mb-3 font-normal pb-[5vh] text-[15px] xs1:mx-5">
          {data.data.type2.content}
          </p>
        </div>
        <div className="Introduction flex">
          <p className="w-1/6 blog-section-text xs1:pt-[10vh] text-[20px] font-bold">
          {data.data.type3.type}
          </p>
          <p class=" w-3/4  text-white font-poppins mb-3 font-normal text-[15px] xs1:mx-5">
            {data.data.type3.content}
          </p>
        </div>
      </div>
      <div className="justify-items-center grid">
        <div className="h-[10vh] pt-5 mb-5 flex justify-around mt-5 bg-black-gradient w-[90vw] rounded-lg">
          <p className="text-white flex">Add to Wishlist</p>
          <div onClick={handleWishlistClick}>
            {isInWishlist ? (
              <svg
                width="32px"
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
                </g>
              </svg>
            ) : (
              <svg
                width="32px"
                fill="#ff0d13"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ff0d13"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>
        </div>
      ))}

      
    </div>
  );
};

export default BlogTemp;
