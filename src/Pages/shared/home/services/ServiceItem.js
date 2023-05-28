import React from 'react'

const ServiceItem = (props) => {
  const { title, img, price } = props.service
  return (
    <div className='card card-compact w-80 bg-base-100 shadow-xl'>
      <figure>
        <img src={img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-2xl '>{title}</h2>
        <p className=' text-red-700 py-6 font-bold'> Price:$ {price}</p>
      </div>
      <div
        className='card-actions  justify-end'
        style={{ marginBottom: '20px', marginRight: '20px' }}
      >
        <button className='btn btn-outline'>Buy Now</button>
      </div>
    </div>
  )
}

export default ServiceItem
