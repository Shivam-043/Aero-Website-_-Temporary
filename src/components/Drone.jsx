import React from 'react'
import { robot } from '../assets';
import Signup from './registerForm/Signup';
import Auth from '../auth/auth';
import Checkauth from './checkAuth';

const Drone = () => {
  // convert this function to class based component ?

  return (
    <div className='h-auto w-[100vw] p-4 m-5 xs1:p-0 xs1:m-0'>
      <div className='box-content p-4 border-1 m-4 flex flex-row xs1:flex-col bg-gray-700 h-auto w-[90vw] place-content-evenly rounded shadow-inner shadow-2xl xs1:p-0'>


        <div className='box-border h-auto w-[40vw] p-4 border-1 rounded bg-transparent shadow-inner shadow-2xl xs1:w-[90vw]'>
          <img src={robot} alt="" />

        </div>


        <div className='box-border h-[90vh] w-[40vw] p-4 border-1 rounded  shadow-inner shadow-2xl gap-6 bg-gray-700 relative xs1:w-auto'>
          {/* registration for team  */}
          {/* <Signup /> */}
          <Checkauth  />
        </div>



      </div>
    </div>
  );
}

export default Drone;