import React, { useState } from 'react'

function ColorChangingButton({ isActive }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: `${isClicked ? 'red' : 'blue'}` }}
      className={`text-black font-bold py-2 px-4 rounded transition-colors duration-500 ease-in-out `}
    >
      {isClicked ? 'Clicked!' : 'Click me!'}
    </button>
  )
}

export default ColorChangingButton
