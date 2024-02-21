import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderButtons({ handleOrderQuantity, handleClickCartButton }) {
  const navigate = useNavigate()

  return (
    <div className="w-full justify-start items-start gap-4 inline-flex">
      <button
        className="btn grow shrink basis-0 h-14 px-4 bg-gray-400 hover:bg-ironside-gray rounded-[100px] justify-center items-center gap-0.5 flex"
        onClick={() => {
          alert('상품을 장바구니에 담았습니다.')
          handleClickCartButton()
          handleOrderQuantity(1)
        }}
      >
        <div className="text-center text-white text-l text-base font-border font-['Noto Sans KR']">
          장바구니
        </div>
      </button>
      <button
        className="btn grow shrink basis-0 h-14 px-4 bg-indie-pink hover:bg-blue-200 rounded-[100px] justify-center items-center gap-0.5 flex"
        onClick={() => {
          alert('구매되었습니다.')
          navigate({ pathname: '/pay', search: '?sort=date&order=newest' })
        }}
      >
        <div className="text-center text-white text-l text-base font-border font-['Noto Sans KR']">
          바로구매
        </div>
      </button>
    </div>
  )
}

export default OrderButtons
