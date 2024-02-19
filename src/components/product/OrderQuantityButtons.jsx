import React, { useState } from 'react'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'
import { GrPowerReset } from 'react-icons/gr'

function OrderQuantityButtons({ orderQuantity, handleOrderQuantity }) {
  const handleIncrement = () => {
    handleOrderQuantity(orderQuantity + 1)
  }
  const handleDecrement = () => {
    if (orderQuantity > 1) {
      handleOrderQuantity(orderQuantity - 1)
    }
  }
  const handleDeletion = () => {
    handleOrderQuantity(1)
  }

  return (
    <div className="w-full py-2 px-2 flex justify-between border-solid border-2 rounded-lg border-indie-pink">
      <div className="flex text-center items-center gap-2">
        <button onClick={handleDecrement}>
          <CiCircleMinus className="inline-block text-4xl text-indie-pink" />
        </button>
        <p className="text-black text-xl font-['Noto Sans KR'] leading-7">
          {orderQuantity}
        </p>
        <button onClick={handleIncrement}>
          <CiCirclePlus className="inline-block text-4xl text-indie-pink" />
        </button>
      </div>
      <div className="flex items-center">
        <button onClick={handleDeletion}>
          <GrPowerReset className="inline-block text-3xl text-ironside-gray" />
        </button>
      </div>
    </div>
  )
}

export default OrderQuantityButtons
