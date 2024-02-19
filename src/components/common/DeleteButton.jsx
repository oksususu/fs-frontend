import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'

function DeleteButton({ handleClick }) {
  return (
    <button onClick={handleClick}>
      <FaRegTrashCan className="inline-block text-2xl hover:text-red-500" />
    </button>
  )
}

export default DeleteButton
