import React, { useContext } from 'react'
import logpic from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/Authprovider'

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const handaleSignUp = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        form.reset()
      })
      .catch((error) => {
        console.log('error :', error)
      })
  }

  return (
    <div>
      <div className='hero w-full'>
        <div className='hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row'>
          <div className='text-center lg:text-left'>
            <img src={logpic} alt='' />
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form className='card-body' onSubmit={handaleSignUp}>
              <h1 className='text-5xl font-bold text-center'>Sign Up</h1>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='name'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='text'
                  placeholder='email'
                  name='email'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Confirm Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  name='password'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control mt-6'>
                <input
                  className='btn btn-primary'
                  type='submit'
                  value='Sign Up'
                />
              </div>
            </form>
            <div className='text-center'>
              <p style={{ marginBottom: '7px' }}>
                Already Have an account?
                <Link className='text-orange-500' to='/login'>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
