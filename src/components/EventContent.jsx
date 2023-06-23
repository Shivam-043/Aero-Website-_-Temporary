import { quotes , rcPlane } from "../assets";
import styles from "../style";


const EventsContent = ({ content, name, title }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-5 events-card w-[65vw] h-[100vh]">
    <div className={`justify-center`}>
      <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
      <h1 className={`${styles.heading1} text-center`}>{title}</h1>
    </div>
    
    <img src={rcPlane} alt={name} className="w-[30vw] h-[70%] rounded-full" />

    {/* <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div> */}
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

  </div>
);


export default EventsContent;
