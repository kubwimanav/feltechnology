import React from 'react'
import Sidebar from './Sidebar'
import { IoNotificationsCircleSharp } from "react-icons/io5";
import headerimage from '/image.jpg'
import DashHome from './DashHome'
import '../styles/Layout.css'
import Payment from './Payment'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className='header-outlet'>
        <div className="layout-icon-input">
          <input type="text" placeholder="Quick search for every thing" />
          <div className='icon-image'>
            <IoNotificationsCircleSharp  className='icon-layout'/>
            <img src={headerimage} alt="" className="layout-image" />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout