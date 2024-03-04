import React, { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { loginState } from '../atoms/accountAtom'

import { FaUserAlt, FaKey } from 'react-icons/fa'
import { callPostAccountLoginAPI } from '../apis/api'

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // 서버로 로그인 요청 및 JWT 토큰 수신
      const email = emailRef.current.value
      const password = passwordRef.current.value

      const response = await callPostAccountLoginAPI(email, password)
      const token = response.data.accessToken

      // JWT 토큰을 로컬 스토리지 또는 쿠키에 저장
      localStorage.setItem('token', token)

      // // 사용자 로그인 상태 업데이트
      setIsLoggedIn(true)
      navigate('/')
      alert('로그인되었습니다')
    } catch (error) {
      alert('이메일 또는 비밀번호가 틀렸습니다.')
    }
  }

  return (
    <div className="h-screen w-full my-[120px] px-24 flex-col my justify-center items-center ">
      <div className="m-2 mb-10 text-center">
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <FaUserAlt />
          <input type="text" ref={emailRef} placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <FaKey />
          <input type="password" ref={passwordRef} />
        </label>
        <button
          className="w-full mt-2 btn text-white h-14 px-4 bg-gray-400 hover:bg-ironside-gray rounded-[100px] justify-center items-center gap-0.5 flex"
          type="submit"
        >
          로그인
        </button>
      </form>
      <Link to="/signup">
        <div className="mt-5 text-center underline">
          계정이 없으시다면 회원가입부터!
        </div>
      </Link>
    </div>
  )
}

export default LoginPage
