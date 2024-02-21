import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { callGetProductByProductIdAPI } from '../../apis/api'

function ProductPay({ productId }) {
  const [product, setProduct] = useState({})
  useEffect(() => {
    callGetProductByProductIdAPI(productId).then(({ data }) => {
      setProduct(data)
    })
  }, [])
  return (
    <div className="w-full mx-2">
      <div className="w-full mb-2 mx-4 text-black text-xl font-bold font-['Noto Sans KR'] leading-7">
        {brandName}
      </div>
      {Object.entries(brandCart).map(([productId, productCart]) => {
        return <ProductCard key={productId} {...productCart} />
      })}
      <div className="divider m-0"></div>
    </div>
  )
}

export default ProductPay
