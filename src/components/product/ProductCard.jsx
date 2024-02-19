import React, { useEffect, useState } from 'react'
import ProductInfo from './ProductInfo'
import OrderButtons from './OrderButtons'
import OrderQuantityButtons from './OrderQuantityButtons'

import { useRecoilState } from 'recoil'
import { cartState } from '../../atoms/cartAtom'

function ProductCard({
  productName,
  productId,
  productImg,
  categoryId,
  price,
  stockQuantity,
  brandId,
  totalLike,
}) {
  const [orderQuantity, setOrderQuantity] = useState(1)
  const [cart, setCart] = useRecoilState(cartState)

  const handleOrderQuantity = (orderQuantity) => {
    setOrderQuantity(orderQuantity)
  }

  const handleClickCartButton = () => {
    /* add product to cart*/

    const brandKey = String(brandId)
    const productKey = String(productId)
    const newCart = { ...cart }

    // 해당 brand cart 수정
    !(brandKey in newCart) && (newCart[brandKey] = {})
    const newBrandCart = { ...newCart[brandKey] }
    const newProductCart =
      productKey in newBrandCart
        ? {
            productName,
            productId,
            productImg,
            price,
            orderQuantity:
              orderQuantity + newBrandCart[productKey].orderQuantity,
          }
        : { productName, productId, productImg, price, orderQuantity }
    newBrandCart[productKey] = newProductCart

    // 새로운 cart 업데이트
    newCart[brandId] = newBrandCart
    setCart(newCart)
  }

  return (
    <div className="w-full">
      <div className="w-full mx-auto flex justify-start items-start gap-[54px]">
        <img src={productImg} className="w-60 h-60 px-2"></img>
        <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-start gap-4 flex">
            <ProductInfo
              productName={productName}
              price={price}
              stockQuantity={stockQuantity}
              categoryId={categoryId}
            />
            <OrderQuantityButtons
              orderQuantity={orderQuantity}
              handleOrderQuantity={handleOrderQuantity}
            />
            <div className="w-full flex justify-between items-start">
              <div className="text-black text-xl font-bold font-['Noto Sans KR'] leading-7">
                총 금액
              </div>
              <div className="text-black text-xl font-bold font-['Noto Sans KR'] leading-7">
                {price && (price * orderQuantity).toLocaleString('ko-KR')}원
              </div>
            </div>
            <OrderButtons
              handleOrderQuantity={handleOrderQuantity}
              handleClickCartButton={handleClickCartButton}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
