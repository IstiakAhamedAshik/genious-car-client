import React, { useContext } from 'react'
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/Authprovider'
const Header = () => {
  const { user, logout } = useContext(AuthContext)

  const handlelogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error)
      })
  }

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
        <Link to='/orders'>Orders</Link>
        <Link to='/login'>Login</Link>
      </div>
      <div>
        <button className='btn-header'>Appointment</button>
        {user?.uid && (
          <button className='btn-logout' onClick={handlelogOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
