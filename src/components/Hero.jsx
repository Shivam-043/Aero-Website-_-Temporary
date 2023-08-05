import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
// import RCPlaneCanvas from "./RCPlaneCanvas";
import DroneCanvas from "./Canvas/drone";
// import { BrowserRouter,Routes,Route } from "react-router-dom";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[40px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">National Institute Of Technology, Kurukshetra</span>{" "}
            {/* <span className="text-white">1 Month</span> Account */}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Aero <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Modelling</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">

          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {/* Designing and building the new models, rebuilding of the damaged models, flying the prepared models and ground pilot training to the budding pilots are the routine activities undertaken under the club. */}
        Welcome to the exhilarating world of aeromodelling! At the Aeromodelling Club of NIT Kurukshetra, we are passionate about all things flying. Whether you are a seasoned pilot or a curious beginner, our club provides the perfect platform to explore the fascinating realm of aviation and aerodynamics.
        Join us on an exciting journey filled with innovation, creativity, and adrenaline-pumping experiences. Let's take flight together!

        
        </p>
      </div>

      {/* <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}> */}
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
        {/* (props == "Drone" ) ? <Drone/> :  (props == "RCPlane" ) ? <RCPlaneCanvas/> :  */}
        <DroneCanvas/>
        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      {/* </div> */}

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
