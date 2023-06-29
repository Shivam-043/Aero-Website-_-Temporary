import { Container } from 'postcss'
import React from 'react'
import styles from '../style';
import { robot } from '../assets';
import Button from './Button';
import { Input } from "@material-tailwind/react";


const Drone = () => {
  return (
    <div className='h-auto w-[100vw] p-4 m-5 place-content-center items-center'>
      <div className='box-content p-4 border-1 m-4 flex flex-row xs1:flex-col bg-gray-700 h-auto w-[90vw] place-content-evenly rounded shadow-inner shadow-2xl '>


        <div className='box-border h-auto w-[40vw] p-4 border-1 rounded bg-transparent shadow-inner shadow-2xl'>
          <img src={robot} alt="" />

        </div>


        <div className='box-border h-auto w-[40vw] p-4 border-1 rounded  shadow-inner shadow-2xl gap-6 grid  bg-gray-700'>

          <h1 className='text-white justify-center text-2xl poppins m-2px p-2px'>Register Team:</h1>

          <div className="w-auto flex flex-col ">
            <label className="input ">
              <input className="input__field " type="text" placeholder='Team Name' />
              <span className="input__label ">Team Name</span>
            </label>
            <label className="input">
              <input className="input__field" type="text" placeholder='Team Leader Name' />
              <span className="input__label">Team Leader Name</span>
            </label>
            <label className="input">
              <input className="input__field" type="tel" placeholder='Team Mobile Number' />
              <span className="input__label">Team Mobile Number</span>
            </label>
            <label className="input">
              <input className="input__field" type="email" placeholder='Team Email'  required />
              <span className="input__label">Team Email</span>
            </label>
            <label className="input">
              <input className="input__field" type="number" placeholder='Team Size' />
              <span className="input__label">Team Size</span>
            </label>
          </div>

          <div>
            <Button title={'Reset'} py="py-2" px="px-4"/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Drone;