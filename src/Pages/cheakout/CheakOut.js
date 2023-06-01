import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import image from '../../assets/images/banner/4.jpg'
import { AuthContext } from '../../context/Authprovider'
const CheakOut = () => {
  const { _id, title, price } = useLoaderData()
  const { user } = useContext(AuthContext)
  const handleOrder = (event) => {
    event.preventDefault()
    const form = event.target
    const firstname = form.firstname.value
    const lastname = form.lastname.value
    const textarea = form.textarea.value
    const phone = form.phone.value
    const email = user?.email || 'Not Register'

    const order = {
      sevice: _id,
      seviceName: title,
      price,
      firstname,
      lastname,
      textarea,
      phone,
      email,
    }
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          alert('order place Successfully')
          form.reset()
        }
      })
  }
  return (
    <div>
      <div className='checkOutimg'>
        <img src={image} alt='' srcset='' />
        <h3>Check Out</h3>
      </div>
      <div className='check-form'>
        <form onSubmit={handleOrder}>
          <div className='checkOut-input'>
            <input
              type='text'
              name='firstname'
              id=''
              placeholder='First Name'
            />
            <input type='text' name='lastname' id='' placeholder='Last Name' />
            <input type='text' name='phone' id='' placeholder='Your Phone ' />
            <input
              type='email'
              defaultValue={user?.email}
              name='email'
              id=''
              placeholder='Your Email'
              readOnly
            />
          </div>
          <div className='checkOut-textarea'>
            <textarea
              name='textarea'
              id=''
              cols='30'
              rows='10'
              placeholder='Your Message'
            ></textarea>
            <input
              className='checkOut-btn'
              type='submit'
              value='Order Confirm'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheakOut
