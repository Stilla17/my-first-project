import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router'
import Sidebar from '../Components/Sidebar/Sidebar'

const Layout = () => {
  return (
    <div className=''>
      <Sidebar />
      <div className=''>
        <Header />
        <Outlet />
      </div>



    </div>
  )
}

export default Layout