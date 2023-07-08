import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style";
import axios from "axios";

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const { isdataLoading, dataLoading } = useState < Boolean > true;

  useEffect(() => {
    console.log("Printed");
    // Fetch blog posts from the server
    fetch(`http://localhost:3000/api/blogposts/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setBlogPost(response);

        console.log(blogPost._id);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dataLoading(true);
      });
  }, []);
  if(isdataLoading) return(<div className="text-black">Loading....</div>)

  return (
    // <div className='bg-primary'>
    //     <img src={blogPost.image} alt="" className='w-[80vw] h-[80vh]' />
    //           <h1 className={`${styles.heading1} text-white` }>{blogPost.title}</h1>
    // </div>
    <div className="bg-primary relative">
      <div className=" flex place-content-center">
        <div className="relative">
          <img
            src={blogPost.image}
            alt=""
            className="w-[80vw] h-[80vh] rounded-xl"
          />
          <div className="relative">
            <h1 className="absolute text-white bottom-[10vh] left-5 text-[40px] font-poppins font-semibold">
              {blogPost.title == null ? "Cosmos Detailing" : blogPost.title}
            </h1>
            <div className="flex absolute bottom-[6vh] left-5 ">
              <h3 className=" text-white font-poppins text-[20px] mr-5">
                25 Jun 2021
              </h3>
              <h3 className=" text-white font-poppins text-[20px]"> Cosmos</h3>
            </div>
          </div>
        </div>
      </div>

      <p class="first-word-uppercase-p text-white font-poppins my-10 mx-20 font-normal text-[20px]">
        {blogPost.content == null
          ? "There is no doubt that people find out who they really are when their backs are against the wall. Such was the case for Sara Owen, a single mother who found herself without the ability to make ends meet and provide for her three children. says Sara, who even found herself having to hide from her landlord on occasion. But everything changed when Sara decided that she was going to take her destiny into her own hands."
          : blogPost.content}
      </p>
    </div>
  );
};

export default BlogPost;
