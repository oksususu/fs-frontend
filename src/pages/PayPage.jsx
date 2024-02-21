import React, { useEffect } from 'react'
import BrandPay from '../components/pay/BrandPay'

import { useRecoilState } from 'recoil'
import { orderBrandListState } from '../atoms/cartAtom'
import { cartState } from '../atoms/cartAtom'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

function PayPage() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.get('order'), 'hi')
  const [orderBrandList, setOrderBrandList] =
    useRecoilState(orderBrandListState)
  const [cart, setCart] = useRecoilState(cartState)

  const handleClickOrderButton = () => {
    alert('주문이 완료되었습니다! 메인페이지로 이동합니다.')

    const newCart = { ...cart }
    Object.entries(newCart).map(([brandId, _]) => {
      orderBrandList.includes(String(brandId)) && delete newCart[brandId]
    })
    setCart(newCart)

    setOrderBrandList([])
    navigate('/')
  }

  useEffect(() => {
    if (orderBrandList.length === 0 && !orderProductId) {
      alert('올바르지 않은 접근입니다. 메인페이지로 이동합니다.')
      navigate('/')
    }
  }, [])

  return (
    <div className="w-full my-[24px] px-2  border-solid border-[4px] border-gray-200 round rounded-xl">
      <div className="m-4 text-center text-3xl font-bold font-['Noto Sans KR'] leading-normal">
        주문상품
      </div>
      <div className="divider m-0 h-[1px] mb-2"></div>
      {Object.entries(cart)
        .filter(([brandId, _]) => orderBrandList.includes(brandId))
        .map(([brandId, brandCart]) => {
          return <BrandPay brandId={brandId} brandCart={brandCart} />
        })}
      <div className="w-full my-3 text-center ">
        <div className="m-3">주문내용을 확인후, 주문하기 버튼을 눌러주세요</div>
        <button onClick={handleClickOrderButton} className="w-full btn">
          주문하기
        </button>
      </div>
    </div>
  )
}

export default PayPage
