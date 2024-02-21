import React from 'react'

function BadgeButton({ text, handleClickButton }) {
  return (
    <button onClick={() => handleClickButton(text)}>
      <div className="p-4 badge badge-outline border-solid hover:bg-gray-200">
        {text}
      </div>
    </button>
  )
}

export default BadgeButton
