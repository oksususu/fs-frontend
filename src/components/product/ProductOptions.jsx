import React, { useEffect, useRef, useState } from 'react'
import ProductOptionButtons from './ProductOptionButtons'

function ProductOptions() {
  // 여기에 각 옵션 값을 넣어두기
  const [options, setOptions] = useState([])
  const el = useRef()

  const handleUpdateQuantity = (optionId, newQuantity) => {
    const updatedOptions = options.map((option) =>
      option.id === optionId ? { ...option, quantity: newQuantity } : option
    )
    setOptions(updatedOptions)
  }

  const handleCloseOption = (e) => {
    if (el.current && !el.current.contains(e.target)) {
      console.log((el.current.open = false))
    }
  }

  useEffect(() => {
    setOptions([
      {
        name: '옵션1옵션1옵션1옵션1옵션1옵션1옵션1옵션1옵션1옵션1옵션1',
        quantity: 0,
        id: 0,
      },
      { name: '옵션2', quantity: 0, id: 1 },
      { name: '옵션3', quantity: 2, id: 2 },
      { name: '옵션4', quantity: 0, id: 3 },
    ])
    document.addEventListener('click', handleCloseOption)

    return () => {
      document.removeEventListener('click', handleCloseOption)
    }
  }, [])

  return (
    <div className="relative h-20">
      <ul className="menu z-10 absolute bg-yellow-50  w-[340px] rounded-box">
        <li>
          <details ref={el}>
            <summary>옵션 선택</summary>
            <ul>
              <table className="table">
                <tbody>
                  {options.map((option, key) => {
                    return (
                      <tr key={`option-${key}`}>
                        <td>{option.name}</td>
                        <td>
                          <ProductOptionButtons
                            option={option}
                            onUpdateQuantity={handleUpdateQuantity}
                          />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  )
}

export default ProductOptions
