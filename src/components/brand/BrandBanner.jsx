import React from 'react'
import { Link } from 'react-router-dom'

const BrandBanner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Link to="brand/533">
          <img
            src="https://img.29cm.co.kr/next-brand/2024/01/25/1916b61a7f5c42e9880f4264e2a7dcb7_20240125170907.jpg?width=1200"
            className="w-full"
          />
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Link to="/brand/445">
          <img
            src="https://img.29cm.co.kr/next-brand/2024/01/04/4f46ed055c5d47d9aa75fbf20d04ac52_20240104173948.jpg?width=1200"
            className="w-full"
          />
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Link to="brand/507">
          <img
            src="https://img.29cm.co.kr/next-brand/2023/08/30/b86d914b8f08464183711f0900ab6362_20230830113134.jpg?width=1200"
            className="w-full"
          />
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Link to="brand/103">
          <img
            src="https://img.29cm.co.kr/next-brand/2022/05/04/69dc94358fe14cb3a3267b304cd47267_20220504211335.jpg?width=1200"
            className="w-full"
          />
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}

export default BrandBanner
