import React from 'react'
import BrandCard from './BrandCard'

const BrandList = ({ brandListTitle, brandList }) => {
  return (
    <div className="w-full m-3 flex-col justify-center items-start gap-2 inline-flex">
      {/* brandListTitle */}
      <div className="text-black text-2xl font-bold font-['Noto Sans KR'] leading-[34px]">
        {brandListTitle}
      </div>

      {/* BrandCards */}
      {/* <div className="flex justify-start items-start gap-8 carousel rounded-box"> */}
      <div className="w-full carousel carousel-center gap-8 overscroll-x-auto">
        {brandList.map((brandItem) => {
          return (
            <BrandCard
              // className="carousel-item"
              key={brandItem.brand_id}
              brandId={brandItem.brand_id}
              brandName={brandItem.brand_name}
              brandImg={brandItem.brand_img}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BrandList
