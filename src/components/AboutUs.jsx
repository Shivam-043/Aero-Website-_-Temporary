import React from "react";
import styles from "../style";
import { robot,planeframe} from '../assets'
import Footer from "./Footer";

const AboutUs = () => {
    return (
        <div className="h-auto w-full p-4 bg-primary">
            <div className="h-[400px] w-full flex flex-row m-4 relative ">
                <img className="h-[400px] w-[400px] mx-16 my-4 p-8" src={robot} alt="" />
                <div className="h-[400px] w-[600px] mx-16 my-4 p-8  absolute right-10 ">
                    <h1 className="text-4xl py-1 my-4 font-semibold">About Us</h1>
                    <p className="text-xl py-1 poppins pl-16">The Aeromodelling Club at NITK is a student organization dedicated to the design, construction, and flight of model aircraft. We are a diverse group of students with a passion for aviation, and we welcome all interested students to join us.</p>
                </div>
            </div>

            <div className="h-[400px] w-full flex flex-row m-4 relative">
                <div className="h-[400px] w-[600px] mx-16 my-4 p-8 ">
                    <h1 className="text-4xl py-1 my-4 font-semibold	">Our History</h1>
                    <p className="text-xl py-1 poppins pl-16">Our club was founded in 2007 by Kamal Kant Gaur and co-founded by flying enthusiasts Dipesh, Rupesh, and Suman. Under the able guidance of Dr. G.L. Pahuja, the club has come a long way since then. We have a strong track record of success in competitions, and our events are always popular at the college's annual techfest, Techspardha.</p>
                </div>
                <img className="h-[400px] w-[400px] mx-16 my-4 p-8 absolute right-10" src={planeframe} alt="" />
            </div>

            <div className="h-[600px] w-full flex flex-row m-4 realtive">
                <img className="h-[400px] w-[400px] mx-16 my-4 p-8" src={robot} alt="" />
                <div className="h-[400px] w-[600px] mx-16 my-4 p-8 absolute right-20">
                    <h1 className="text-4xl py-1 my-4 font-semibold	">Our Activities</h1>
                    <p className="text-xl py-1 poppins pl-16">The main motto of our club is knowledge building through experiments with models and knowledge transfer to its members for sustaining the club. We undertake a variety of activities, including:</p>

                    <ul className="list-none md:list-disc text-xl py-1 poppins pl-16">
                        <li>Designing and building new models</li>
                        <li>Rebuilding of damaged models</li>
                        <li>Flying the prepared models</li>
                        <li>Ground pilot training to the budding pilots</li>
                        <li>Organizing aeromodelling events during Techspardha</li>
                        <li>Inviting professional aero modellers to interact with the club members and conduct workshops</li>
                    </ul>
                </div>
            </div>

            <div className="h-[400px] w-full flex flex-row m-4 realtive">
                <div className="h-[400px] w-[600px] mx-16 my-4 p-8  right-20">
                    <h1 className="text-4xl py-1 my-4 font-semibold	">Benefits of Aeromodelling</h1>
                    <p className="text-xl py-1 poppins pl-16">There are many benefits to participating in aeromodelling, including:</p>
                    <ul className="list-none md:list-disc text-xl py-1 poppins pl-16">
                        <li>Improved hand-eye coordination</li>
                        <li>Fine motor skills</li>
                        <li>Problem-solving skills</li>
                        <li>Creativity</li>
                        <li> Teamwork</li>
                    </ul>
                </div>
                <img className="h-[400px] w-[400px] mx-16 my-4 p-8 absolute right-10" src={planeframe} alt="" />
            </div>

            <div className="h-[200px] w-full flex flex-col my-16">
                {/* <img className="h-[400px] w-[400px] mx-16 my-4 p-8" src={robot} alt="" /> */}
                <div className="h-auto w-[95] my-4 p-8 place-items-center ">
                    <p className="text-xl py-1 poppins text-center">Aeromodelling is also a great way to learn about the principles of aviation, such as aerodynamics, flight mechanics, and propulsion.</p>
                    <p className="text-xl py-1 poppins text-center">If you are interested in joining the Aeromodelling Club, please visit our website or contact us at <br />[email protected]</p>
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