import React, { useState } from 'react'
import OrderQuantityButtons from '../product/OrderQuantityButtons'
import ProductInfo from '../product/ProductInfo'
import DeleteButton from '../common/DeleteButton'

import { useSetRecoilState } from 'recoil'
import { cartState } from '../../atoms/cartAtom'

function ProductCard({
  price,
  productName,
  productImg,
  brandId,
  productId,
  orderQuantity: initialOrderQuantity,
}) {
  const [orderQuantity, setOrderQuantity] = useState(initialOrderQuantity)
  const setCart = useSetRecoilState(cartState)

  const handleUpdateProductCart = (newOrderQuantity) => {
    setCart((cart) => {
      const newCart = { ...cart }
      const newBrandCart = { ...cart[brandId] }
      const newProductCart = { ...newBrandCart[productId] }

      newProductCart['orderQuantity'] = newOrderQuantity
      newBrandCart[productId] = newProductCart
      newCart[brandId] = newBrandCart

      return { ...newCart }
    })
  }

  const handleDeleteProductCart = () => {
    setCart((cart) => {
      const newCart = { ...cart }
      const newBrandCart = { ...newCart[brandId] }

      delete newBrandCart[productId]

      if (Object.keys(newBrandCart).length === 0) {
        delete newCart[brandId]
      } else {
        newCart[brandId] = newBrandCart
      }

      return { ...newCart }
    })
  }

  const handleOrderQuantity = (orderQuantity) => {
    setOrderQuantity(orderQuantity)
    handleUpdateProductCart(orderQuantity)
  }

  return (
    <div className="w-full">
      <div className="w-full mx-auto flex justify-start items-start gap-2">
        <img src={productImg} className="w-40 h-40 px-2"></img>
        <div className="w-full flex-col justify-between items-start gap-4 flex">
          <ProductInfo
            productName={productName}
            price={price}
            showCategory={false}
          />
          <OrderQuantityButtons
            orderQuantity={orderQuantity}
            handleOrderQuantity={handleOrderQuantity}
          />
        </div>
        <DeleteButton handleClick={handleDeleteProductCart} />
      </div>
      <div className="divider "></div>
    </div>
  )
}

export default ProductCard
