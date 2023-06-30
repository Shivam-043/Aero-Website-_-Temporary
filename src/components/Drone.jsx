import { Container } from 'postcss'
import React from 'react'
import styles from '../style';
import { robot } from '../assets';
import Button from './Button';
import { Input } from "@material-tailwind/react";
import Signup from './registerForm/Signup';

const Drone = () => {
  return (
    <div className='h-auto w-[100vw] p-4 m-5 place-content-center items-center'>
      <div className='box-content p-4 border-1 m-4 flex flex-row xs1:flex-col bg-gray-700 h-auto w-[90vw] place-content-evenly rounded shadow-inner shadow-2xl '>


        <div className='box-border h-auto w-[40vw] p-4 border-1 rounded bg-transparent shadow-inner shadow-2xl'>
          <img src={robot} alt="" />

        </div>


        <div className='box-border h-auto w-[40vw] p-4 border-1 rounded  shadow-inner shadow-2xl gap-6 bg-gray-700 relative'>
          {/* registration for team  */}
          <Signup />
          
        </div>



      </div>
    </div>
  );
}

export default Drone;