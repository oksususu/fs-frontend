import React, { useState, useRef } from 'react'

import { FaUserAlt, FaKey } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { callPostAccountAPI } from '../apis/api'
import { useNavigate } from 'react-router-dom'

function SignupPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userNameRef = useRef('')
  const [error, setError] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i

    if (!emailRegex.test(email)) {
      setError('올바른 이메일 주소를 입력하세요.')
    } else {
      setError('')
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    if (password.length < 8) {
      setError('비밀번호는 최소 8자 이상이어야 합니다.')
    } else {
      setError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (error.length > 0) {
      alert('양식을 확인해주세요')
      return
    }
    try {
      const userName = userNameRef.current.value
      await callPostAccountAPI(userName, email, password)
        .then(() => {
          alert('회원가입되었습니다. 로그인페이지로 이동합니다')
          navigate('/login')
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            alert('존재하는 계정의 email입니다')
          } else {
            console.log(error)
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full my-[120px] px-24 flex-col justify-center items-center ">
      <div className="m-2 mb-10 text-center">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <MdEmail />
          <input type="text" placeholder="Email" onChange={handleEmailChange} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <FaUserAlt />
          <input type="text" placeholder="이름" ref={userNameRef} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <FaKey />
          <input type="password" onChange={handlePasswordChange} />
        </label>
        <div className="my-2 text-center text-red-500">
          {error && <p>{error}</p>}
        </div>

        <button
          className="w-full mt-2 btn text-white h-14 px-4 bg-gray-400 hover:bg-ironside-gray rounded-[100px] justify-center items-center gap-0.5 flex"
          type="submit"
        >
          회원가입
        </button>
      </form>
    </div>
  )
}

export default SignupPage
