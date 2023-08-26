import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style";
import axios from "axios";


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

const BlogPost = () => {
  const { id } = useParams();
  const [blogPostData, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleWishlistClick = () => {
    setIsInWishlist(!isInWishlist);
  };

  const [imageColor, setImageColor] = useState('');


  useEffect(() => {
    console.log("Shivam");
    const fetchBlogPost = async () => {
      try {
        console.log("Called");
        const response = await fetch(
          `http://localhost:3000/api/blogposts/${id}`
        );
        const data = await response.json();
        setBlog(data);
        setIsLoading(false);
        console.log(blogPostData);
      } catch (error) {
        console.log(error);
      }

    };

    const fetchColor = async () =>{
      const image = new Image();
      image.src = blogPostData.image;
  
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
  
        const imageData = ctx.getImageData(0, 0, image.width, image.height).data;
        let brightnessSum = 0;
  
        for (let i = 0; i < imageData.length; i += 4) {
          const red = imageData[i];
          const green = imageData[i + 1];
          const blue = imageData[i + 2];
          const brightness = (red + green + blue) / 3;
  
          brightnessSum += brightness;
        }
  
        const averageBrightness = brightnessSum / (imageData.length / 4);
        const textColor = averageBrightness < 128 ? 'white' : 'black';
  
        setImageColor(textColor);
    }
  };

    fetchBlogPost().then(() =>{fetchColor();});
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!blogPostData) {
    return <div>Error occurred while fetching data</div>;
  }

  const code = `<p>
  ${blogPostData.content}
</p>`;
  return (

          <div className="bg-primary relative">
            <div >
              <div className=" flex place-content-center">
            <div className="relative opacity-80">
              <img
                src={blogPostData.image}
                alt=""
                className="w-[80vw] h-[80vh] rounded-xl xs1:w-[90vw] xs1:h-[60vh]"
              />
              <div className="relative">
                <h1 className={`absolute text-${imageColor} bottom-[10vh] left-5 text-[40px] font-poppins font-semibold xs1:text-[30px]`}>
                {blogPostData.title == null ? "Cosmos Detailing" : blogPostData.title}
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
              <p className="w-1/6 blog-section-text xs1:pt-[10vh] pt-[5vh] text-[20px] font-bold align-center xs1:blog-section-text ">
                Introduction
              </p>
              <p dangerouslySetInnerHTML={{ __html: blogPostData.intro }} className={`w-3/4 first-word-uppercase-p pt-[5vh] pb-[5vh] text-white font-poppins xs1:my-3 font-normal text-[15px] xs1:mx-5`}>
              {/* {blogPostData.content == null
                ? "There is no doubt that people find out who they really are when their backs are against the wall. Such was the case for Sara Owen, a single mother who found herself without the ability to make ends meet and provide for her three children. says Sara, who even found herself having to hide from her landlord on occasion. But everything changed when Sara decided that she was going to take her destiny into her own hands."
                : blogPostData.content} */}

              </p>
            </div>
            <div className="Introduction flex pt-[5vh]">
              <p className="w-1/6 blog-section-text xs1:pt-[5vh]  text-[20px] font-bold">
              Content
              </p>
              <p dangerouslySetInnerHTML={{ __html: blogPostData.content }} class=" w-3/4  text-white font-poppins mb-3 font-normal pb-[5vh] text-[15px] xs1:mx-5">
              {/* {blogPostData.content == null
                ? "There is no doubt that people find out who they really are when their backs are against the wall. Such was the case for Sara Owen, a single mother who found herself without the ability to make ends meet and provide for her three children. says Sara, who even found herself having to hide from her landlord on occasion. But everything changed when Sara decided that she was going to take her destiny into her own hands."
                : blogPostData.content} */}
              </p>
            </div>
            <div className="Introduction flex pt-[5vh]">
              <p className="w-1/6 blog-section-text xs1:pt-[5vh] text-[20px] font-bold">
              Conclusion
              </p>
              <p dangerouslySetInnerHTML={{ __html: blogPostData.conclusion }} class=" w-3/4  text-white font-poppins mb-3 font-normal text-[15px] xs1:mx-5">
              {/* {blogPostData.content == null
                ? "There is no doubt that people find out who they really are when their backs are against the wall. Such was the case for Sara Owen, a single mother who found herself without the ability to make ends meet and provide for her three children. says Sara, who even found herself having to hide from her landlord on occasion. But everything changed when Sara decided that she was going to take her destiny into her own hands."
                : blogPostData.content} */}
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
    
          
        </div>
  );
};

export default BlogPost;
