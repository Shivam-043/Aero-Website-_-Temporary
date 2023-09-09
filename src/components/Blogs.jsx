import React , {useState , useEffect} from "react";
import axios from "axios";
import styles from "../style";

import PostCard from "../Blog/PostCard";
import Footer from "./Footer";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the server
    axios.get('http://localhost:3000/api/blogposts')
      .then(response => {
        setBlogPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div className={`bg-primary w-full overflow-hidden items-center px-5`}>
        <h1 className={`${styles.heading2} ${styles.paddingX}`}>
            AeroModelling BlogPost  <br/>
            coming soon ......
        </h1>
      <div
        className={`${styles.boxWidth}  ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className="flex flex-wrap xs1:justify-start justify-center w-full feedback-container relative z-[1] xs1:flex-nowrap xs1:scroll-smooth xs1:overflow-x-auto">
          {blogPosts.map((card) => (
            <PostCard key={card.id} {...card} />
          ))}


          
        </div>
      </div>

      <Footer/>
    </div>

  );
};

export default Blogs;
