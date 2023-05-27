import React from 'react'
import Header from '../Pages/shared/header/Header'
import Footer from '../Pages/shared/footer/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
