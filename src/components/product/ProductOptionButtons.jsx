import React, { useState } from 'react'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'
import { GrPowerReset } from 'react-icons/gr'

function ProductOptionButtons({ option, onUpdateQuantity }) {
  const [quantity, setQuantity] = useState(option.quantity)

  const handleIncrement = () => {
    setQuantity(quantity + 1)
    onUpdateQuantity(option.id, quantity + 1)
  }
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
      onUpdateQuantity(option.id, quantity - 1)
    }
  }
  const handleDeletion = () => {
    setQuantity(0)
    onUpdateQuantity(option.id, 0)
  }

  return (
    <div className="">
      <button onClick={handleDecrement}>
        <CiCircleMinus className="inline-block text-4xl text-yellow-500" />
      </button>
      {quantity}
      <button onClick={handleIncrement}>
        <CiCirclePlus className="inline-block text-4xl text-yellow-500" />
      </button>
      <button onClick={handleDeletion}>
        <GrPowerReset className="inline-block text-xl text-red-500" />
      </button>
    </div>
  )
}

export default ProductOptionButtons
