import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Authprovider'
import image from '../../assets/images/banner/5.jpg'
import GetOrdes from './GetOrdes'
const Orders = () => {
  const { user } = useContext(AuthContext)
  const [orders, setOrders] = useState()

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
  }, [user?.email])

  const handaleDelete = (_id) => {
    const proceed = window.confirm('Are you sure,you want to cancil this order')
    if (proceed) {
      fetch(`http://localhost:5000/orders/${_id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.deletedCount > 0) {
            alert('deleted successfully')
            const remainingOrders = orders.filter((odr) => odr._id !== _id)
            setOrders(remainingOrders)
          }
        })
    }
  }
  const handaleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'Approved' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id)
          const approving = orders.find((odr) => odr._id === id)
          approving.status = 'Approved'
          const newOrders = [approving, ...remaining]
          setOrders(newOrders)
        }
      })
  }
  return (
    <div>
      <div className='checkOutimg'>
        <img src={image} alt='' srcset='' />
        <h3>Check Orders</h3>
      </div>
      <div>
        <h1
          style={{ textAlign: 'center', marginTop: '15px', fontSize: '20px' }}
        >
          You Have : {orders?.length} Orders
        </h1>
        <table className='head-tr'>
          <thead>
            <tr>
              <th>Service img</th>
              <th>ServiceName</th>
              <th>Price</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <GetOrdes
                key={order._id}
                order={order}
                handaleDelete={handaleDelete}
                handaleStatusUpdate={handaleStatusUpdate}
              ></GetOrdes>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
