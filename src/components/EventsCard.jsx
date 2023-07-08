import React from 'react'
import styles from '../style'
import { rcPlane } from '../assets'
import Button from './Button'

const EventsCard = ({post, onPostClick}) => {
  return (
    <div className={`box-border xs1:h-[70vh] xs1:w-[90vw] h-[65vh] w-[25vw] p-4 rounded-3xl event-card xs1:justify-center ${styles.paddingY}`} >
      <div className={`justify-center flex`}>
        <img src={rcPlane} alt="" className='w-[40%] h-[50%] xs1:w-[75%]'/>
      </div>
      <div className='py-2 px-4'>
        <h1 className={`font-poppins text-white text-[40px] xs1:font-semibold xs1:text-center`} >{post.title}</h1>
        <p className={`text-white font-poppins`}>{post.content}</p>
      </div>
      <div className='justify-end flex align-bottom' onClick={() => {onPostClick(post);}} >
        <Button title={"Know More"} py="py-3" px="px-5" />
      </div>
    </div>
  )
}

export default EventsCard