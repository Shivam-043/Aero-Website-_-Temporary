import React from "react";
import styles from "../style";
import Testimonials from "./Testimonials";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Blogs = () => {
  return (
    <div className={`bg-primary w-full overflow-hidden items-center`}>
        <h1 className={`${styles.heading2} ${styles.paddingX}`}>
            AeroModelling BlogPost
        </h1>
      <div
        className={`${styles.boxWidth}  ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
