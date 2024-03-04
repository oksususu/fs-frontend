import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BrandCart from '../components/cart/BrandCart'

import { useRecoilState, useSetRecoilState } from 'recoil'
import { cartState } from '../atoms/cartAtom'
import { orderBrandListState } from '../atoms/cartAtom'

function CartPage() {
  const navigate = useNavigate()
  const [cart, setCart] = useRecoilState(cartState)
  const [orderBrandList, setOrderBrandList] =
    useRecoilState(orderBrandListState)

  const handleOrderBrandCart = () => {
    if (orderBrandList.length === 0) {
      alert('제품을 선택해주세요!')
    } else {
      navigate('/pay')
    }
  }

  useEffect(() => {
    setOrderBrandList([])
  }, [])

  return Object.keys(cart).length !== 0 ? (
    <div className="h-screen w-full my-[24px] px-2">
      {Object.entries(cart).map(([brandId, brandCart]) => {
        return (
          <BrandCart key={brandId} brandId={brandId} brandCart={brandCart} />
        )
      })}
      <div className="w-full my-3">
        <button onClick={handleOrderBrandCart} className="w-full btn">
          선택제품 주문하기
        </button>
      </div>
    </div>
  ) : (
    <div className="w-full my-[24px] px-2 font-bold">
      장바구니에 상품이 없습니다. 장바구니에 상품을 담아주세요 :)
    </div>
  )
}

export default CartPage
