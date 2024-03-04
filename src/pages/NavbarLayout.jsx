import React from 'react'
import { IoCartOutline, IoHomeOutline, IoSearchOutline } from 'react-icons/io5'
import { TbLogout2, TbLogin2 } from 'react-icons/tb'
import { Link } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { loginState } from '../atoms/accountAtom'

const NavbarLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)
  console.log('isLoggedIn 상태 :', isLoggedIn)
  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('token')
  }

  return (
    <div className="w-full">
      <div className="max-w-[860px] h-[56px] mx-auto px-3 flex justify-between items-center">
        <div>
          <button>
            <Link to="/">
              <IoHomeOutline className="inline-block text-3xl hover:text-gray-500" />
            </Link>
          </button>
        </div>
        <div className="flex gap-2">
          {isLoggedIn ? (
            <button onClick={handleLogout}>
              <TbLogout2 className="inline-block text-3xl hover:text-gray-500" />
            </button>
          ) : (
            <button>
              <Link to="/login">
                <TbLogin2 className="inline-block text-3xl hover:text-gray-500" />
              </Link>
            </button>
          )}
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
