import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarLayout from './NavbarLayout'

const Layout = () => {
  return (
    <>
      <NavbarLayout />
      <div className="max-w-[860px] mx-auto px-3" id="content-container">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
