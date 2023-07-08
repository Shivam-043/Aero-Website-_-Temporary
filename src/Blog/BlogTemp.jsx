import React from "react";

const BlogTemp = () => {
  return (
    <div className="bg-primary relative">
      <div className=" flex place-content-center">
        <div className="relative">
          <img
            src="https://cdn.osxdaily.com/wp-content/uploads/2014/03/cosmos-space-wallpaper-6.jpg"
            alt=""
            className="w-[80vw] h-[80vh] rounded-xl"
          />
          <div className="relative">
            <h1 className="absolute text-white bottom-[10vh] left-5 text-[40px] font-poppins font-semibold">
              Cosmos Detail
            </h1>
            <div className="flex absolute bottom-[6vh] left-5 ">
                <h3 className=" text-white font-poppins text-[20px] mr-5">25 Jun 2021</h3>
                <h3 className=" text-white font-poppins text-[20px]"> Cosmos</h3>
            </div>
            
          </div>
        </div>
      </div>

      <p class="first-word-uppercase-p text-white font-poppins my-10 mx-20 font-normal text-[20px]">
        There is no doubt that people find out who they really are when their
        backs are against the wall. Such was the case for Sara Owen, a single
        mother who found herself without the ability to make ends meet and
        provide for her three children. "I wasn't broke, but times were tough,"
        says Sara, who even found herself having to hide from her landlord on
        occasion. But everything changed when Sara decided that she was going to
        take her destiny into her own hands. "I was thinking about investing in
        stocks for several years, but I could never find the courage to do it.
        Little did I know that I would turn $200 into $2000 in only a matter of
        days.
      </p>
    </div>
  );
};

export default BlogTemp;
