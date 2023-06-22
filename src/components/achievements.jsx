import React from "react";
import styles, { layout } from "../style";
import { achievement } from "../constants";


function AchievementsImg(){
        const listItems = achievement.map(achievement =>
            <li key={achievement.id}>
              <img className="sm:w-[20vw] sm:w-[15vw] w-[20vw] h-[15vw]"
                src={achievement.logo}
                // alt={ac.name}
              />
              <p className={`${styles.paragraph}`}>
                <b>{achievement.id}</b>
                  {' ' + achievement.id + ' '}
                  known for {achievement.id}
              </p>
            </li>
          );
    return <ul className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 sm:flex sm:flex-row flex-col flex-auto`}>{listItems}</ul>;
}


const Achievements = () => {
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Achievement By Our Club </h2>
        <p className={`${styles.paragraph } w-[60vw]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet officia et ut eum fuga atque aut nihil rem, magnam, similique modi ab, in accusantium blanditiis? Minima facere deserunt tempore maxime.</p>
      <div className={`flex-1 ${styles.flexCenter}`}><AchievementsImg /></div>
      </div>
        

    </section>
  );
};


export default Achievements;
