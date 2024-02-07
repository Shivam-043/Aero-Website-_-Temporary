import React, { memo, useEffect, useState } from 'react';
import Signup from './Signup';
import styles, { layout } from "../../style";

import { useParams, useSearchParams } from 'react-router-dom';
import Footer from '../Footer';
import useUser from '../../context/userContext';

const RegisterForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [eventName, setEvent] = useState(searchParams.get('event') || 'hover');
  const {event}= useParams();
  const {user}= useUser();
  useEffect(()=>{
    console.log(event);
    // if(!user.id){
    //   window.location.href='login';
    // };
  },[]);

  function RegisterFormDetails ({heading=[]}){
    const fontSizes = [
      ' mt-10 text-4xl mb-5',
      'text-2xl mb-5',
      'text-lg',
    ];
   
    const textColors = ['#FF5733', '#3498DB', '#27AE60'];
  
    return( 
    <div className='text-left flex flex-col'>
       {heading.map((headingText,index) =>(
        <div key={index} className={`font-${fontSizes[index % fontSizes.length]} text-white rounded-lg md:w-full`} style={{color: textColors[index % textColors.length]}}>{headingText}</div>
       ))}
    </div>
    )
  }
  
  return (
    < >
      <div className={`justify-around ${layout.section}`}>
        <div className='lg:w-1/2  md:w-full sm:w-full '>
          <RegisterFormDetails  heading={
            
            [
              "<h1> Abhishek Content prints Here"
              ,"<h2> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              ," <h3> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  
            ]
            }  />
        </div>
        <div className={`w-1/3 border-4 rounded-3xl   border-indigo-500 p-4 pb-16 `}>
          <Signup />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default memo(RegisterForm);

