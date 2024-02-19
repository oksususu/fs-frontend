import React from 'react'

function BrandTitle({ brandName, isPermanent }) {
  return (
    <div className="flex text-black font-['Noto Sans KR']">
      <div className="text-2xl font-bold">{brandName}</div>
      {/* <span className=" mx-2 px-2 leading-8 text-xs text-white rounded-full bg-neutral-600">
        {isPermanent ? '상시마켓' : '통판마켓'}
      </span> */}
    </div>
  )
}

export default BrandTitle
