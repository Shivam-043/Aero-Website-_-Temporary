import React from 'react'
import Button from '../Button'

const Member1 = ({ prevStep,nextStep, handleChange, values }) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div>
      <h1 className='text-white justify-center text-2xl poppins m-2px p-2px'>Team-Member 1:</h1>
      <div className="w-auto flex flex-col ">
        <label className="input">
          <input className={`input__field`} type="text" placeholder='Full Name' value={values.member1_name} onChange={handleChange('member1_name')} required />
          <span className="input__label ">Full Name</span>
        </label>
        <label className="input">
          <input className="input__field" type="tel" placeholder='Contact Number' value={values.Member1_mob} onChange={handleChange('member1_mob')} required />
          <span className="input__label">Contact Number</span>
        </label>
        <label className="input">
          <input className="input__field" type="number" placeholder='Enter Age' value={values.member1_age} onChange={handleChange('member1_age')}  required />
          <span className="input__label">Enter Age</span>
        </label>
        <label className="input">
          <input className="input__field" type="email" placeholder='Member Email' value={values.member1_email} onChange={handleChange('member1_email')}  required />
          <span className="input__label">Member Email</span>
        </label>
        <label className="input">
          <input className="input__field" type="Text" placeholder='College Name' value={values.member1_college} onChange={handleChange('member1_college')}  required />
          <span className="input__label">College Name</span>
        </label>
        <label className="input">
          <textarea className="input__field" type="text" placeholder='Address' value={values.member1_address} onChange={handleChange('member1_address')} rows="2"></textarea>
          <span className="input__label">Address</span>
        </label>
      </div>

      <div>
      <div className='absolute left-10 bottom-10'>
              <Button title={'Prev'} py="py-3" px="px-5" onClick={Previous} />
            </div>
        <div className='absolute right-10 bottom-10'>
          <Button title={'Next'} py="py-3" px="px-5" onClick={Continue} />
        </div>
      </div>
    </div>
  )
}

export default Member1