import React from 'react'
import BrandPay from './BrandPay'
import { OrderStatusMap } from '../../data/mapData'

function OrderCard({
  orderId,
  totalPrice,
  orderDate,
  status,
  brandId2OrderItems,
}) {
  return (
    <div className="border-solid border-[4px] border-gray-200 round rounded-xl">
      <div className="m-4 text-center flex justify-between font-bold font-['Noto Sans KR'] leading-normal">
        <div>{`주문 번호 : ${orderId}`}</div>
        <div>{OrderStatusMap.get(status)}</div>
      </div>
      <div className="divider m-0 h-[1px] mb-2"></div>
      {Object.entries(brandId2OrderItems).map(([brandId, brandOrder]) => {
        const brandOrderedCart = {}
        Object.entries(brandOrder).forEach(
          ([productId, { Product, price, quantity, product_id }]) => {
            const { product_img, product_name } = Product
            brandOrderedCart[productId] = {
              orderQuantity: quantity,
              price,
              productId: product_id,
              productImg: product_img,
              productName: product_name,
            }
          }
        )
        return <BrandPay brandId={brandId} brandCart={brandOrderedCart} />
      })}
      <div className="my-4 mx-8 flex justify-between text-xl text-pink-500 text-bold font-bold font-['Noto Sans KR']">
        <div className="">총 주문 금액</div>
        <div>₩ {totalPrice.toLocaleString('ko-KR')}</div>
      </div>
    </div>
  )
}

export default OrderCard
