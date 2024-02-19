import React from 'react'
import sampleImg from '../../assets/404.png'
import { Link } from 'react-router-dom'

function ProductDisplayCard({ productName, price, productImg, productId }) {
  return (
    <div className="w-1/3 h-80 flex flex-col justify-start items-start gap-2 ">
      <div className="w-full px-3 w-full">
        <Link to={`/product/${productId}`}>
          <img src={productImg} className="w-full object-cover rounded-lg" />
        </Link>
        <div className="w-full flex-col overflow-hidden justify-start items-start gap-1 inline-flex">
          <div className="w-full text-black truncate text-base font-bold font-['Noto Sans KR'] leading-normal">
            {productName}
          </div>
          <div className="w-full text-black text-base font-bold font-['Noto Sans KR'] leading-snug">
            {`${price && price.toLocaleString('ko-KR')}원`}
          </div>
        </div>
        <div className="w-6 h-6 relative" />
      </div>
    </div>
  )
}

export default ProductDisplayCard
