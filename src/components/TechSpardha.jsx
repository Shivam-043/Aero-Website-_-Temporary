import React, { useState } from 'react'
import { techspardhabg, techspardhabg2, techspardhaimg } from '../assets'
import styles from '../style'
import Button from './Button'
import { registerCard } from '../constants'
import RegisterCard from './registerCard'
import TechspardhaCarousel from './TechspardhaCorousel'
import Footer from './Footer'
import Faqs from './faqs'
import Popup from './Techspardha/PopUp'
// import { Carousel } from "@material-tailwind/react";


const TechSpardha = () => {

    const [events , setEvents] = useState(null);

    const handleState =(events) =>{
        setEvents(events);
        console.log(events)
    }
    return (
        <div>
            <div className={`bg-primary w-full flex flex-row place-content-evenly`}>
                {/* <Carousel transition={{ duration: 2 }} className="rounded-xl relative">
                    <img src={techspardhaimg} alt="" className='opacity-30 h-[80vh] w-[100vw] object-cover' />
                    <img src={techspardhaimg} alt="" className='opacity-30 h-[80vh] w-[100vw] object-cover' />
                    
                </Carousel> */}
                <div className='relative opacity-30 xs1:h-[80vh] xs1:ml-auto xs1:mr-auto rounded-xl'><TechspardhaCarousel /></div>

                <div className='z-10 absolute'>
                    <div className='flex'>
                        <div className=' h-[80vh] w-[40vw] sm1:justify-self-start flex flex-col place-content-evenly relative xs1:w-[80vw] xs1:justify-center'>

                            <h1 className='text-white sm1:justify-self-start font-poppins text-gradient text-6xl xs1:text-4xl m-2 flex'>TechSpardha</h1>
                            <p className='text-white text-5xl sm1:justify-self-start font-poppins m-2 xs1:text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                            <p className='text-white text-3xl sm1:justify-self-start font-poppins m-2 xs1:text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis adipisci eligendi dignissimos temporibus obcaecati?</p>
                            <div className='justify-start flex sm1:justify-self-start font-poppins m-2'>
                                <Button title={"Know More"} py="py-2" px="px-4" />
                            </div>
                        </div>

                        <div className={`items-center h-[80vh] w-[40vw] sm1:justify-end object-contain relative xs1:hidden ${styles.marginX}`}>
                            <img className="h-[80vh] w-[70vw] filter drop-shadow-lg  " src={techspardhabg} alt="" />
                        </div>


                    </div>

                </div>


            </div>
            <div className='bg-primary flex flex-row m-8 xs1:flex-col xs1:m-5 xs1:items-center ' >{registerCard.map((data) => <RegisterCard key={data.id} data= {data} onHandleClick={handleState}/>)}</div>
            <div>
                <Faqs />
            </div>
            <Popup {...events}/>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default TechSpardha