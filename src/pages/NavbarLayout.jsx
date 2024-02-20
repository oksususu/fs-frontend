import React from 'react'
import { IoCartOutline, IoHomeOutline, IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const NavbarLayout = () => {
  return (
    <div className="w-full">
      <div className="max-w-[860px] h-[56px] mx-auto px-3 flex justify-between items-center">
        <div className="">
          <button>
            <Link to="/">
              <IoHomeOutline className="inline-block text-3xl hover:text-gray-500" />
            </Link>
          </button>
        </div>
        <div className="flex gap-2">
          <button>
            <Link to="/cart">
              <IoCartOutline className="inline-block text-3xl hover:text-gray-500" />
            </Link>
          </button>
          <button>
            <Link to="/search">
              <IoSearchOutline className="inline-block text-3xl hover:text-gray-500" />
            </Link>
          </button>
        </div>
      </div>
      <div className="w-full border-2 border-solid border-neutral-100"></div>
    </div>
  )
}

export default NavbarLayout
