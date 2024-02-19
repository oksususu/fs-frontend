import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Reset } from 'styled-reset'

import './App.css'
import MainPage from './pages/MainPage'
import Layout from './pages/Layout'

import CreatorInfoPage from './pages/CreatorDetailPage'
import BrandDetailPage from './pages/BrandDetailPage'
import ProductDetailPage from './pages/ProductDetailPage'
import SearchPage from './pages/SearchPage'
import CartPage from './pages/CartPage'
import PayPage from './pages/PayPage'
import ErrorPage from './pages/ErrorPage'

function App() {
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
