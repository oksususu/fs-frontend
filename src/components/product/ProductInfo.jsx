import React from 'react'
import { CategoryMap } from '../../data/mapData'

function ProductInfo({ productName, price, categoryId, showCategory = true }) {
  return (
    <div className="w-full flex-col justify-start items-start gap-1 flex">
      <div className="w-full px-4 text-right leading-8 text-xs text-white rounded-t-2xl bg-neutral-600">
        {showCategory && `${CategoryMap.get(String(categoryId))}`}
      </div>
      <div className="w-full flex justify-between items-start text-black text-xl font-bold font-['Noto Sans KR'] leading-7">
        <div>{productName}</div>
      </div>

      <div className="w-full text-left text-pink-500 text-xl font-bold font-['Noto Sans KR'] leading-normal">
        {price && `₩ ${price.toLocaleString('ko-KR')}`}
      </div>
    </div>
  )
}

export default ProductInfo
