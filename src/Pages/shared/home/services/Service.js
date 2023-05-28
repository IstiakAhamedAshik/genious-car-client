import React, { useEffect, useState } from 'react'
import ServiceItem from './ServiceItem'

const Service = () => {
  const [services, setServices] = useState()

  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])
  return (
    <div className='mt-10'>
      <div>
        <h4 className='text-xl font-bold text-red-700 text-center'>Service</h4>
        <h2 className='text-5xl font-bold text-center'>Our Service Area</h2>
        <p className='py-6 text-center'>
          the majority have suffered alteration in some form, by injected
          humour,
          <br /> or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
        {services?.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
      <div className='mt-4 text-center'>
        <button className='btn btn-outline btn-success'>More Services</button>
      </div>
    </div>
  )
}

export default Service
