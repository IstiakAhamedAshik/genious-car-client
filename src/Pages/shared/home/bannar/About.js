import React from 'react'
import parts from '../../../../assets/images/about_us/parts.jpg'
import person from '../../../../assets/images/about_us/person.jpg'
const About = () => {
  return (
    <div>
      <div className='hero min-h-screen bg-white mt-8'>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='w-1/2 relative'>
            <img src={person} alt='' className=' rounded-lg w-96 shadow-2xl' />
            <img
              src={parts}
              alt=''
              className=' shadow-2xl w-72 h-60 parts-img '
            />
          </div>

          <div className='w-1/2'>
            <h1 className='text-xl font-bold text-red-700'>About Us</h1>
            <h1 className='text-5xl font-bold'>
              We are qualified & of experience in this field
            </h1>
            <p className='py-6'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className='py-6'>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className='btn btn-secondary'>Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
