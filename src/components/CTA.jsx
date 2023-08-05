import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's Ready to participate in Tech Fest Events</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        
      </p>
    </div>
   
    <div className="flex justify-end w-full">
    <Button title={"Know More"} py="py-3" px="px-5" />
    </div>
  </section>
);

export default CTA;
