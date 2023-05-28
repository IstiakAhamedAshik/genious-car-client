import React from 'react'
import pic1 from '../../../../assets/images/banner/1.jpg'
import pic2 from '../../../../assets/images/banner/2.jpg'
import pic3 from '../../../../assets/images/banner/3.jpg'
import pic4 from '../../../../assets/images/banner/4.jpg'
import pic5 from '../../../../assets/images/banner/5.jpg'
import pic6 from '../../../../assets/images/banner/6.jpg'
const Bannar = () => {
  return (
    <div>
      <div className='carousel carousel-item '>
        <div id='slide1' className='carousel-item relative w-full'>
          <div className='carousel-img'>
            <img src={pic1} alt='' className='caro-img' />
          </div>
          <div className='absolute flex justify-start  left-24 top-28'>
            <h1 className='text-6xl font-bold text-white'>
              Affordable <br /> Price For Car
              <br /> Servicing
            </h1>
          </div>
          <div className='absolute flex justify-start w-2/5  left-24 top-1/2'>
            <p className=' text-white text-xl'>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className='absolute flex justify-start w-2/5  left-24 top-3/4'>
            <button className='btn btn-outline btn-secondary mr-5'>
              Discover More
            </button>
            <button className='btn btn-outline btn-secondary'>
              Latest Project
            </button>
          </div>

          <div className='absolute flex justify-end  right-9 bottom-5 '>
            <a href='#slide6' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <div className='carousel-img'>
            <img src={pic2} alt='' className='caro-img' />
          </div>
          <div className='absolute flex justify-start  left-24 top-28'>
            <h1 className='text-6xl font-bold text-white'>
              Affordable <br /> Price For Car
              <br /> Servicing
            </h1>
          </div>
          <div className='absolute flex justify-start w-2/5  left-24 top-1/2'>
            <p className=' text-white text-xl'>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className='absolute flex justify-start w-2/5  left-24 top-3/4'>
            <button className='btn btn-outline btn-secondary mr-5'>
              Discover More
            </button>
            <button className='btn btn-outline btn-secondary'>
              Latest Project
            </button>
          </div>

          <div className='absolute flex justify-end  right-9 bottom-5 '>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <div className='carousel-img'>
            <img src={pic3} alt='' className='caro-img' />
          </div>
          <div className='absolute flex justify-start  left-24 top-28'>
            <h1 className='text-6xl font-bold text-white'>
              Affordable <br /> Price For Car
              <br /> Servicing
            </h1>
          </div>
          <div className='absolute flex justify-start w-2/5  left-24 top-1/2'>
            <p className=' text-white text-xl'>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className='absolute flex justify-start w-2/5  left-24 top-3/4'>
            <button className='btn btn-outline btn-secondary mr-5'>
              Discover More
            </button>
            <button className='btn btn-outline btn-secondary'>
              Latest Project
            </button>
          </div>

          <div className='absolute flex justify-end  right-9 bottom-5 '>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' className='carousel-item relative w-full'>
          <div className='carousel-img'>
            <img src={pic4} alt='' className='caro-img' />
          </div>
          <div className='absolute flex justify-start  left-24 top-28'>
            <h1 className='text-6xl font-bold text-white'>
              Affordable <br /> Price For Car
              <br /> Servicing
            </h1>
          </div>
          <div className='absolute flex justify-start w-2/5  left-24 top-1/2'>
            <p className=' text-white text-xl'>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className='absolute flex justify-start w-2/5  left-24 top-3/4'>
            <button className='btn btn-outline btn-secondary mr-5'>
              Discover More
            </button>
            <button className='btn btn-outline btn-secondary'>
              Latest Project
            </button>
          </div>

          <div className='absolute flex justify-end  right-9 bottom-5 '>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide5' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide5' className='carousel-item relative w-full'>
          <div className='carousel-img'>
            <img src={pic5} alt='' className='caro-img' />
          </div>
          <div className='absolute flex justify-start  left-24 top-28'>
            <h1 className='text-6xl font-bold text-white'>
              Affordable <br /> Price For Car
              <br /> Servicing
            </h1>
          </div>
          <div className='absolute flex justify-start w-2/5  left-24 top-1/2'>
            <p className=' text-white text-xl'>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className='absolute flex justify-start w-2/5  left-24 top-3/4'>
            <button className='btn btn-outline btn-secondary mr-5'>
              Discover More
            </button>
            <button className='btn btn-outline btn-secondary'>
              Latest Project
            </button>
          </div>

          <div className='absolute flex justify-end  right-9 bottom-5 '>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide6' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide6' className='carousel-item relative w-full'>
          <div className='carousel-img'>
            <img src={pic6} alt='' className='caro-img' />
          </div>
          <div className='absolute flex justify-start  left-24 top-28'>
            <h1 className='text-6xl font-bold text-white'>
              Affordable <br /> Price For Car
              <br /> Servicing
            </h1>
          </div>
          <div className='absolute flex justify-start w-2/5  left-24 top-1/2'>
            <p className=' text-white text-xl'>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className='absolute flex justify-start w-2/5  left-24 top-3/4'>
            <button className='btn btn-outline btn-secondary mr-5'>
              Discover More
            </button>
            <button className='btn btn-outline btn-secondary'>
              Latest Project
            </button>
          </div>

          <div className='absolute flex justify-end  right-9 bottom-5 '>
            <a href='#slide5' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bannar
