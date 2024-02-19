import React, { useState } from 'react'
import sample from '../../assets/404.png'
import ProductInfo from '../product/ProductInfo'

function ProductCard({
  productName,
  productId,
  productImg,
  price,
  orderQuantity,
}) {
  return (
    <div className="w-full m-2">
      <div className="w-full mx-auto flex justify-start items-start gap-2">
        <img src={productImg} className="w-40 h-40 px-2"></img>
        <div className=" w-full flex-col justify-start items-start gap-4 flex">
          <ProductInfo
            productName={productName}
            price={price}
            stockQuantity={100}
            categoryId={0}
            showCategory={false}
          />
          <div className="flex items-center gap-2">
            <div className="badge badge-outline border-solid">옵션</div>
            <div>{`${orderQuantity}개`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
