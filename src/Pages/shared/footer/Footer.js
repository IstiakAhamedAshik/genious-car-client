import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
const Footer = () => {
  return (
    <div>
      <footer className='footer p-10 text-back text-base-content '>
        <div>
          <img src={logo} alt='' srcset='' />
          <p>
            Edwin Diaz is a software and web <br />
            technologies engineer,
            <br /> a life coach trainer who is also a serial .
          </p>
        </div>
        <div>
          <span className='footer-title'>About</span>
          <Link className='link link-hover'>Home</Link>
          <Link className='link link-hover'>Service</Link>
          <Link className='link link-hover'>Contact</Link>
        </div>
        <div>
          <span className='footer-title'>Company</span>
          <Link className='link link-hover'>Why car doctor</Link>
          <Link className='link link-hover'>About</Link>
        </div>
        <div>
          <span className='footer-title'>Support</span>
          <Link className='link link-hover'>Support Center</Link>
          <Link className='link link-hover'>Feedback</Link>
          <Link className='link link-hover'>Accessbility</Link>
        </div>
      </footer>
    </div>
  )
}

export default Footer
