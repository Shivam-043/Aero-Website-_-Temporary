import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Achievements from "./components/achievements";
import SeniorCard from "./components/seniorCard";

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
        <CTA />
        <Footer />

        <Achievements />
        <SeniorCard />
      </div>
    </div>
  </div>
);

export default App;
