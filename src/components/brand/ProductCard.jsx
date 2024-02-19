import React from 'react'
import sample from '../../assets/404.png'

function ProductCard({ productName, price }) {
  return (
    <div>
      <div
        style={{ width: '10em' }}
        className=" flex-col justify-start items-start gap-1.5"
      >
        <Link to="/product/45">
          <img
            style={{ width: '10rem' }}
            className="h-40 bg-zinc-300 rounded-lg"
            src={sample}
          />
        </Link>
        <div className="flex-col justify-start items-start gap-0.5 flex">
          <div className="text-center text-black text-base font-normal font-['Noto Sans KR'] leading-normal">
            {productName}
          </div>
          <div className="text-black text-base font-bold font-['Noto Sans KR'] leading-snug">
            {price}원
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
