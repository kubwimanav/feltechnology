import React from 'react'
import Sidebar from './Sidebar'
import '../styles/Layout.css'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
      <div className='layout'>
          <Sidebar />
          <Outlet/>
    </div>
  )
}

export default Layout