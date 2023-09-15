import React from 'react'
import styles from '../style'
import { rcPlane } from '../assets'
import Button from './Button'
import { Link} from 'react-router-dom';

const EventsCard = ({post, onPostClick}) => {
  return (
    <div className={`box-border xs1:h-[62vh] xs1:w-[90vw] h-[65vh] w-[25vw] p-4 rounded-3xl display: inline-table event-card xs1:justify-center ${styles.paddingY}`} >
      <div className={`justify-center flex`}>
        <img src={rcPlane} alt="" className='w-[40%] h-[50%] xs1:w-[75%]'/>
      </div>
      <div className='py-2 px-0'>
        <h1 className={`font-poppins text-white text-[40px] xs1:font-semibold xs1:text-start xs1:text-[40px]`} >{post.title}</h1>
        <p className={`text-white font-poppins`}>{post.content.slice(0, post.content.length /2)}{'....................'}</p>
      </div>
      <div className='justify-end flex align-bottom' onClick={() => {onPostClick(post);}} >
      <Link to={`/events/${post.id}`}><Button title={"Know More"} py="py-3" px="px-5" /></Link>
      </div>
    </div>
  )
}

export default EventsCard