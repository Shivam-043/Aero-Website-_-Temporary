import React from 'react'
import { techspardhabg } from '../assets'
import styles from '../style'

const TechSpardha = () => {
    return (
        <div className={`bg-primary w-full overflow-hidden items-center relative`}>
            <div className='justify-center flex flex-row shadow-lg shadow-inne'>
                <img src={techspardhabg} alt="Techspardha" className='z-10 px-[20%] ' />
                <h1 className='text-white absolute z-0 text-[150px] font-poppins left-[25%] text-gradient2'>TECH</h1>
                <h1 className='text-white absolute z-0 text-[150px] font-poppins py-[12%] right-[5%] text-gradient2 '>SPARDHA</h1>
                <div className='box-content h-8 w-24 p-4 border-1 shadow-2xl rounded-lg text-center text-white font-bold bg-tech-gradient '>NITKKR</div>
            </div>

            <div className="sm1:justify-start flex justify-center w-full feedback-container relative z-[1]"></div>

        </div>
        
    )
}

export default TechSpardha