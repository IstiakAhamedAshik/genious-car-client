import React from 'react'
import logpic from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
const Login = () => {
  const handaleLogin = (event) => {
    event.preventDefault()
    console.log(1)
  }
  return (
    <div className='hero w-full'>
      <div className='hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row'>
        <div className='text-center lg:text-left'>
          <img src={logpic} alt='' />
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body' onSubmit={handaleLogin}>
            <h1 className='text-5xl font-bold text-center'>Login</h1>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='text'
                placeholder='password'
                className='input input-bordered'
              />
            </div>
            <div className='form-control mt-6'>
              <input className='btn btn-primary' type='submit' value='Login' />
            </div>
          </form>
          <div className='text-center'>
            <p>Or sign Up With</p>
            <button className='google-btn'>
              <FaGoogle />
            </button>
            <p style={{ marginBottom: '7px' }}>
              Don't Have an account?
              <Link className='text-orange-500' to='/signup'>
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
