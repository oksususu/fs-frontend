import React from 'react'

function PriceInfo({ productPrice, deliveryPrice }) {
  return (
    <div className="m-4 flex flex-col gap-4 text-black text-xl font-bold font-['Noto Sans KR'] leading-7">
      <div className="flex justify-between">
        <div>상품금액</div>
        <div>{`${productPrice.toLocaleString('ko-KR')}원`}</div>
      </div>
      <div className="flex justify-between">
        <div>배송비</div>
        <div>{`${deliveryPrice.toLocaleString('ko-KR')}원`}</div>
      </div>
      <div className="flex justify-between">
        <div>총 금액</div>
        <div>{`${(productPrice + deliveryPrice).toLocaleString('ko-KR')}원`}</div>
      </div>
    </div>
  )
}

export default PriceInfo
