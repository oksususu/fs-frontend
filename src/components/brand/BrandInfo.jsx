import React from 'react'
import BrandTitle from './BrandTitle'

function BrandInfo({ brandName, description, brandImg }) {
  return (
    <div className="w-full flex justify-start items-start gap-8">
      <img
        className="w-[220px] h-[220px] object-cover rounded-lg"
        src={brandImg}
      />
      <div className="my-10 flex flex-col justify-start items-start gap-8">
        <BrandTitle brandName={brandName} />
        <div className="text-black text-base font-bold font-['Noto Sans KR'] leading-snug">
          {description}
        </div>
      </div>
    </div>
  )
}

export default BrandInfo
