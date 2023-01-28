import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

const MainRouter = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainRouter