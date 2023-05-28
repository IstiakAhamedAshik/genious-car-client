import React from 'react'
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div>
        <Link to='/'>
          <img style={{ height: '65px' }} src={logo} alt='' srcset='' />
        </Link>
      </div>
      <div className='link-header'>
        <Link to='/'>Home</Link>
        <Link to='/service'>Services</Link>
        <Link to='/login'>Login</Link>
      </div>
      <div>
        <button className='btn-header'>Appointment</button>
      </div>
    </div>
  )
}

export default Header
