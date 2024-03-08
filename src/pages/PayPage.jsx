import React, { useEffect, useState } from 'react'
import BrandPay from '../components/pay/BrandPay'

import { useRecoilState } from 'recoil'
import { orderBrandListState } from '../atoms/cartAtom'
import { cartState } from '../atoms/cartAtom'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { callPostOrderAPI } from '../apis/api'

function PayPage() {
  const navigate = useNavigate()
  const [orderBrandList, setOrderBrandList] =
    useRecoilState(orderBrandListState)
  const [cart, setCart] = useRecoilState(cartState)
  const [totalPrice, setTotalPrice] = useState(0)
  const token = localStorage.getItem('token')

  const handleClickOrderButton = () => {
    alert('주문이 완료되었습니다! 메인페이지로 이동합니다.')

    const newCart = { ...cart }
    const orderItems = []
    Object.entries(newCart).map(([brandId, _]) => {
      Object.entries(newCart[brandId]).forEach(
        ([productId, { orderQuantity, price }]) => {
          orderItems.push({ productId, quantity: orderQuantity, price })
        }
      )
      orderBrandList.includes(String(brandId)) && delete newCart[brandId]
    })
    callPostOrderAPI(totalPrice, orderItems, token).then((res) => {
      setCart(newCart)

      setOrderBrandList([])
      navigate('/')
    })
  }

  useEffect(() => {
    if (orderBrandList.length === 0) {
      alert('올바르지 않은 접근입니다. 메인페이지로 이동합니다.')
      navigate('/')
    }
  }, [])

  useEffect(() => {
    let price = 0
    Object.entries(cart)
      .filter(([brandId, _]) => orderBrandList.includes(brandId))
      .forEach(([brandId, brandCart]) => {
        const brandPrice = Object.entries(brandCart).reduce(
          (prev, [_, { price, orderQuantity }]) => prev + price * orderQuantity,
          0
        )
        price += brandPrice
      })
    setTotalPrice(price)
  }, [cart])

  return (
    <div className="w-full my-[24px] px-2">
      <div className="border-solid border-[4px] border-gray-200 round rounded-xl">
        <div className="m-4 text-center text-3xl font-bold font-['Noto Sans KR'] leading-normal">
          주문상품
        </div>
        <div className="divider m-0 h-[1px] mb-2"></div>
        {Object.entries(cart)
          .filter(([brandId, _]) => orderBrandList.includes(brandId))
          .map(([brandId, brandCart]) => {
            return (
              <BrandPay brandId={brandId} brandCart={brandCart} key={brandId} />
            )
          })}
        <div className="my-4 mx-8 flex justify-between text-xl text-pink-500 text-bold font-bold font-['Noto Sans KR']">
          <div className="">총 주문 금액</div>
          <div>₩ {totalPrice.toLocaleString('ko-KR')}</div>
        </div>
        <div className="my-3 text-center ">
          <div className="m-3">
            주문내용을 확인후, 주문하기 버튼을 눌러주세요
          </div>
          <button onClick={handleClickOrderButton} className="w-80 btn mx-2">
            주문하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default PayPage
