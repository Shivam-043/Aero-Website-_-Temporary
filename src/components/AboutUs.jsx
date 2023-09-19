import React from "react";
import styles from "../style";
import { droneframe, planeframe } from '../assets'
import Footer from "./Footer";

const AboutUs = () => {
    return (
        <div className="h-auto w-full p-4 bg-primary absolute xs1:grid xs1:grid-cols-1 xs1:gap-x-4 xs1:gap-y-24 xs1:justify-around xs1:row-span-16 xs1:place-content-evenly">
            <div className="h-[400px] w-full flex flex-row xs1:flex-col-reverse m-4 lg:pl-[100px] lg:gap-[200px] xs1:py-16 relative xs1:top-80 lg:">
                <img className="sm:h-[400px] h-[300px] lg:w-[400px] w-[300px]  my-4  p-8" src={droneframe} alt="" />
                <div className="h-[400px]  w-[600px] xs1:w-[90vw]  my-4 lg:mx-16 xs1:m-0 sm:p-8 xs1:p-2  xs1:relative right-10 xs1:right-0">
                    <h1 className="text-4xl py-1 sm:my-4 font-semibold ">About Us</h1>
                    <p className="text-xl py-1 poppins sm:pl-16">The Aeromodelling Club at NITK is a student organization dedicated to the design, construction, and flight of model aircraft. We are a diverse group of students with a passion for aviation, and we welcome all interested students to join us.</p>
                </div>
            </div>

            <div className="h-[400px] w-full flex flex-row xs1:flex-col ss:mb-28 sm:my-10 xs1:mx-0 xs1:my-16 relative xs1:py-16 lg:pr-[50px] lg:gap-[300px] lg:mt-[60px]">
                <div className="h-[400px]  w-[600px] xs1:w-[90vw]  my-4 xs1:m-4 p-8 xs1:p-2 right-10 xs1:right-0 xs1:mx-0 lg:pl-[120px]">
                    <h1 className="text-4xl py-1 my-4 font-semibold	">Our History</h1>
                    <p className="text-xl py-1 poppins lg:pl-16">Our club was founded in 2007 by Kamal Kant Gaur and co-founded by flying enthusiasts Dipesh, Rupesh, and Suman. Under the able guidance of Dr. G.L. Pahuja, the club has come a long way since then. We have a strong track record of success in competitions, and our events are always popular at the college's annual techfest, Techspardha.</p>
                </div>
                <img className="sm:h-[400px] h-[300px] sm:w-[400px] w-[300px]  my-4 p-8 md:absolute lg:relative md:right-10 xs1:mx-0" src={planeframe} alt="" />
            </div>

            <div className=" h-[1000px] w-full flex md:flex-row md:h-[600px] lg:gap-[100px] flex-col m-4 xs1:mx-4 xs1:mb-16 xs1:mt-48 xs1:pt-32 lg:mt-[100px]">
                <img className="sm:h-[400px] h-[300px] w-[300px] sm:w-[400px]  mx-8  xs1:my-0 p-8 relative left-10 xs1:left-0 xs1:top-20 xs1:mx-0 xs1:mb-14" src={droneframe} alt="" />
                <div className="h-[600px] lg:w-[800px] w-[600px] xs1:w-[90vw]  my-4 xs1:mx-0 xs1:my-0 p-8 xs1:p-2 right-10 xs1:right-0 ">
                    <h1 className="text-4xl py-1 my-4 font-semibold	">Our Activities</h1>
                    <p className="text-xl py-1 poppins sm:pl-16">The main motto of our club is knowledge building through experiments with models and knowledge transfer to its members for sustaining the club. We undertake a variety of activities, including:</p>

                    <ul className="list-disc text-xl py-1 poppins ml-16 xs1:ml-2 xs1:mt-4">
                        <li>Designing and building new models</li>
                        <li>Rebuilding of damaged models</li>
                        <li>Flying the prepared models</li>
                        <li>Ground pilot training to the budding pilots</li>
                        <li>Organizing aeromodelling events during Techspardha</li>
                        <li>Inviting professional aero modellers to interact with the club members and conduct workshops</li>
                    </ul>
                </div>
            </div>

            <div className="h-[400px] w-full flex flex-row-reverse xs1:flex-col-reverse m-4 xs1:mx-4 xs1:my-16 relative xs1:py-16 xs1:top-80">
            <img className="sm:h-[400px] sm:w-[400px] h-[300px] w-[300px]  mx-8 my-4 p-8 xs1:mx-0 lg:mr-[170px]" src={planeframe} alt="" />
                <div className="h-[400px]  w-[600px] xs1:w-[90vw]  my-4 xs1:mx-0 p-8 xs1:p-2 left-10 xs1:left-0 md:absolute  ">
                    <h1 className="text-4xl py-1 my-4 font-semibold	xs1:mx-0">Benefits of Aeromodelling</h1>
                    <p className="text-xl py-1 poppins sm:pl-16">There are many benefits to participating in aeromodelling, including:</p>
                    <ul className="list-disc text-xl py-1 poppins ml-16 xs1:ml-2 xs1:mt-4">
                        <li>Improved hand-eye coordination</li>
                        <li>Fine motor skills</li>
                        <li>Problem-solving skills</li>
                        <li>Creativity</li>
                        <li> Teamwork</li>
                    </ul>
                </div>
               

            </div>

            <div className="h-[200px] w-full flex flex-col my-16">
                {/* <img className="h-[400px] w-[400px] mx-16 my-4 p-8" src={robot} alt="" /> */}
                <div className="h-auto w-[95] my-4 p-8 place-items-center ">
                    <p className="text-xl py-1 poppins text-center">Aeromodelling is also a great way to learn about the principles of aviation, such as aerodynamics, flight mechanics, and propulsion.</p>
                    <p className="text-xl py-1 poppins text-center">If you are interested in joining the Aeromodelling Club, please visit our Social Media Handles or contact us at <br />[email protected]</p>
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>

                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>

            </div>
        </div>


    );
}
export default AboutUs;