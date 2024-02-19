import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const NavbarLayout = () => {
  return (
    <>
      <div className="w-full h-[48px]  flex justify-center items-center">
        <button>
          <Link to="/cart">
            <IoCartOutline className="inline-block text-3xl hover:text-gray-500" />
          </Link>
        </button>
      </div>
      <div className="w-full border-2 border-solid border-neutral-100"></div>
    </>
  )
}

export default NavbarLayout
