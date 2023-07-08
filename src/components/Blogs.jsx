import React , {useState , useEffect} from "react";
import axios from "axios";
import styles from "../style";
import Testimonials from "./Testimonials";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import EventsCard from "./EventsCard";
import PostCard from "../Blog/PostCard";

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
    <div className={`bg-primary w-full overflow-hidden items-center`}>
        <h1 className={`${styles.heading2} ${styles.paddingX}`}>
            AeroModelling BlogPost
        </h1>
      <div
        className={`${styles.boxWidth}  ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className="flex flex-wrap sm1:justify-start justify-center w-full feedback-container relative z-[1]">
          {blogPosts.map((card) => (
            <PostCard key={card.id} {...card} />
          ))}
        </div>

{/* {blogPosts.map(post => (
        <div key={post._id}>
          <h2 className="text-white">{post.title}</h2>
          <p className="text-white">{post.content}</p>
        </div>
      ))} */}
      </div>
    </div>

  );
};

export default Blogs;
