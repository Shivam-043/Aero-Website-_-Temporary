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
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
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
