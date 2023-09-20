import styles from "../style";
import { logo , aeroLogo} from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { Link } from "react-router-dom";


const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-between mr-10">
        {/* <div>
          <p>Aero Modelling</p>
        </div> */}
        <div className="justify-center items-center flex flex-row"> <img src={aeroLogo} alt="AeroModelling Club" className="w-[100px] h-[100px]" />
      <h3 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[30px] text-white ss:leading-[20px] leading-[20px]">
            Aero{" "}
            <span className="text-gradient hover:text-red-500">Modelling</span>{" "}
          </h3></div>
        
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
        National Institute of Technology, Kurukshetra.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (

                <Link to={`/${link.link}`}>
                  <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
                </Link>
                
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 Aero Modelling | NIT KKR. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
