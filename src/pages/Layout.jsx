import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarLayout from './NavbarLayout'
import FooterLayout from './FooterLayout'

const Layout = () => {
  return (
    <>
      <NavbarLayout />
      <div
        className="max-w-[860px] mx-auto px-3 min-h-screen"
        id="content-container"
      >
        <Outlet />
      </div>
      <FooterLayout />
    </>
  )
}

export default Layout
