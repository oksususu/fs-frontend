import React, { useState, useCallback } from 'react'

const CartItem = ({ option, onUpdateQuantity }) => {
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = useCallback(() => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1
      onUpdateQuantity(option.id, newQuantity)
      return newQuantity
    })
  }, [onUpdateQuantity, option.id])

  const handleDecrement = useCallback(() => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1
        onUpdateQuantity(option.id, newQuantity)
        return newQuantity
      })
    }
  }, [onUpdateQuantity, option.id, quantity])

  return (
    <div>
      <h3>{option.name}</h3>
      <p>Price: ${option.price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

const ShoppingCart = () => {
  const [cartOptions, setCartOptions] = useState([
    { id: 1, name: 'Option 1', price: 10.99, quantity: 1 },
    { id: 2, name: 'Option 2', price: 15.99, quantity: 1 },
    // ... 추가적인 옵션들
  ])

  const handleUpdateQuantity = useCallback((optionId, newQuantity) => {
    setCartOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId ? { ...option, quantity: newQuantity } : option
      )
    )
  }, [])

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartOptions.map((option) => (
        <CartItem
          key={option.id}
          option={option}
          onUpdateQuantity={handleUpdateQuantity}
        />
      ))}
    </div>
  )
}

export default ShoppingCart
