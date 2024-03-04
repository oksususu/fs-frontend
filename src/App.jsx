import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Reset } from 'styled-reset'

import { useRecoilState } from 'recoil'
import { loginState } from './atoms/accountAtom'

import './App.css'
import MainPage from './pages/MainPage'
import Layout from './pages/Layout'

import BrandDetailPage from './pages/BrandDetailPage'
import ProductDetailPage from './pages/ProductDetailPage'
import SearchPage from './pages/SearchPage'
import CartPage from './pages/CartPage'
import PayPage from './pages/PayPage'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { useEffect } from 'react'
import { callGetAccountInfoAPI } from './apis/api'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)

  const validateToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }
    const userInfo = await callGetAccountInfoAPI(token).then((res) => res.data)
    if (Object.keys(userInfo).length === 0) {
      localStorage.setItem('token', '')
    } else {
      setIsLoggedIn(true)
    }
  }

  useEffect(() => {
    validateToken()
  }, [])

  return (
    <Router>
      <Reset />
      <Routes>
        {/* https://velog.io/@diso592/React-Router-2.-%EC%A4%91%EC%B2%A9-%EB%9D%BC%EC%9A%B0%ED%8C%85 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="brand/:id" element={<BrandDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="pay" element={<PayPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />}></Route>
        </Route>
        {/* <Route path="admin" element={<AdminPage />}>
          <Route index element={<AdminLayout />} />
        </Route> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
