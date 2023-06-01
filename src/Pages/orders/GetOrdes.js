import React, { useEffect, useState } from 'react'

const GetOrdes = ({ order, handaleDelete, handaleStatusUpdate }) => {
  const { _id, seviceName, price, email, textarea, sevice, status } = order
  const [orderService, setOrderService] = useState()

  useEffect(() => {
    fetch(`http://localhost:5000/service/${sevice}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data))
  }, [sevice])

  return (
    <tr className='get-orders'>
      <td className='order-service-deleteOption'>
        <div>
          <button
            onClick={() => handaleDelete(_id)}
            className='service-delete-button'
          >
            X
          </button>
        </div>
        <div>
          {orderService?.img && (
            <img className='order-service-img' src={orderService.img} alt='' />
          )}
        </div>
      </td>

      <td>{seviceName}</td>
      <td>{price}</td>
      <td>{email}</td>
      <td>{textarea}</td>
      <td>
        <button
          onClick={() => handaleStatusUpdate(_id)}
          className='service-approved-button'
        >
          {status ? status : 'pending'}
        </button>
      </td>
    </tr>
  )
}

export default GetOrdes
