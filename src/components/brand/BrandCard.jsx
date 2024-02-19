import React from 'react'
import { Link } from 'react-router-dom'

function BrandCard({ brandId, brandName, brandImg }) {
  return (
    <div className="carousel-item">
      <div className="flex-col justify-start items-start gap-1.5">
        <Link to={`/brand/${brandId}`}>
          <img
            className="w-40 h-40 bg-zinc-300 object-cover rounded-lg"
            src={brandImg}
          />
        </Link>

        <div className="mt-2 flex-col justify-start items-center gap-0.5 flex">
          <div className="text-center text-black text-base font-normal font-['Noto Sans KR'] leading-normal">
            {brandName}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandCard
