import React from 'react'
import ProductCard from './ProductCard'
import BrandTitle from './BrandTitle'

const ProductList = ({ brandName, isPermanent = false }) => {
  return (
    <div className="w-full m-3 flex-col justify-center items-start gap-2 inline-flex">
      {/* ProductListTitle */}
      <BrandTitle brandName={brandName} isPermanent={isPermanent} />

      {/* ProductCards */}
      {/* <div className="flex justify-start items-start gap-8 carousel rounded-box"> */}
      <div className="w-full carousel carousel-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          return (
            <ProductCard
              className="carousel-item"
              key={index}
              productName="상품명"
              price={0}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
