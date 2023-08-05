import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from ".";
import Achievements from "./achievements";
import SeniorCard from "./seniorCard";
import Suggestion from "./Suggestion";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Business />
        <Billing props = {0}/>
        <CardDeal />
        {/* <Testimonials /> */}
        <Billing props = {1}/>
        {/* <Clients /> */}
        <Testimonials />
        <CTA />
        <Footer />

        {/* <Achievements />
        <SeniorCard /> */}
        {/* <Suggestion/> */}
      </div>
    </div>
  </div>
);

export default App;
