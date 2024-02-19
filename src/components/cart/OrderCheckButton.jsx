import React, { useState } from 'react'
import { BiSquare, BiCheckSquare } from 'react-icons/bi'

import { useRecoilState, useSetRecoilState } from 'recoil'
import { orderBrandListState } from '../../atoms/cartAtom'

function OrderCheckButton({ brandId }) {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem('cart')[brandId]?.isChecked
  )
  const [orderBrandList, setOrderBrandList] =
    useRecoilState(orderBrandListState)

  const handleClick = () => {
    const newIsChecked = !isChecked

    setIsChecked(newIsChecked)
    setOrderBrandList((orderBrandList) => {
      if (!newIsChecked) {
        return orderBrandList.filter((orderBrand) => orderBrand != brandId)
      } else {
        return [...orderBrandList, brandId]
      }
    })
  }

  return (
    <button onClick={handleClick}>
      <div className="inline-block text-3xl">
        {isChecked ? <BiCheckSquare className="text-red-500" /> : <BiSquare />}
      </div>
    </button>
  )
}

export default OrderCheckButton
