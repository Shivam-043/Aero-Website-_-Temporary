import React from 'react'
import styles from '../style'
import { rcPlane } from '../assets'
import Button from './Button'

const EventsCard = () => {
  return (
    <div className={`box-border xs:h-[70vh] xs:w-[80vw] h-[60vh] w-[30vw] p-4 rounded-3xl event-card xs:justify-center ${styles.paddingY}`}>
      <div className={`justify-center flex`}>
        <img src={rcPlane} alt="" className='w-[40%] h-[50%]'/>
      </div>
      <div className='py-2 px-4'>
        <h1 className={`font-poppins text-white text-[40px]`} >Techspardha</h1>
        <p className={`text-white font-poppins`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio numquam quia id culpa accusamus nobis minima, eos aliquam ducimus ab dicta reiciendis cumque laboriosam officiis praesentium quo ad quis quasi.</p>
      </div>
      <div className='justify-end flex '>
        <Button title={"Know More"}/>
      </div>
    </div>
  )
}

export default EventsCard