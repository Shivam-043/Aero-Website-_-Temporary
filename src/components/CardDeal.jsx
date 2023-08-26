import { card , drone} from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import RCPlaneCanvas from "./RCPlaneCanvas";
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Aerial precision<br className="sm:block hidden" />captivating perspectives
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Embrace the cutting-edge technology of drone flying and explore the limitless possibilities of this rapidly evolving field. At our club, you'll have the opportunity to immerse yourself in the world of drones, from entry-level quadcopters to advanced multi-rotor systems. Learn the principles of flight control, navigation, and aerial photography. Our experienced instructors will guide you through the intricacies of drone operation, safety measures, and the legal aspects of flying.

      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={drone} alt="billing" className="w-[100%] h-[100%]" />
    </div>
    {/* <RCPlaneCanvas/> */}

  </section>
);

export default CardDeal;
